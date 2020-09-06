import axios from 'axios'

const getCsrfToken = async () => {
  const { data } = await axios.get('/api/csrf-token');
  axios.defaults.headers.post['X-CSRF-Token'] = data.csrfToken;
}

const getUserOnStart = async () => {
  axios.get('/api/users/me').then((response) => {
    console.log("HELL YEAH!")
  }).catch((error) => {
    console.log("User is not logged in. Redirecting to login screen.")
    
  })
}

const getMyUser = async () => {
  try{
    const { data } = await axios.get('/api/users/me')
    return {
      success: true,
      data
    }
  }
  catch (error) {
    return {
      success: false,
      error
    }
  }
}

export default { getCsrfToken, getMyUser, getUserOnStart }