"use client"
import { getCookieClient } from "@/lib/cookieClient"
import { api } from "@/services/api"
import { useRouter } from "next/navigation"
import { createContext, ReactNode, useState } from "react"
import { toast } from "sonner"

export interface OrderItemProps {
  id: string
  amount: number
  created_at: string
  order_id: string
  product_id: string
  product: {
    id: string
    name: string
    price: string
    description: string
    banner: string
    category_id: string
  }
  order: {
    id: string
    table: number
    name: string | null
    draft: boolean
    status: boolean
  }
}

type OrderContextData = {
  isOpen: boolean
  onRequestOpen: (order_id: string) => Promise<void>
  onRequestClose: () => void
  order: OrderItemProps[]
  finishOrder: (order_id: string) => Promise<void>
}

type OrderProviderProps = {
  children: ReactNode
}

export const OrderContext = createContext({} as OrderContextData)

export function OrderProvider({ children }: OrderProviderProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [order, setOrder] = useState<OrderItemProps[]>([])
  const router = useRouter()

  async function onRequestOpen(order_id: string) {
    const token = await getCookieClient()
    const response = await api.get("/order/detail", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        order_id: order_id,
      },
    })

    setOrder(response.data)
    setIsOpen(true)
  }

  function onRequestClose() {
    setIsOpen(false)
  }

  async function finishOrder(order_id: string) {
    const token = await getCookieClient()

    const data = {
      order_id: order_id,
    }

    try {
      await api.put("/order/finish", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
    } catch (error) {
      console.log(error)
      toast.error("Falha ao finalizar")
      return
    }

    toast.success("Pedido finalizado")
    router.refresh()
    setIsOpen(false)
  }

  return (
    <OrderContext.Provider
      value={{ isOpen, onRequestOpen, onRequestClose, order, finishOrder }}
    >
      {children}
    </OrderContext.Provider>
  )
}