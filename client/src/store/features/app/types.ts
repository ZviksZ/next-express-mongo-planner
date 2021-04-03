export interface GlobalMessageInterface {
  type: "success" | "info" | "warning" | "error",
  message: string,
  description?: string,
  showIcon?: boolean
}

export interface AppStateInterface {
  globalMessage: GlobalMessageInterface | null
}
