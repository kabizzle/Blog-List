import { useState } from "react";

const Blog = ({ blog, user }) => {
  const [showBlogInfo, setShowBlogInfo] = useState(false)
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

  return (
    <div>
      <div style={hideWhenVisible}>
        {blog.title} {blog.author} <button onClick={() => setShowBlogInfo(true)}>view</button>
      </div>  
      <div style={showWhenVisible}>
        {blog.title} {blog.author} <button onClick={() => setShowBlogInfo(false)}>hide</button>
        <p>{blog.url}</p>
        <div style={likesStyle}>
          <p>{blog.likes}</p> <button>like</button>
        </div>
        <p>{user.name}</p>
      </div>
    </div>
  )
}

export default Blog
