import Image from "next/image"
import { Star, Clock, MapPin } from 'lucide-react'
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

export default function Body() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50" dir="rtl">
      {/* Header */}
      <header className="relative w-full bg-white rounded-b-3xl shadow-sm">
        <div className="relative w-full aspect-[2/1] max-w-md mx-auto">
          <Image
            src="/placeholder.svg"
            alt="National Fishing Company"
            fill
            className="object-contain p-8"
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
      <main className="flex-1 p-4">
        <h2 className="text-xl font-bold mb-4">عروض اليوم</h2>
        <div className="grid grid-cols-2 gap-4">
          {[
            {
              title: "10 كيلو روبيان كويتي جامبو طازج",
              price: "8.000",
              image: "/placeholder.svg"
            },
            {
              title: "كرتون 10 كيلو سيباس تركي حجم 800-1000",
              price: "12.000",
              image: "/placeholder.svg"
            },
            {
              title: "كرتون 10 جامبو مة",
              price: "6.000",
              image: "/placeholder.svg"
            }
          ].map((product, index) => (
            <Card key={index} className="overflow-hidden">
              <CardContent className="p-3">
                <div className="relative w-full aspect-square mb-3">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <h3 className="text-sm font-medium mb-2 line-clamp-2">
                  {product.title}
                </h3>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold">{product.price}</span>
                  <span className="text-sm text-gray-500">د.ك</span>
                </div>
                <button className="w-full mt-2 text-sm text-primary hover:underline">
                  إضافة
                </button>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  )
}

