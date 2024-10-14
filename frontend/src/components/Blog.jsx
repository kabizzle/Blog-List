import { useState } from 'react'
import blogs from '../services/blogs'

const Blog = ({ blog, user, updateLikes }) => {
  const [showBlogInfo, setShowBlogInfo] = useState(false)

  const updateLikesButton = async () => {
    updateLikes(blog)
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
        {blog.title} {blog.author} <button onClick={() => setShowBlogInfo(true)} className='toggleVisibility'>view</button>
      </div>
      <div style={showWhenVisible} className='toggledBlogInfo'>
        {blog.title} {blog.author} <button onClick={() => setShowBlogInfo(false)}>hide</button>
        <p>{blog.url}</p>
        <div style={likesStyle}>
          <p>{blog.likes}</p> <button onClick={updateLikesButton} className='likeButton'>like</button>
        </div>
        <p>{user.name}</p>
        <button onClick={deleteBlogPost} className='deleteButton'>delete</button>
      </div>
    </div>
  )
}

export default Blog
