import { within, userEvent } from '@storybook/testing-library'
import { expect } from '@storybook/test'

import Card from '../components/Card'

export default {
  title: 'Lab2/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    bg: {
      options: ['bg-gray-100', 'bg-indigo-100'],
      control: { type: 'select' },
    },
  },
}

// 1
export const Developers = {
  args: {
    // toggle true to simulate play
    triggerPlay: false,
    bg: 'bg-gray-100',
  },
  play: async ({ canvasElement, args }) => {
    if (!args.triggerPlay) {
      return
    }
    const canvas = within(canvasElement)
    const link = await canvas.getByText('Browse Jobs')
    await userEvent.click(link)

    expect(global.window.location.assign).toHaveBeenCalledWith(
      'http://localhost:3009/jobs'
    )
  },
  render: (args) => {
    return (
      <Card {...args}>
        <h2 className="text-2xl font-bold">For Developers</h2>
        <p className="mt-2 mb-4">
          Browse our React jobs and start your career today
        </p>
        <a
          href="http://localhost:3009/jobs"
          className="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700"
        >
          Browse Jobs
        </a>
      </Card>
    )
  },
}

// 2
export const Employers = {
  args: {
    triggerPlay: true,
    bg: 'bg-indigo-100',
  },
  play: async ({ canvasElement, args }) => {
    if (!args.triggerPlay) {
      return
    }
    const canvas = within(canvasElement)
    const link = await canvas.getByText('Browse Jobs')
    await userEvent.click(link)

    expect(global.window.location.assign).toHaveBeenCalledWith(
      'http://localhost:3009/add-job'
    )
  },
  render: (args) => {
    return (
      <Card {...args}>
        <h2 className="text-2xl font-bold">For Employers</h2>
        <p className="mt-2 mb-4">
          List your job to find the perfect developer for the role
        </p>
        <a
          href="http://localhost:3009/add-job"
          className="inline-block bg-indigo-500 text-white rounded-lg px-4 py-2 hover:bg-indigo-600"
        >
          Add Job
        </a>
      </Card>
    )
  },
}
// 3
export const NavigateToJobasPage = {
  args: {
    triggerPlay: true,
    bg: 'bg-gray-100',
  },
  play: async ({ canvasElement }) => {
    //change to NavigateToJobsPage.args to get it to pass
    try {
      if (!NavigateToJ.args.triggerPlay) {
        return
      }
      const canvas = within(canvasElement)
      // this actually simulates a failed play function because this should be 'add job' and not 'browse jobs
      const link = await canvas.getByText('Browse Jobs')
      await userEvent.click(link)

      expect(global.window.location.assign).toHaveBeenCalledWith(
        'http://localhost:3009/jobs'
      )
    } catch {
      window.alert(
        'Deliberate PLAY FAILED INTERACTION to prevent page navigaton, to pass the test check the Stor yNavigateToJobsPaage and see the comment'
      )
    }
  },
  render: (args) => {
    return (
      <Card {...args}>
        <h2 className="text-2xl font-bold">For Developers</h2>
        <p className="mt-2 mb-4">
          Browse our React jobs and start your career today
        </p>
        <a
          href="http://localhost:3009/jobs"
          className="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700"
        >
          Browse Jobs
        </a>
      </Card>
    )
  },
}

// 4
export const NavigateToAddJobsPage = {
  args: {
    triggerPlay: true,
    bg: 'bg-indigo-100',
  },
  play: async ({ canvasElement }) => {
    try {
      if (!args.triggerPlay) {
        return
      }
      const canvas = within(canvasElement)
      const link = await canvas.getByText('Browse Jobs')
      await userEvent.click(link)

      expect(global.window.location.assign).toHaveBeenCalledWith(
        'http://localhost:3009/add-job'
      )
    } catch {
      window.alert(
        'Deliberate PLAY FAILED INTERACTION to prevent page navigaton, to pass the test check the Stor NavigatetoAddJobsPage and see the comment'
      )
    }
  },
  render: (args) => {
    return (
      <Card {...args}>
        <h2 className="text-2xl font-bold">For Employers</h2>
        <p className="mt-2 mb-4">
          List your job to find the perfect developer for the role
        </p>
        <a
          href="http://localhost:3009/add-job"
          className="inline-block bg-indigo-500 text-white rounded-lg px-4 py-2 hover:bg-indigo-600"
        >
          Add Job
        </a>
      </Card>
    )
  },
}
