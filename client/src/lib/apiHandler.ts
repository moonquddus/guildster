import axios from 'axios'

export interface MyAPIResponse {
  success: boolean
  data: Object
}

const loadCsrfToken = async () => {
  const { data } = await axios.get('/api/csrf-token');
  axios.defaults.headers.post['X-CSRF-Token'] = data.csrfToken;
}

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
