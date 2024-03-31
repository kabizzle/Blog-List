import { useState, useEffect } from 'react'
import Blog from './components/Blog'
import Notification from './components/Notification'
import blogService from './services/blogs'
import loginService from './services/login'

const App = () => {
  const [blogs, setBlogs] = useState([])
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [blogTitle, setBlogTitle] = useState('')
  const [blogAuthor, setBlogAuthor] = useState('')
  const [blogURL, setBlogURL] = useState('')
  const [errorMessage, setErrorMessage] = useState(null)
  const [successMessage, setSuccessMessage] = useState(null)
  const [user, setUser] = useState(null)

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedBlogListUser');

    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      setUser(user);
      blogService.setToken(user.token);
    }
  }, [])

  useEffect(() => {
    blogService.getAll().then(blogs =>
      setBlogs( blogs )
    )  
  }, [])

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const user = await loginService.login({
        username, password,
      })

      window.localStorage.setItem(
        'loggedBlogListUser', JSON.stringify(user)
      )
      
      blogService.setToken(user.token);
      setUser(user)
      setUsername('')
      setPassword('')
      setSuccessMessage('Successfully logged in!');
      setTimeout(() => {
        setSuccessMessage(null)
      }, 5000)
    } catch (exception) {
      setErrorMessage('Wrong username of password')
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
    }
  }

  // when user logs out, remove their details from localStorage and set user to null
  const handleLogout = async (event) => {
    event.preventDefault();
    window.localStorage.removeItem('loggedBlogListUser');
    setUser(null);
    setSuccessMessage('Successfully logged out!');
    setTimeout(() => {
      setSuccessMessage(null)
    }, 5000)
  }

  // form to create new blog
  const handleCreateBlog = async (event) => {
    event.preventDefault();

    await blogService.create({
      "title": blogTitle,
      "author": blogAuthor,
      "url": blogURL
    })

    setBlogTitle('');
    setBlogAuthor('');
    setBlogURL('');
    setSuccessMessage('New blog created!');
    setTimeout(() => {
      setSuccessMessage(null)
    }, 5000)

    const blogs = await blogService.getAll();
    setBlogs(blogs);
  }
  
  // Form for user to log in
  const loginForm = () => {
    return (
      <div>
        <h2>Log in to application</h2>
        <form onSubmit={handleLogin}>
          <div>
            username
            <input 
              type="text" 
              value={username} 
              name="Username" 
              onChange={({ target }) => setUsername(target.value)}
            />          
          </div>
          <div>
            password
            <input
              type="password"
              value={password}
              name="Password"
              onChange={({ target }) => setPassword(target.value)}
            />  
          </div>
          <button type="submit">login</button>
        </form>
      </div>
    )
  }

  const createBlogForm = () => {
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
              onChange={({ target }) => setBlogTitle(target.value)}
            />          
          </div>
          <div>
            author
            <input
              type="text"
              value={blogAuthor}
              name="author"
              onChange={({ target }) => setBlogAuthor(target.value)}
            />  
          </div>
          <div>
            url
            <input
              type="text"
              value={blogURL}
              name="url"
              onChange={({ target }) => setBlogURL(target.value)}
            />  
          </div>
          <button type="submit">create</button>
        </form>
      </div>
    )
  }

  const homePage = () => {
    return (
      <div>
        <h2>Hello {user.name}!</h2>
        <button onClick={handleLogout}>logout</button>

        {createBlogForm()}
        
        <h3>Your blogs:</h3>
        {blogs.map(blog =>
          <Blog key={blog.id} blog={blog} />
        )}
      </div>
    )
  }

  // if user logged in, show their info and their blogs
  // if not, show login form
  return (
    <div>
      <Notification message={errorMessage} messageType={'error'}/>
      <Notification message={successMessage} messageType={'success'}/>
      { !user && loginForm() }
      { user && homePage() }
    </div>
  )
}

export default App
