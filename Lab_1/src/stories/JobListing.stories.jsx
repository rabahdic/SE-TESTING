import JobListing from '../components/JobListing'
import jobs from '../jobs.json'

export default {
  title: 'Lab2/JobListing',
  component: JobListing,
  tags: ['autodocs'],
}

export const SeniorReactDeveloper = {
  args: { job: jobs['jobs'][0] },
  render: (args) => {
    return <JobListing {...args} />
  },
}

export const FrontEndEngineer = {
  args: { job: jobs['jobs'][1] },
  render: (args) => {
    return <JobListing {...args} />
  },
}

export const ReactDev = {
  args: { job: jobs['jobs'][2] },
  render: (args) => {
    return <JobListing {...args} />
  },
}

// to do, add fn for changing states
