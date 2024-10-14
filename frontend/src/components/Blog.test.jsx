import { render, screen } from '@testing-library/react'
import Blog from './Blog'
import userEvent from '@testing-library/user-event'
import { beforeEach } from 'vitest'

let container
describe('<Blog />', () => {

  beforeEach(() => {
    const blog = {
      title: 'Test Blog 1',
      author: 'Test Author 1',
      url: 'testurl1.com',
      likes: 0
    }
    container = render(<Blog blog={blog} user={'Test User 1'} />).container

  })

  test('blog url and likes are shown after button is clicked', async () => {

    const user = userEvent.setup()
    const button = screen.getByText('view')

    await user.click(button)

    const div = container.querySelector('.toggledBlogInfo')
    expect(div).not.toHaveStyle('display:none')
  })

  test('only blog author and title are initially visible', () => {

    const element1 = screen.getAllByText('Test Blog 1 Test Author 1')

    expect(element1).toBeDefined()
  })
})
