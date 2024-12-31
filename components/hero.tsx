import Image from "next/image"

const products = [
  {
    id: 1,
    name: "عروض",
    image: "/home-images/1.png",
  },
  {
    id: 2,
    name: "سيباس تركي",
    image: "/home-images/3.png",
  },
  {
    id: 3,
    name: "روبيان جامبو",
    image: "/home-images/2.png",
  },
  {
    id: 4,
    name: "سلمون نيجيري",
    image: "/home-images/4.png",
  },
]
export function Hero() {
    return (
      <div className="container mx-auto px-4 text-center my-16 ">
        <h1 className="text-5xl font-bold mb-8">أسماك الوطنية</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          اكتشف منتجاتنا عالية الجودة من الأسماك الطازجة والمستوردة والروبيان
          المميز. اطلب الآن مع أفضل وأسرع خدمة توصيل اونلين.
        </p>
        <div className="container mx-auto grid grid-cols-4 md:grid-cols-4 gap-6">
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-white rounded-full shadow-lg  flex mt-4  flex-col items-center"
        >
          <div className="relative w-full aspect-square ">
            <img
              src={product.image}
              alt={product.name}
              className="object-cover rounded-full"
            />
          </div>
        </div>
      ))}
    </div>
      </div>
    )
  }
  
  