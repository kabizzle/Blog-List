import { render, screen } from '@testing-library/react'
import Blog from './Blog'

test('only blog author and title are initially visible', () => {
  const blog = {
    title: 'Test Blog 1',
    author: 'Test Author 1',
    url: 'testurl1.com'
  }

  const { container } = render(<Blog blog={blog} user={'Test User 1'} />)

  const div = container.querySelector('.initialBlogInfo')

  // const element1 = screen.getByText('Test Blog 1 Test Author 1')
  // const element2 = screen.getByText('testurl1.com')

  // expect(element1).toBeDefined()
  expect(div).toHaveTextContent('Test Blog 1 Test Author 1')
})
