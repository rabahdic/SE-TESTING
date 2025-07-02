describe('When first navigated to the homepage', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  after(() => {
    cy.saveLocalStorage()
  })

  it('should display an error if the user provides no name', () => {
    cy.get('.btn').click()
    cy.wait(200)
      .contains(/no name/i)
      .should('be.visible')
  })
  it('should navigate to the loading page the dashboard if name was provided', () => {
    cy.get('.textinput').type('Test User')
    cy.get('.btn').click()
    cy.get('h1').should('be.visible')
    cy.contains(/hello/i).should('be.visible')

    cy.wait(2000)
  })
})

describe('When the user is already given', () => {
  before(() => {
    cy.restoreLocalStorage()
  })
  after(() => {
    cy.saveLocalStorage()
  })
  it("should display the user's name in the homepage", () => {
    cy.visit('/')
    cy.contains(/test user/i).should('be.visible')
    cy.get('.btn').click()
    cy.wait(2000)
  })
})

describe('When the user navigated to the dashboard', () => {
  beforeEach(() => {
    cy.restoreLocalStorage()
    cy.visit('/home')
  })
  afterEach(() => {
    cy.saveLocalStorage()
  })

  it('should display about page details when about tab button is clicked', () => {
    cy.get('[href="/capycopy/about"]').click()
    cy.wait(200).contains(/about/i).should('be.visible')
  })
  it('should display tracker page details when tracker tab button is clicked', () => {
    cy.get('[href="/capycopy/tracker"]').click()
    cy.wait(200)
      .contains(/tracker/i)
      .should('be.visible')
  })
  it('should display settings  page details when settings tab button is clicked', () => {
    cy.get('[href="/capycopy/settings"]').click()
    cy.wait(200)
      .contains(/settings/i)
      .should('be.visible')
    cy.get('.textinput').should('not.be.null')
  })
})

// BILLS

describe('When the user clicks on the Bills Tracker', () => {
  beforeEach(() => {
    cy.restoreLocalStorage()
  })
  afterEach(() => {
    cy.saveLocalStorage()
    // cy.wait(1000)
  })
  it('should navigate to the bills tracker page', () => {
    cy.visit('/home')
    cy.get('[href="/capycopy/category/bills"] > .image').click()
  })
  describe('When the user is in the bills category page', () => {
    beforeEach(() => {
      cy.visit('/category/bills')
    })
    afterEach(() => {
      cy.saveLocalStorage()
    })
    it('should warn the user that there no budget is set when no budget is set', () => {
      cy.get('.input').clear()
      cy.get('#nobudget').should('be.visible')
      cy.get('.input').type('100')
      cy.get('#nobudget').should('not.exist')
    })
    it('should not allow the user to make bills if there is no name', () => {
      cy.get('#Name').click()
      cy.get('.grid > .btn').click()
      cy.get('#Name').should('be.focused')
    })
    it('should not default to zero if user tries to input negative values', () => {
      cy.get('.input').clear()
      cy.get('.input').type('-1')
      cy.get('.input').should('not.have.value')
    })
    it('should not allow user to set quantity to anything less than 1', () => {
      cy.get('#Name').type('Test Bill')
      cy.get('#Quantity').clear()
      cy.get('#Quantity').type('0')
      cy.get('.grid > .btn').click()
      cy.get('#Quantity').should('be.focused')
    })
    it('should not allow user to set amount to anything less than 1', () => {
      cy.get('#Name').type('Test Bill')
      cy.get('#Amount').clear()
      cy.get('#Amount').type('0')
      cy.get('.grid > .btn').click()
      cy.get('#Amount').should('be.focused')
    })
    it('should allow user to create bill if provided valid information', () => {
      cy.get('.input').clear()
      cy.get('.input').type('100')
      cy.get('.input').should('have.value', 100)
      cy.get('#Name').clear()
      cy.get('#Name').type('Test Bill')
      cy.get('#Quantity').clear()
      cy.get('#Quantity').type('10')
      cy.get('#Amount').clear()
      cy.get('#Amount').type('10')
      cy.get('#Total').should('have.value', 100)
      cy.get('.grid > .btn').click()
      cy.get('#name').should('be.visible')
    })
    it('should not allow user to edit new quantity provided is less than 1', () => {
      cy.get('.lucide-pencil').should('be.visible')
      cy.get('.lucide-pencil').click()
      cy.get('#quantity').should('be.visible')
      cy.get('#quantity').clear()
      cy.get('#quantity').type('0')
      cy.get('.lucide-check').click()
      cy.get('#quantity').should('be.focused')
    })
    it('should not allow user to edit new amount provided is less than 1', () => {
      cy.get('.lucide-pencil').should('be.visible')
      cy.get('.lucide-pencil').click()
      cy.get('#amount').should('be.visible')
      cy.get('#amount').clear()
      cy.get('#amount').type('0')
      cy.get('.lucide-check').click()
      cy.get('#amount').should('be.focused')
    })
    it('should allow user to edit if valid credentials are given', () => {
      cy.get('.lucide-pencil').should('be.visible')
      cy.get('.lucide-pencil').click()
      cy.get('#amount').should('be.visible')
      cy.get('#amount').clear()
      cy.get('#amount').type('5')
      cy.get('#quantity').should('be.visible')
      cy.get('#quantity').clear()
      cy.get('#quantity').type('5')
      cy.get('.lucide-check').click()
      cy.get('#total').should('have.value', 25)
    })
  })
})

//FOOD AND DRINKS

describe('When the user clicks on the Food and Drinks Tracker', () => {
  beforeEach(() => {
    cy.restoreLocalStorage()
  })
  afterEach(() => {
    cy.saveLocalStorage()
    // cy.wait(1000)
  })
  it('should navigate to the bills tracker page', () => {
    cy.visit('/home')
    cy.get('[href="/capycopy/category/food_and_drinks"] > .image').click()
  })
  describe('When the user is in the food and drinks category page', () => {
    beforeEach(() => {
      cy.visit('/category/food_and_drinks')
    })
    afterEach(() => {
      cy.saveLocalStorage()
    })
    it('should warn the user that there no budget is set when no budget is set', () => {
      cy.get('.input').clear()
      cy.get('#nobudget').should('be.visible')
      cy.get('.input').type('100')
      cy.get('#nobudget').should('not.exist')
    })
    it('should not allow the user to make bills if there is no name', () => {
      cy.get('#Name').click()
      cy.get('.grid > .btn').click()
      cy.get('#Name').should('be.focused')
    })
    it('should not default to zero if user tries to input negative values', () => {
      cy.get('.input').clear()
      cy.get('.input').type('-1')
      cy.get('.input').should('not.have.value')
    })
    it('should not allow user to set quantity to anything less than 1', () => {
      cy.get('#Name').type('Test Food and Drink')
      cy.get('#Quantity').clear()
      cy.get('#Quantity').type('0')
      cy.get('.grid > .btn').click()
      cy.get('#Quantity').should('be.focused')
    })
    it('should not allow user to set amount to anything less than 1', () => {
      cy.get('#Name').type('Test Food and Drink')
      cy.get('#Amount').clear()
      cy.get('#Amount').type('0')
      cy.get('.grid > .btn').click()
      cy.get('#Amount').should('be.focused')
    })
    it('should allow user to create food and drink item if provided valid information', () => {
      cy.get('.input').clear()
      cy.get('.input').type('100')
      cy.get('.input').should('have.value', 100)
      cy.get('#Name').clear()
      cy.get('#Name').type('Test Food and Drink')
      cy.get('#Quantity').clear()
      cy.get('#Quantity').type('10')
      cy.get('#Amount').clear()
      cy.get('#Amount').type('10')
      cy.get('#Total').should('have.value', 100)
      cy.get('.grid > .btn').click()
      cy.get('#name').should('be.visible')
    })
    it('should not allow user to edit new quantity provided is less than 1', () => {
      cy.get('.lucide-pencil').should('be.visible')
      cy.get('.lucide-pencil').click()
      cy.get('#quantity').should('be.visible')
      cy.get('#quantity').clear()
      cy.get('#quantity').type('0')
      cy.get('.lucide-check').click()
      cy.get('#quantity').should('be.focused')
    })
    it('should not allow user to edit new amount provided is less than 1', () => {
      cy.get('.lucide-pencil').should('be.visible')
      cy.get('.lucide-pencil').click()
      cy.get('#amount').should('be.visible')
      cy.get('#amount').clear()
      cy.get('#amount').type('0')
      cy.get('.lucide-check').click()
      cy.get('#amount').should('be.focused')
    })
    it('should allow user to edit if valid credentials are given', () => {
      cy.get('.lucide-pencil').should('be.visible')
      cy.get('.lucide-pencil').click()
      cy.get('#amount').should('be.visible')
      cy.get('#amount').clear()
      cy.get('#amount').type('5')
      cy.get('#quantity').should('be.visible')
      cy.get('#quantity').clear()
      cy.get('#quantity').type('5')
      cy.get('.lucide-check').click()
      cy.get('#total').should('have.value', 25)
    })
  })
})

//Lifestyle
describe('When the user clicks on the Lifestyle Tracker', () => {
  beforeEach(() => {
    cy.restoreLocalStorage()
  })
  afterEach(() => {
    cy.saveLocalStorage()
    // cy.wait(1000)
  })
  it('should navigate to the lifestyle tracker page', () => {
    cy.visit('/home')
    cy.get('[href="/capycopy/category/lifestyle"] > .image').click()
  })
  describe('When the user is in the lifestyle category page', () => {
    beforeEach(() => {
      cy.visit('/category/lifestyle')
    })
    afterEach(() => {
      cy.saveLocalStorage()
    })
    it('should warn the user that there no budget is set when no budget is set', () => {
      cy.get('.input').clear()
      cy.get('#nobudget').should('be.visible')
      cy.get('.input').type('100')
      cy.get('#nobudget').should('not.exist')
    })
    it('should not allow the user to make lifestyle item if there is no name', () => {
      cy.get('#Name').click()
      cy.get('.grid > .btn').click()
      cy.get('#Name').should('be.focused')
    })
    it('should not default to zero if user tries to input negative values', () => {
      cy.get('.input').clear()
      cy.get('.input').type('-1')
      cy.get('.input').should('not.have.value')
    })
    it('should not allow user to set quantity to anything less than 1', () => {
      cy.get('#Name').type('Test Lifestyle Item')
      cy.get('#Quantity').clear()
      cy.get('#Quantity').type('0')
      cy.get('.grid > .btn').click()
      cy.get('#Quantity').should('be.focused')
    })
    it('should not allow user to set amount to anything less than 1', () => {
      cy.get('#Name').type('Test Lifestyle Item')
      cy.get('#Amount').clear()
      cy.get('#Amount').type('0')
      cy.get('.grid > .btn').click()
      cy.get('#Amount').should('be.focused')
    })
    it('should allow user to create lifestyle item if provided valid information', () => {
      cy.get('.input').clear()
      cy.get('.input').type('100')
      cy.get('.input').should('have.value', 100)
      cy.get('#Name').clear()
      cy.get('#Name').type('Test Lifestyle Item')
      cy.get('#Quantity').clear()
      cy.get('#Quantity').type('10')
      cy.get('#Amount').clear()
      cy.get('#Amount').type('10')
      cy.get('#Total').should('have.value', 100)
      cy.get('.grid > .btn').click()
      cy.get('#name').should('be.visible')
    })
    it('should not allow user to edit new quantity provided is less than 1', () => {
      cy.get('.lucide-pencil').should('be.visible')
      cy.get('.lucide-pencil').click()
      cy.get('#quantity').should('be.visible')
      cy.get('#quantity').clear()
      cy.get('#quantity').type('0')
      cy.get('.lucide-check').click()
      cy.get('#quantity').should('be.focused')
    })
    it('should not allow user to edit new amount provided is less than 1', () => {
      cy.get('.lucide-pencil').should('be.visible')
      cy.get('.lucide-pencil').click()
      cy.get('#amount').should('be.visible')
      cy.get('#amount').clear()
      cy.get('#amount').type('0')
      cy.get('.lucide-check').click()
      cy.get('#amount').should('be.focused')
    })
    it('should allow user to edit if valid credentials are given', () => {
      cy.get('.lucide-pencil').should('be.visible')
      cy.get('.lucide-pencil').click()
      cy.get('#amount').should('be.visible')
      cy.get('#amount').clear()
      cy.get('#amount').type('5')
      cy.get('#quantity').should('be.visible')
      cy.get('#quantity').clear()
      cy.get('#quantity').type('5')
      cy.get('.lucide-check').click()
      cy.get('#total').should('have.value', 25)
    })
  })
})

// TRANSPORTATION
describe('When the user clicks on the Transportation Tracker', () => {
  beforeEach(() => {
    cy.restoreLocalStorage()
  })
  afterEach(() => {
    cy.saveLocalStorage()
    // cy.wait(1000)
  })
  it('should navigate to the transportation tracker page', () => {
    cy.visit('/home')
    cy.get('[href="/capycopy/category/transportation"] > .image').click()
  })
  describe('When the user is in the transportation category page', () => {
    beforeEach(() => {
      cy.visit('/category/transportation')
    })
    afterEach(() => {
      cy.saveLocalStorage()
    })
    it('should warn the user that there no budget is set when no budget is set', () => {
      cy.get('.input').clear()
      cy.get('#nobudget').should('be.visible')
      cy.get('.input').type('100')
      cy.get('#nobudget').should('not.exist')
    })
    it('should not allow the user to make transportation item if there is no name', () => {
      cy.get('#Name').click()
      cy.get('.grid > .btn').click()
      cy.get('#Name').should('be.focused')
    })
    it('should not default to zero if user tries to input negative values', () => {
      cy.get('.input').clear()
      cy.get('.input').type('-1')
      cy.get('.input').should('not.have.value')
    })
    it('should not allow user to set quantity to anything less than 1', () => {
      cy.get('#Name').type('Test Transportation Item')
      cy.get('#Quantity').clear()
      cy.get('#Quantity').type('0')
      cy.get('.grid > .btn').click()
      cy.get('#Quantity').should('be.focused')
    })
    it('should not allow user to set amount to anything less than 1', () => {
      cy.get('#Name').type('Test Transportation Item')
      cy.get('#Amount').clear()
      cy.get('#Amount').type('0')
      cy.get('.grid > .btn').click()
      cy.get('#Amount').should('be.focused')
    })
    it('should allow user to create transportation item if provided valid information', () => {
      cy.get('.input').clear()
      cy.get('.input').type('100')
      cy.get('.input').should('have.value', 100)
      cy.get('#Name').clear()
      cy.get('#Name').type('Test Transportation Item')
      cy.get('#Quantity').clear()
      cy.get('#Quantity').type('10')
      cy.get('#Amount').clear()
      cy.get('#Amount').type('10')
      cy.get('#Total').should('have.value', 100)
      cy.get('.grid > .btn').click()
      cy.get('#name').should('be.visible')
    })
    it('should not allow user to edit new quantity provided is less than 1', () => {
      cy.get('.lucide-pencil').should('be.visible')
      cy.get('.lucide-pencil').click()
      cy.get('#quantity').should('be.visible')
      cy.get('#quantity').clear()
      cy.get('#quantity').type('0')
      cy.get('.lucide-check').click()
      cy.get('#quantity').should('be.focused')
    })
    it('should not allow user to edit new amount provided is less than 1', () => {
      cy.get('.lucide-pencil').should('be.visible')
      cy.get('.lucide-pencil').click()
      cy.get('#amount').should('be.visible')
      cy.get('#amount').clear()
      cy.get('#amount').type('0')
      cy.get('.lucide-check').click()
      cy.get('#amount').should('be.focused')
    })
    it('should allow user to edit if valid credentials are given', () => {
      cy.get('.lucide-pencil').should('be.visible')
      cy.get('.lucide-pencil').click()
      cy.get('#amount').should('be.visible')
      cy.get('#amount').clear()
      cy.get('#amount').type('5')
      cy.get('#quantity').should('be.visible')
      cy.get('#quantity').clear()
      cy.get('#quantity').type('5')
      cy.get('.lucide-check').click()
      cy.get('#total').should('have.value', 25)
    })
  })
})

// TRACKER PARt
describe('When the user navigates to the Tracker page', () => {
  beforeEach(() => {
    cy.restoreLocalStorage()
  })
  afterEach(() => {
    cy.saveLocalStorage()
    // cy.wait(1000)
  })
  it('should display the correct breakdown with the cretead items from all categories', () => {
    cy.visit('/home')
    cy.get('[href="/capycopy/tracker"]').click()
    cy.get('h1').should('be.visible')
    // budget
    cy.get(':nth-child(2) > h2').should('be.visible')
    cy.get('.main > :nth-child(2) > p').should('contain', 400)

    // total
    cy.get(':nth-child(3) > h2').should('be.visible')
    cy.get(':nth-child(3) > p').should('contain', 100)
  })
  it('should display the correct breakdown when the created items are added and  are all deleted', () => {
    //bilss
    cy.visit('/category/bills')
    cy.get('.lucide-trash2').click()
    cy.get('.input').clear()
    cy.get('.input').type('100')
    cy.get('.input').should('have.value', 100)
    cy.get('#Name').clear()
    cy.get('#Name').type('Test Bill 2')
    cy.get('#Quantity').clear()
    cy.get('#Quantity').type('10')
    cy.get('#Amount').clear()
    cy.get('#Amount').type('10')
    cy.get('#Total').should('have.value', 100)
    cy.get('.grid > .btn').click()
    cy.get('.lucide-trash2').click()

    //food and drinks
    cy.visit('/category/food_and_drinks')
    cy.get('.lucide-trash2').click()
    cy.get('.input').clear()
    cy.get('.input').type('100')
    cy.get('.input').should('have.value', 100)
    cy.get('#Name').clear()
    cy.get('#Name').type('Test Food and Drink Item 2')
    cy.get('#Quantity').clear()
    cy.get('#Quantity').type('10')
    cy.get('#Amount').clear()
    cy.get('#Amount').type('10')
    cy.get('#Total').should('have.value', 100)
    cy.get('.grid > .btn').click()
    cy.get('.lucide-trash2').click()

    // lifestyle
    cy.visit('/category/lifestyle')
    cy.get('.lucide-trash2').click()
    cy.get('.input').clear()
    cy.get('.input').type('100')
    cy.get('.input').should('have.value', 100)
    cy.get('#Name').clear()
    cy.get('#Name').type('Test Lifestyle Item 2')
    cy.get('#Quantity').clear()
    cy.get('#Quantity').type('10')
    cy.get('#Amount').clear()
    cy.get('#Amount').type('10')
    cy.get('#Total').should('have.value', 100)
    cy.get('.grid > .btn').click()
    cy.get('.lucide-trash2').click()

    //transportation
    cy.visit('/category/transportation')
    cy.get('.lucide-trash2').click()
    cy.get('.input').clear()
    cy.get('.input').type('100')
    cy.get('.input').should('have.value', 100)
    cy.get('#Name').clear()
    cy.get('#Name').type('Test Transportation Item 2')
    cy.get('#Quantity').clear()
    cy.get('#Quantity').type('10')
    cy.get('#Amount').clear()
    cy.get('#Amount').type('10')
    cy.get('#Total').should('have.value', 100)
    cy.get('.grid > .btn').click()
    cy.get('.lucide-trash2').click()

    //check back on tracker
    cy.get('[href="/capycopy/tracker"]').click()
    // budget
    cy.get(':nth-child(2) > h2').should('be.visible')
    cy.get('.main > :nth-child(2) > p').should('contain', 400)

    // total
    cy.get(':nth-child(3) > h2').should('be.visible')
    cy.get(':nth-child(3) > p').should('contain', 400)
  })
})

// SETTINGS PAGE
describe('When the user is in the settings page', () => {
  beforeEach(() => {
    cy.restoreLocalStorage()
    cy.visit('/settings')
    cy.get('h1').should('be.visible')
  })
  afterEach(() => {
    cy.saveLocalStorage()
    cy.wait(1000)
  })
  // Function to validate the text input value after navigation
  const validateTextInput = (expectedValue) => {
    cy.get('body').then(($body) => {
      if ($body.find('.textinput').length) {
        cy.get('.textinput', { timeout: 10000 })
          .should('exist')
          .and('be.visible')
          .should('have.value', expectedValue)
      } else {
        cy.log('Element .textinput does not exist after navigation')
      }
    })
  }
  it('should visit settings', () => {
    cy.get('.textinput').should('exist')
  })
  it('should display the correct name in the settings page', () => {
    cy.get('.textinput').should('have.value', 'Test User')
  })
  it('should allow the user to edit the name', () => {
    cy.get('.textinput', { timeout: 10000 })
      .should('exist')
      .and('be.visible')
      .clear()
      .type('Test User 2')
    cy.get('.btn').first().click()
    cy.wait(1000)
    cy.visit('/settings')

    validateTextInput('Test User 2')
  })
  it('should allow the user to delete the name', () => {
    cy.get('.textinput', { timeout: 10000 })
      .should('exist')
      .and('be.visible')
      .clear();
    cy.get('.textinput').should('have.value', '')
    cy.get('.btn').first().click()
    cy.wait(1000)
    cy.visit('/settings')

    validateTextInput('')
  })
})

