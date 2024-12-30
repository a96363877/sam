import Link from "next/link"

import { SearchBar } from "@/components/search"
import { Hero } from "@/components/hero"
import { ProductGrid } from "@/components/proudct"
import Body from "@/components/herobody"

export default function Home() {
  return (
    <div className="min-h-[86.5vh] flex flex-col justify-center items-center text-center px-2 py-8">
      <SearchBar />
      <Hero />
      <Body/>
      <ProductGrid />
    </div>
  )
}
