'use client'
import { useState } from "react"
import { ShoppingCart } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { useCart } from "@/app/context/cart-context"
import { Cart } from "./cart"

export function Header() {
  const { state } = useCart()
  const [isCartOpen, setIsCartOpen] = useState(false)

  return (
    <>
      <header className="container  flex items-center justify-between bg-white border-b">
      <Button
          onClick={() => setIsCartOpen(true)}
          className="flex items-center gap-2 bg-[#005B8E] text-white hover:bg-[#004b75] rounded-full"
        >
          <ShoppingCart className="h-5 w-5" />
          <span>{state.total.toFixed(0)} د.ك</span>
        </Button>
        <img
          src="/home-images/kout.png"
          alt="National Fishing Company"  
          width={100}
        />
      
      </header>
      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  )
}

