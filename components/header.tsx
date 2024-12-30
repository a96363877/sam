import Image from "next/image"
import { ShoppingCart } from 'lucide-react'

export function Header() {
  return (
    <header className="container mx-auto px-4 py-4 flex items-center justify-between">
      <Image
        src="/placeholder.svg"
        alt="National Fishing Company"
        width={200}
        height={60}
        className="h-12 w-auto"
      />
      <button className="flex items-center gap-2 bg-[#005B8E] text-white px-6 py-2 rounded-full">
        <ShoppingCart className="h-5 w-5" />
        <span>33.05 د.ك</span>
      </button>
    </header>
  )
}

