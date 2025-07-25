import { useLoaderData, useParams } from 'react-router-dom'
import { FormEvent, useEffect, useState } from 'react'
import {
  Categories,
  CategoryType,
  Item,
  getNewID,
} from '@/utils/localStorageHandler'
import AddItem from '../../components/category page/AddItem'
import { ItemDisplay } from '@/components/category page/Item'

const Category = () => {
  const { category } = useParams()
  const getData = useLoaderData() as Categories

  const [Items, setItems] = useState<Categories>(getData)

  const [CategoryData, setCategoryData] = useState<CategoryType>(
    Items[category as string] || {
      Items: [],
      Budget: 1,
      Total: 0,
    }
  )

  useEffect(() => {
    setCategoryData(
      Items[category as string] || {
        Items: [],
        Budget: 1,
        Total: 0,
      }
    )
  }, [category, getData])
  useEffect(() => {
    setItems((prevState) => ({
      ...prevState,
      [category as string]: CategoryData,
    }))
  }, [CategoryData, category])

  useEffect(() => {
    localStorage.setItem('Items', JSON.stringify(Items))
  }, [Items])

  const additem = (e: FormEvent) => {
    e.preventDefault()
    setCategoryData((prevState) => {
      const newItem: unknown = Object.fromEntries(
        new FormData(e.currentTarget as HTMLFormElement)
      )
      console.log(newItem)

      const allIDs: number[] = []

      for (const c in Items) {
        Items[c].Items.forEach((item: Item) => {
          allIDs.push(item.id)
        })
      }

      const newItemwithNewId: Item = getNewID(allIDs, newItem as Item)

      if (!allIDs.includes(newItemwithNewId.id)) {
        return {
          ...prevState,
          Items: [...prevState.Items, newItemwithNewId],
          Total: Number(prevState.Total) + Number(newItemwithNewId.Total),
        }
      }

      return prevState
    })
  }

  const editItem = (data: Item) => {
    setCategoryData((prevState) => {
      const prevItem = prevState.Items.find((item) => item.id === data.id)

      return {
        ...prevState,
        Items: prevState.Items.map((item) => {
          if (item.id === data.id) {
            return data
          }
          return item
        }),
        Total: prevState.Total - prevItem!.Total + data.Total,
      }
    })
  }

  const deleteItem = (data: Item) => {
    setCategoryData((prevState) => ({
      ...prevState,
      Items: prevState.Items.filter((item) => item.id !== data.id),
      Total: prevState.Items.reduce(
        (acc: number, item: Item) => acc + item.Total,
        0
      ),
    }))
  }

  return (
    <>
      <main className="flex flex-col justify-center items-center text-center gap-2 pt-10 pb-20 px-2">
        <h1>{upperCaseTitle(category?.replace(/_/g, ' ') as string)}</h1>
        <div>
          <div data-testid="budget">
            {CategoryData.Budget === 0 ? (
              <p id="nobudget" className="text-red-500">
                Budget is set to zero!
              </p>
            ) : (
              ''
            )}
            Budget:{' '}
            <input
              type="number"
              value={CategoryData.Budget === 0 ? '' : CategoryData.Budget}
              placeholder="0"
              data-testid="budget-input"
              className="input text-center rounded-md w-20 mb-2"
              onChange={(e) => {
                setCategoryData((prev) => ({
                  ...prev,
                  Budget: e.target.value ? parseFloat(e.target.value) : 0,
                }))
              }}
            />
          </div>
          <AddItem ItemAdded={additem} />
          <p>Total: {CategoryData.Total}</p>
          <p>Difference: {CategoryData.Budget - CategoryData.Total}</p>
        </div>
        <p>from Items:</p>
        {CategoryData?.Items.map((item: Item) => (
          <ItemDisplay
            edit={editItem}
            dlt={deleteItem}
            key={item.id}
            params={item}
          />
        ))}
      </main>
    </>
  )
}

const upperCaseTitle: (sentence: string) => string = (sentence: string) => {
  return sentence.replace(/\w\S*/g, (txt: string) => {
    return txt.charAt(0).toUpperCase() + txt.substring(1).toLowerCase()
  })
}

export default Category
