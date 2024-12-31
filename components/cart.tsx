'use client'

import { Minus, Plus, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { useCart } from '@/app/context/cart-context'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetFooter,
} from "@/components/ui/sheet"

interface CartProps {
  isOpen: boolean
  onClose: () => void
}

export function Cart({ isOpen, onClose }: CartProps) {
  const { state, dispatch } = useCart()

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent side="right" className="w-full sm:max-w-md">
        <SheetHeader>
          <SheetTitle className="text-right">سلة التسوق</SheetTitle>
        </SheetHeader>
        <div className="flex justify-between items-center mb-6">
          <span className="text-gray-600">{state.items.length} منتجات</span>
        </div>
        <div className="space-y-6 overflow-y-auto max-h-[calc(100vh-200px)]">
          {state.items.map((item) => (
            <div key={item.id} className="flex gap-4 border-b pb-4">
              <div className="relative w-24 h-24 flex-shrink-0">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="flex-1">
                <div className="flex justify-between">
                  <h3 className="font-semibold">{item.name}</h3>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => dispatch({ type: 'REMOVE_ITEM', payload: item.id })}
                  >
                    <X className="h-4 w-4" />
                    <span className="sr-only">إزالة {item.name} من السلة</span>
                  </Button>
                </div>
                <div className="text-lg font-semibold mt-1">
                  {item.price.toFixed(3)} د.ك
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() =>
                      dispatch({
                        type: 'UPDATE_QUANTITY',
                        payload: { id: item.id, quantity: Math.max(0, item.quantity - 1) }
                      })
                    }
                  >
                    <Minus className="h-4 w-4" />
                    <span className="sr-only">تقليل كمية {item.name}</span>
                  </Button>
                  <span className="w-8 text-center">{item.quantity}</span>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() =>
                      dispatch({
                        type: 'UPDATE_QUANTITY',
                        payload: { id: item.id, quantity: item.quantity + 1 }
                      })
                    }
                  >
                    <Plus className="h-4 w-4" />
                    <span className="sr-only">زيادة كمية {item.name}</span>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <SheetFooter className="mt-6 pt-6 border-t">
          <div className="w-full">
            <div className="flex justify-between text-xl font-bold mb-6">
              <span>المجموع:</span>
              <span>{state.total.toFixed(3)} د.ك</span>
            </div>
            <Button className="w-full bg-[#005B8E] text-white hover:bg-[#004b75]">
              متابعة الدفع
            </Button> 
             <Button className="w-full mt-2 " variant={'destructive'} onClick={onClose}>
              رجوع
            </Button>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}

