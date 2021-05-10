export interface ResponseInterface<T> {
  data: T
  status: string
}

export interface ResponseErrorInterface {
  status: string
  message: string
}

export interface LoginRequestInterface {
  username: string
  password: string
}

export interface UserResponseInterface {
  createdAt: string
  email: string
  tasks: []
  token: string
  updatedAt: string
  username: string
  __v: number
  _id: string
}
