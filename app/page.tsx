import { SearchBar } from "@/components/search"
import { Hero } from "@/components/hero"
import { ProductGrid } from "@/components/proudct"
import Body from "@/components/herobody"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { WarningDialog } from "@/components/warnning-dialog"

export default function Home() {
  return (
    <div className="min-h-[86.5vh] flex flex-col justify-center items-center bg-gray-100 text-center  ">
   <Header/>
      <SearchBar />
      <Hero />
      <Body/>
      <ProductGrid />
      <Footer/>
      <WarningDialog/>
    </div>
  )
}
