const BlogForm = ({
    handleCreateBlog, 
    handleTitleChange,
    handleAuthorChange,
    handleURLChange,
    blogTitle,
    blogAuthor, 
    blogURL
  }) => {
  return (
    <div>
      <h3>Create new blog:</h3>
      <form onSubmit={handleCreateBlog}>
        <div>
          title
          <input 
            type="text" 
            value={blogTitle} 
            name="title" 
            onChange={handleTitleChange}
          />          
        </div>
        <div>
          author
          <input
            type="text"
            value={blogAuthor}
            name="author"
            onChange={handleAuthorChange}
          />  
        </div>
        <div>
          url
          <input
            type="text"
            value={blogURL}
            name="url"
            onChange={handleURLChange}
          />  
        </div>
        <button type="submit">create</button>
      </form>
    </div>
  )
}

export default BlogForm;
