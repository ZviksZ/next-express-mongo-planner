export interface UserInterface {
  email: string
  tasks: []
  username: string
  id: string
}

export interface GlobalMessageInterface {
  type: "success" | "info" | "warning" | "error",
  message: string,
  showIcon?: boolean
}

export interface AppStateInterface {
  globalMessage: GlobalMessageInterface | null
  user: UserInterface | null
}
