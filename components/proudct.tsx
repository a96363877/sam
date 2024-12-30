import Image from "next/image"

const products = [
  {
    id: 1,
    name: "عروض",
    image: "/placeholder.svg",
  },
  {
    id: 2,
    name: "سيباس تركي",
    image: "/placeholder.svg",
  },
  {
    id: 3,
    name: "روبيان جامبو",
    image: "/placeholder.svg",
  },
  {
    id: 4,
    name: "سلمون نيجيري",
    image: "/placeholder.svg",
  },
]

export function ProductGrid() {
  return (
    <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6">
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-white rounded-3xl shadow-lg p-4 flex flex-col items-center"
        >
          <div className="relative w-full aspect-square mb-4">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover rounded-2xl"
            />
          </div>
          <h3 className="text-xl font-semibold text-center">{product.name}</h3>
        </div>
      ))}
    </div>
  )
}

