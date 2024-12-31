'use client'

import { ShoppingCart } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { useCart } from "@/app/context/cart-context"
import { useState } from "react"
import { Cart } from "./cart"

export function Header() {
  const { state } = useCart()
  const [isCartOpen, setIsCartOpen] = useState(false)

  return (
    <>
      <header className="container  flex items-center justify-between bg-white border-b">
        <img
          src="/home-images/kout.png"
          alt="National Fishing Company"  
          width={100}
      
        />
        <Button
          onClick={() => setIsCartOpen(true)}
          className="flex items-center gap-2 bg-[#005B8E] text-white hover:bg-[#004b75]"
        >
          <ShoppingCart className="h-5 w-5" />
          <span>{state.total.toFixed(3)} د.ك</span>
        </Button>
      </header>
      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  )
}

