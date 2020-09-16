import axios from 'axios'

export interface MyAPIResponse {
  success: boolean
  data: Object
}
/**
 * This CSRF token is used for preventing cross-site/one-click attacks
 */
const loadCsrfToken = async () => {
  const { data } = await axios.get('/api/csrf-token');
  axios.defaults.headers.post['X-CSRF-Token'] = data.csrfToken;
}

/**
 * When the App loads, we run a request to the API server to get your user details (if you have a previously-used session token)
 */
const getUserOnStart = async () => {
  let data: MyAPIResponse = {
    success: false,
    data: {}
  }

  await axios.get('/api/users/me').then((response) => {
    data = {success: true, data: response.data}
  }).catch((error) => {
    console.warn('User is not logged in. Redirecting to login screen.')
    data = {success: false, data: error.response.data}
  })
  return data
}

/**
 * Sign up for a new account
 * @param email
 * @param password 
 * @param displayName 
 * @param guild 
 */
const registerAccount = async (email: string, password: string, displayName: string, guild: string) => {
  let data: MyAPIResponse = {
    success: false,
    data: {}
  }

  await axios.post('/api/users/register', { email, password, name: displayName, guild }).then((response) => {
    data = {success: true, data: response.data}
  }).catch((error) => {
    console.warn('Register failed!', error.response.data)
    data = {success: false, data: error.response.data}
  })
  return data
}

/**
 * Sign-in to your account
 * @param email 
 * @param password 
 */
const loginToAccount = async (email: string, password: string) => {
  let data: MyAPIResponse = {
    success: false,
    data: {}
  }

  await axios.post('/api/users/login', { email, password }).then((response) => {
    data = {success: true, data: response.data}
  }).catch((error) => {
    console.warn('Login failed!', error.response.data)
    data = {success: false, data: error.response.data}
  })
  return data
}

/**
 * Delete your account's session & log out
 */
const logOutOfAccount = async () => {
  let data: MyAPIResponse = {
    success: false,
    data: {}
  }

  await axios.post('/api/users/me/logout').then((response) => {
    data = {success: true, data: response.data}
  }).catch((error) => {
    data = {success: false, data: error.response.data}
  })
  return data
}

/**
 * Add a new party member for your guild
 * @param name 
 * @param occupation 
 * @param portrait 
 */
const addNewCharacter = async (name: string, occupation: string, portrait: number) => {
  let data: MyAPIResponse = {
    success: false,
    data: {}
  }

  await axios.post('/api/characters/new', {name, occupation, portrait}).then((response) => {
    data = {success: true, data: response.data}
  }).catch((error) => {
    data = {success: false, data: error.response.data}
  })
  return data
}

export default { loadCsrfToken, getUserOnStart, registerAccount, loginToAccount, logOutOfAccount, addNewCharacter }
