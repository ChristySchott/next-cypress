import { ReactNode } from 'react'

import { CartProvider } from '@/contexts/cart-context'
import { Header } from '@/components/header'

interface StoreLayoutType {
  children: ReactNode
}

export default function StoreLayout({ children }: StoreLayoutType) {
  return (
    <CartProvider>
      <div className="mx-auto grid min-h-screen w-full max-w-[1600px] grid-rows-app gap-5 px-8 py-8">
        <Header />
        {children}
      </div>
    </CartProvider>
  )
}
