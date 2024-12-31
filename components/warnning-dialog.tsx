'use client'

import { useState, useEffect } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

export function WarningDialog() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    setIsOpen(true)
  }, [])

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen} >
      <DialogContent className="sm:max-w-[425px]" dir="rtl">
        <DialogHeader>
          <DialogTitle>تنويه:</DialogTitle>
          <DialogDescription>
          مرحبًا بكم في المتجر الرسمي لشركة الوطنية للأسماك
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">
          <p>يُرجى العلم أن هذا هو المصدر الوحيد المعتمد لتسوق منتجاتنا الأصلية. نحرص على تقديم أجود أنواع الأسماك والمنتجات البحرية لضمان رضاكم.
          <br/><strong className='mt-2'>
            
شكراً لثقتكم بنا







</strong>
</p>

        </div>
        <DialogFooter>
          <Button className=' bg-[#005B8E]' onClick={() => setIsOpen(false)}>فهمت</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

