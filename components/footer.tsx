export function Footer() {
    return (
      <div className="fixed bottom-0 left-0 right-0 bg-[#005B8E] text-white p-4">
        <div className="container mx-auto flex items-center justify-between">
          <button className="bg-[#FF5757] px-6 py-2 rounded-full">
            ادعم المحلي
          </button>
          <div className="flex items-center gap-4">
            <span className="text-2xl font-bold">د.ك 33.050</span>
            <button className="bg-[#FF5757] px-6 py-2 rounded-full">
              المتابعة للدفع
            </button>
          </div>
        </div>
      </div>
    )
  }
  
  