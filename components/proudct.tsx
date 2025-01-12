'use client'

import { Button } from "@/components/ui/button"
import { ShoppingCart } from 'lucide-react'
import { useCart } from "@/app/context/cart-context"

const products= [
  {
    id: 1,
    name: 'سمك شعري',
    price: 2,
    image: '/home-images/a.webp',
  },
  {
    id: 2,
    name: 'فيليه هامور',
    price: 3,
    image: '/home-images/b.webp',
  },
  {
    id: 3,
    name: 'سمك بوري البحر الأحمر',
    price: 2.6,
    image: '/home-images/c.webp',
  },
  {
    id: 4,
    name: 'سمك البياض الأبيض',
    price: 3.3,
    image: '/home-images/d.webp',
  },
  {
    id: 5,
    name: 'سمك الماكريل',
    price: 4.2,
    image: '/home-images/e.webp',
  },
  {
    id: 6,
    name: 'سلمون مدخن شرائح رفيعة',
    price: 5.3,
    image: '/home-images/f.webp',
  },
  {
    id: 7,
    name: 'سمك السردين (السلفي)',
    price: 5.25,
    image: '/home-images/g.webp',
  },
  {
    id: 8,
    name: 'سمك بلطي',
    price: 3.2,
    image: '/home-images/h.webp',
  },
  {
    id: 9,
    name: 'سمك بوري كبير',
    price: 4.2,
    image: '/home-images/j.webp',
  },
  {
    id: 10,
    name: ' السلمون النرويجي',
    price: 2.2,
    image: '/home-images/k.webp',
  },
];


export function ProductGrid() {
  const { dispatch } = useCart()

  return (
    <div className="container mx-auto px-4 space-y-6 mb-16 pb-8 mt-6" dir="rtl">
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-gray-50 rounded-3xl shadow-lg p-4 flex flex-row items-center gap-4"
        >
          <div className="relative w-24 h-24 flex-shrink-0">
            <img
              src={product.image}
              alt={product.name}
              className="object-cover rounded-2xl"
            />
          </div>
          <div className="flex-grow">
            <h3 className=" font-semibold text-center mb-2">{product.name}</h3>
            <p className=" font-bold text-[#005B8E] mt-8">{product.price.toFixed(3)} د.ك</p>
          </div>
          <div className="flex-shrink-0 ">
            <Button
              variant={'ghost'}
              size={'sm'}
              className=" border"
              onClick={() =>
                dispatch({
                  type: 'ADD_ITEM',
                  payload: {
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    quantity: 1,
                    image: product.image,
                  },
                })
              }
            >
              <ShoppingCart className="ml-2 h-5 w-5" />
              أضافة
            </Button>
          </div>
        </div>
      ))}
    </div>
  )
}

