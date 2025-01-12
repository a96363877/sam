'use client'
import { Star} from 'lucide-react'
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { useCart } from "@/app/context/cart-context"
import { Button } from "./ui/button"

export default function Body() {
  const { dispatch } = useCart()

  return (
    <div className="flex flex-col min-h-screen bg-gray-50" dir="rtl">
      {/* Header */}
      <header className="relative w-full bg-white rounded-lg shadow-sm">
        <div className="relative w-full aspect-[2/1] max-w-md mx-auto">
          <img
                   src="/images/wat-logo.png"
            alt="National Fishing Company"
            className="object-contain p-8 rounded-md "
          />
          <div className="absolute top-4 left-4">
            <Badge variant="destructive" className="text-sm">
              خصم 30%
            </Badge>
          </div>
          <div className="absolute top-4 right-4">
            <Badge variant="destructive" className="text-sm">
              ادعم المحلي
            </Badge>
          </div>
        </div>
        
        <div className="p-4 text-center">
          <h1 className="text-2xl font-bold mb-2">قائمة أسماك الوطنية</h1>
          <div className="flex items-center justify-center gap-1 text-yellow-400">
            <span className="text-lg font-semibold text-gray-900">4.72</span>
            <Star className="w-5 h-5 fill-current" />
          </div>
          <p className="text-sm text-gray-600 mt-1">
            الأسماك الطازجة والمستوردة والروبيان المميز
          </p>
        </div>

        {/* Store Info */}
        <div className="grid grid-cols-4 gap-4 p-4 border-t">
          <div className="text-center">
            <p className="text-sm font-medium mb-1">ساعات العمل</p>
            <span className="text-green-500 text-sm">مفتوح</span>
          </div>
          <div className="text-center">
            <p className="text-sm font-medium mb-1">المسافة</p>
            <span className="text-gray-600 text-sm">15 كيلو</span>
          </div>
          <div className="text-center">
            <p className="text-sm font-medium mb-1">التقييم</p>
            <div className="flex items-center justify-center gap-1">
              <span className="text-sm">4.7</span>
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
            </div>
          </div>
          <div className="text-center">
            <p className="text-sm font-medium mb-1">وقت التوصيل</p>
            <span className="text-gray-600 text-sm">40 دقيقة</span>
          </div>
        </div>
      </header>

      {/* Products */}
      <main className="flex-1 p-4 bg-gray-200">
        <h2 className="text-xl font-bold mb-4">عروض اليوم</h2>
        <div className="grid grid-cols-3 gap-1 overflow-y-hidden	 overflow-x-auto w-full	">
          {[
            {
              id:77,
              name: "10 كيلو روبيان كويتي  طازج",
              price: "8.000",
              image: "/images/2.png"
            },
            {
              id:88,
              name: "كرتون 10 كيلو سيباس تركي ",
              price: "12.000",
              image: "/images/1.png"
            },
            {
              id:99,
              name: "كرتون 10 كيلو روبيان جامبو ",
              price: "6.000",
              image: "/images/3.png"
              
            }
          ].map((product, index) => (
            <Card key={index} className="max-w-[220px] rounded-[20px]">
              <CardContent className="p-3">
                <div className="relative  aspect-square mb-3">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="object-cover rounded-lg"
                  />
                </div>
                <h3 className="text-sm mb-2 line-clamp-2">
                  {product.name}
                </h3>
                <div className="flex items-center justify-between">
                  <span className="text-sm ">{product.price}</span>
                  <span className="text-sm text-gray-500">د.ك</span>
                </div>
         
              </CardContent>
              <CardFooter className='items-center'>
              <Button 
              
                variant={'outline'}
                size="sm"
                 onClick={() =>
                  dispatch({
                    type: 'ADD_ITEM',
                    payload: {
                      id: product.id,
                      name: product.name,
                      price: parseInt(product.price),
                      quantity: 1,
                      image: product.image,
                    },
                  })
                }
                className="my-2 rounded-lg w-full">
                  إضافة
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>
    </div>
  )
}

