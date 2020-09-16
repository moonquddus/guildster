export type Action = {
  type: string,
  payload: IPayload
}

interface IPayload {
  data?: Object
}
/**
 * Do nothing, basically
 * @param payload
 */
export const defaultAction = (payload: IPayload) => {
  return { type: 'DEFAULT_ACTION', payload }
}

/**
 * Add your user details to app's session
 * @param payload 
 */
export const initUser = (payload: IPayload) => {
  return { type: 'INIT_USER', payload }
}

/**
 * Delete your local session's data
 * @param payload 
 */
export const logout = (payload: IPayload) => {
  return { type: 'LOG_OUT', payload }
}

/**
 * Update flag to let the app know everything's been loaded
 * @param payload 
 */
export const preflightFinished = (payload: IPayload) => {
  return { type: 'PREFLIGHT_FINISHED', payload}
}

/**
 * Update your local user session details
 * @param payload 
 */
export const updateUser = (payload: IPayload) => {
  return { type: 'UPDATE_USER', payload}
}
