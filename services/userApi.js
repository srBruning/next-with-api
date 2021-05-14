import { post, get } from '../lib/request'

export const createUser = async (
  name,
  email,
  password,
  password_confirmation,
) => {
  try {
    const response = await post('/api/users/', { 
        name,
        username: email,
        password,
        password_confirmation,
      
    })
    return response
  } catch (error) {
    try {
      return error.response.data.error
    } catch (er) {}

    return error.response && error.response.status === 422
      ? 'Email is already taken.'
      : 'Unknown error. Please try again'
  }
}

export const getUsers = () => {
  // const  response =  getData("/users", null);
  const response = {
    data: [
      { id: 1, name: 'Luke Skywalker', email: 'luke@starwars.com' },
      { id: 2, name: 'Han Solo', email: 'han@starwars.com' },
      { id: 3, name: 'Alan Turing', email: 'alan@turingmachine.com' },
    ],
  }
  // console.log(response)
  return response
}

export const getUser = (jwt, id) => {
  return getData(`/users/${id}`, jwt)
}

export const getCurrentUser = (jwt) => {
  return getData('/api/users/show', jwt)
}

const getData = (endpoint, jwt) => {
  try {
    return get(endpoint, jwt)
  } catch (error) {
    return error
  }
}
