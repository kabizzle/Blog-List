import { useState } from 'react'
import blogs from '../services/blogs'

const Blog = ({ blog, user }) => {
  const [showBlogInfo, setShowBlogInfo] = useState(false)

  const updateLikes = async () => {
    const newBlog = blog
    newBlog.likes = blog.likes + 1
    await blogs.setBlog(blog.id, newBlog)
    window.location.reload()
  }

  const hideWhenVisible = {
    display: showBlogInfo ? 'none' : '',
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 2,
    marginBottom: 5
  }
  const showWhenVisible = {
    display: showBlogInfo ? '' : 'none',
    paddingTop: 10,
    paddingBottom: 5,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 2,
    marginBottom: 5
  }
  const likesStyle = {
    display: 'flex',
  }
  const deleteBlogPost = async () => {
    if (window.confirm(`Are you sure you want to remove blog: ${blog.title}?`)) {
      await blogs.deleteBlog(blog)
      window.location.reload()
    }
  }

  return (
    <div>
      <div style={hideWhenVisible} className='initialBlogInfo'>
        {blog.title} {blog.author} <button onClick={() => setShowBlogInfo(true)}>view</button>
      </div>
      <div style={showWhenVisible} className='toggledBlogInfo'>
        {blog.title} {blog.author} <button onClick={() => setShowBlogInfo(false)}>hide</button>
        <p>{blog.url}</p>
        <div style={likesStyle}>
          <p>{blog.likes}</p> <button onClick={updateLikes}>like</button>
        </div>
        <p>{user.name}</p>
        <button onClick={deleteBlogPost}>delete</button>
      </div>
    </div>
  )
}

export default Blog
