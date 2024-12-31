'use client'

import { useCart } from "@/app/context/cart-context"
import { Button } from "./ui/button"
import { ArrowBigLeft } from "lucide-react"


export function Footer() {
  const { state } = useCart()

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#005B8E] text-white p-4 m-2 rounded-full mt-5">
      <div className="container mx-auto flex items-center justify-between">
      <Button variant={'ghost'} className=" p-2 rounded-full">
         <ArrowBigLeft/>
           
            المتابعة للدفع

          </Button>
        <div className="flex items-center gap-4">
          <span className="font-bold">{state.total.toFixed(3)} د.ك</span>
        </div>
      </div>
    </div>
  )
}

