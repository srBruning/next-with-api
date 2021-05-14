import axios from 'axios'

const API_HOST = 'https://am.diegobruning.com'
// const API_HOST = "https://carlos-rails-api.herokuapp.com";

const getUrl = (endpoint) => API_HOST + endpoint

export const post = async (endpoint, data) => {
  console.log('*post * ' + endpoint)
  return axios.post(getUrl(endpoint), data, {
    headers: { 'Content-Type': 'application/json' },
  })
}

export const get = async (endpoint, jwt) => {
  console.log('*get* ' + endpoint)
  const headers = jwt
    ? {
        headers: { 'x-access-token': jwt },
      }
    : null
  try {
    const resp  =  await axios.get(getUrl(endpoint), headers)
    console.log("___ * ____-");
    console.log(resp);
    console.log("___ * ____-");
    return resp;
  } catch (err) {
    console.log('err.response')
    console.log(err.response)
    console.log('err.response + ')
  }
}
