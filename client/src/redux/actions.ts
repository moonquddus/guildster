export type Action = {
  type: string,
  payload: IPayload
}

interface IPayload {
  data: Object
}

export const defaultAction = (payload: IPayload) => {
  return { type: "DEFAULT_ACTION", payload }
}
