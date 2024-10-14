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
    expect(div).toHaveTextContent('Test Blog 1 Test Author 1 hidetesturl1.com0 likedelete')
  })
  test('only blog author and title are initially visible', () => {
    const div = container.querySelector('.initialBlogInfo')
    expect(div).toHaveTextContent('Test Blog 1 Test Author 1')
  })
})
