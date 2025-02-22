'use client'
import { Minus, Plus, ChevronLeft, Lock } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Link from 'next/link'
import { useCart } from '../context/cart-context'
export default function Cart() {
    const { state, dispatch } = useCart()
    return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      {/* Header */}
      <header className="bg-white px-4 py-6 text-center">
        <h1 className="text-3xl font-bold mb-2">أسماك الوطنية</h1>
        <p className="text-gray-600 text-sm px-8">
          اكتشف منتجاتنا عالية الجودة من الأسماك الطازجة والمستوردة والروبيان المميز. اطلب الآن مع أفضل وأسرع خدمة توصيل اونلاين.
        </p>
      </header>
      {/* Categories */}
      <div className="grid grid-cols-4 gap-4 px-4 py-6">
        {[
          { name: 'سالمون نيجيري', image: '/home-images/4.png' },
          { name: 'روبيان جامبو', image: '/home-images/3.png' },
          { name: 'سيباس تركي', image: '/home-images/2.png' },
          { name: 'عروض', image: '/home-images/1.png' },
        ].map((category, index) => (
          <div key={index} className="text-center" >
            <div className="aspect-square relative rounded-full overflow-hidden border-2 border-white shadow-lg ">
              <img
                src={category.image}
                alt={category.name}
                className="object-cover"
              />
            </div>
            <span className="text-sm font-medium">{category.name}</span>
          </div>
        ))}
      </div>

      {/* Features */}
      <div className="flex justify-center gap-4 px-4 my-6">
        {[
          'نقل مخصص',
          'خلال 40 دقيقة',
          'توصيل مجاني',
        ].map((feature, index) => (
          <div
            key={index}
            className="bg-gray-100 rounded-full px-4 py-2 "
          >
            {feature}
          </div>
        ))}
      </div>

      {/* Cart Section */}
      <div className="bg-white rounded-t-3xl p-6 mt-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">سلة الطلبات</h2>
          <div className="flex items-center text-gray-500">
            <span>اليوم، خلال 40 دقيقة</span>
            <ChevronLeft className="h-5 w-5" />
          </div>
        </div>

        {/* Cart Item */}
        {state.items.map((i,index) => 

        <div className="flex gap-4 items-center mb-6" key={index}>
          <div className="w-24 h-24 relative rounded-lg overflow-hidden">
            <img
              src={i.image}
              alt="روبيان كويتي جامبو طازج"
              className="object-cover"
            />
          </div>
          <div className="flex-1">
            <h3 className="font-medium mb-1">{i.name}</h3>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3 bg-gray-100 rounded-full p-1">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 rounded-full"
                  onClick={() =>
                    dispatch({
                      type: 'UPDATE_QUANTITY',
                      payload: { id: i.id, quantity: i.quantity + 1 }
                    })
                  }                >
                  <Plus className="h-4 w-4" />
                </Button>
                <span className="font-medium">{i.quantity}</span>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 rounded-full"
                  onClick={() => dispatch({ type: 'REMOVE_ITEM', payload: i.id })}
                  >
                  <Minus className="h-4 w-4" />
                </Button>
              </div>
              <span className="font-bold">

              </span>
            </div>
          </div>
        </div>
        )}

        {/* Special Request */}
        <Button
          variant="outline"
          className="w-full mb-6 text-gray-600"
        >
          إضافة طلب خاص
        </Button>

        {/* Checkout Button */}
        <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t">
        <Link href="/checkout">
          <Button
            className="w-full bg-[#005B8F] hover:bg-[#004B7A] text-white rounded-full h-14"
          >
            <div className="flex items-center justify-between w-full px-4">
              <ChevronLeft className="h-6 w-6" />
              <span className="text-lg">المتابعة للدفع</span>
              <span className="font-bold">                  {state.total.toFixed(3)} د.ك
</span>
            </div>
          </Button>
          </Link>
        </div>

        {/* Website URL */}
        <div className="text-center text-gray-500 text-sm mt-20 mb-24">
          <Lock className="h-4 w-4 inline-block ml-1" />
        </div>
      </div>
    </div>
  )
}

