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
import { useRouter } from 'next/navigation'

interface CartProps {
  isOpen: boolean
  onClose: () => void
}

export function Cart({ isOpen, onClose }: CartProps) {
  const { state, dispatch } = useCart()
  const router = useRouter()

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent side="right" className="w-full sm:max-w-md p-0 flex flex-col h-full">
        <SheetHeader className="px-6 py-4 border-b">
          <SheetTitle className="text-left">سلة التسوق</SheetTitle>
        </SheetHeader>
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {state.items.length === 0 ? (
            <p className="text-center text-gray-500 my-8">سلة التسوق فارغة</p>
          ) : (
            <div className="space-y-6">
              {state.items.map((item) => (
                <div key={item.id} className="flex gap-4 pb-4 border-b">
                  <div className="relative w-24 h-24 flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
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
          )}
        </div>
        <SheetFooter className="px-6 py-4 border-t mt-auto">
          <div className="w-full space-y-4">
            <div className="flex justify-between text-xl font-bold">
              <span>المجموع:</span>
              <span>{state.total.toFixed(3)} د.ك</span>
            </div>
            <Button onClick={()=>router.push('/checkout')}
            className="w-full bg-[#005B8E] text-white hover:bg-[#004b75]">
              متابعة الدفع
            </Button> 
            <Button className="w-full" variant="outline" onClick={onClose}>
              رجوع
            </Button>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}

