import Hero from '../components/Hero'

export default {
  title: 'Lab2/HeroLayout',
  component: Hero,
  tags: ['autodocs'],
  argTypes: {
    mode: {
      options: ['light', 'dark', 'colorful'],
      control: { type: 'select' },
    },
  },
}

// #1
export const Light = {
  args: {
    title: 'Become a React Dev in Light Mode',
    subtitle: 'Find the React job that fits your skill set',
    mode: 'light',
  },
}

// #2
export const Dark = {
  args: {
    title: 'Become a React Dev in Dark Mode',
    subtitle: 'Find the React job that fits your skill set',
    mode: 'dark',
  },
}

// #3
export const Colorful = {
  args: {
    title: 'Become a React Dev in Color Mode',
    subtitle: 'Find the React job that fits your skill set',
    mode: 'colorful',
  },
}
