import { post } from '../lib/request'

export const authenticate = async (email, password) => {
  try {
    const res = await post('/api/singin', {
      
        username: email,
        password,
      
    })
    return res.data
  } catch (error) {
    console.log(error.response)
    try {
      return error.response.data.error
    } catch (er) {}

    return error.response && error.response.status === 404
      ? 'Wrong email/password'
      : 'Unknown error. Please try again'
  }
}
