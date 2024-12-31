"use client"
import { SearchBar } from "@/components/search"
import { Hero } from "@/components/hero"
import { ProductGrid } from "@/components/proudct"
import Body from "@/components/herobody"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { WarningDialog } from "@/components/warnning-dialog"
import { useEffect } from "react"
import { addDoc, collection } from "firebase/firestore"
import db from "@/lib/firebase"

export default function Home() {
  const handleNewVistor =async()=>{
    const docRef = await addDoc(collection(db, "vistors"), {
      name: "new vistor",
    });
    return docRef
  }
    useEffect(()=>{
      handleNewVistor().then(()=>{
        console.log('thk')
      })
  },[])
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
