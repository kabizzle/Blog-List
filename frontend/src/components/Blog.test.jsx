import { render, screen } from '@testing-library/react'
import Blog from './Blog'
import userEvent from '@testing-library/user-event'
import { beforeEach, expect } from 'vitest'

let container
const mockHandler = vi.fn()

describe('<Blog />', () => {

  beforeEach(() => {
    const blog = {
      title: 'Test Blog 1',
      author: 'Test Author 1',
      url: 'testurl1.com',
      likes: 0
    }

    container = render(<Blog blog={blog} user={'Test User 1'} updateLikes={mockHandler} />).container

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
    const div = container.querySelector('.toggledBlogInfo')

    expect(element1).toBeDefined()
    expect(div).toHaveStyle('display:none')
  })

  test('updateLikes function is called twice when button is clicked twice', async () => {

    const user = userEvent.setup()
    const likeButton = screen.getByText('like')

    await user.click(likeButton)
    await user.click(likeButton)

    expect(mockHandler.mock.calls).toHaveLength(2)

  })
})
