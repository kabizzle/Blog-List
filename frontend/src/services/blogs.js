import axios from 'axios'
const baseUrl = '/api/blogs'

let token = null

const setToken = newToken => {
  token = `Bearer ${newToken}`
}

const getToken = () => {
  const loggedUserJSON = JSON.parse(window.localStorage.getItem('loggedBlogListUser'))
  token = `Bearer ${loggedUserJSON.token}`
}

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const create = async newObject => {
  const config = {
    headers: {
      Authorization: token
    },
  }

  const response = await axios.post(baseUrl, newObject, config)

  return response.data
}

const setBlog = async (blogID, blog) => {
  const response = await axios.put(`${baseUrl}/${blogID}`, blog)
  return response.data
}

const deleteBlog = async (blog) => {
  getToken()

  const config = {
    headers: {
      Authorization: token
    },
  }

  const response = await axios.delete(`${baseUrl}/${blog.id}`, config)
  return response.data
}

export default { getAll, setBlog, deleteBlog, setToken, create }
