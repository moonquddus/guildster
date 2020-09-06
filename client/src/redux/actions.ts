export type Action = {
  type: string,
  payload: IPayload
}

interface IPayload {
  data?: Object
}

export const defaultAction = (payload: IPayload) => {
  return { type: "DEFAULT_ACTION", payload }
}

export const initUser = (payload: IPayload) => {
  return { type: "INIT_USER", payload }
}

export const logout = (payload: IPayload) => {
  return { type: "LOG_OUT", payload }
}

export const preflightFinished = (payload: IPayload) => {
  return { type: "PREFLIGHT_FINISHED", payload}
}