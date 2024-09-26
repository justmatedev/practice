import { createContext, ReactNode, useState } from "react"
import Toast from "../components/toast"

interface ToastContextData {
  showToast: (message: string, type: TypeMessage) => void
}

type TypeMessage = "DEFAULT" | "SUCCESS"

export interface MessagesProps {
  message: string
  type: TypeMessage
}

export const ToastContext = createContext({} as ToastContextData)

const ToastProvider = ({ children }: { children: ReactNode }) => {
  const [messages, setMessages] = useState<MessagesProps[]>([])

  const showToast = (newMessage: string, type: TypeMessage) => {
    let message: MessagesProps = {
      message: newMessage,
      type: type,
    }

    setMessages((prevMessages) => [...prevMessages, message])

    setTimeout(() => {
      hideToast()
    }, 2000)
  }

  const hideToast = () => {
    setMessages((prevMessages) => prevMessages.slice(1))
  }

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      {messages.length > 0 && (
        <Toast messages={messages} hideToast={hideToast} />
      )}
    </ToastContext.Provider>
  )
}

export default ToastProvider
