import type { Meta, StoryObj } from '@storybook/react'
import { Header } from '@/app/component/Header'

const meta: Meta<typeof Header> = {
  title: 'Example/Header',
  component: Header,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Header>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    label: 'suto-ri-s',
    bgColor: 'facebook.400',
    textColor: 'white',
    fontSize: 'xl',
  },
}

//   export const Secondary: Story = {
//     args: {
//       label: 'Header',
//     },
//   };

//   export const Large: Story = {
//     args: {
//       size: 'large',
//       label: 'Header',
//     },
//   };

//   export const Small: Story = {
//     args: {
//       size: 'small',
//       label: 'Header',
//     },
//   };
