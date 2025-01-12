import { Search } from 'lucide-react'
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function SearchBar() {
  return (
    <div className="container mx-auto px-4 flex gap-4 my-8 rounded-full">
      <div className="relative flex-1 rounded-full">
        <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 " />
        <Input
          className="w-full pr-10 bg-gray-50 rounded-full"
          placeholder="ابحث عن منتج"
        />
      </div>
      
    </div>
  )
}

