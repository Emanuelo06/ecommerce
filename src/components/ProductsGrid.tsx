import { Link } from "react-router-dom"
import useProducts from "./useProducts"
import { useState, useEffect } from "react"

const ProductsGrid = () => {
  const [maxToShow, setMaxToShow] = useState(2)

  useEffect(() => {
    const updateProductsLimit = () => {
      const width = window.innerWidth
      if (width < 640) {
        setMaxToShow(3)
      } else if (width < 768) {
        setMaxToShow(4)
      } else {
        setMaxToShow(6)
      }
    }
    updateProductsLimit()
    window.addEventListener("resize", updateProductsLimit)
    return () => window.removeEventListener("resize", updateProductsLimit)
  }, [])

  const products = useProducts()
  const visibleProducts = products.slice(0, maxToShow)

  return (
    <div className="p-4">
      <h1 className="text-lg sm:text-2xl md:text-3xl text-center font-bold mb-4 mt-5 sm:mb-5">
        Our Products
      </h1>

      <div className="place-items-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-2 md:gap-4 w-full">
        {visibleProducts.map((product) => (
          <div
            key={product.id}
            className="w-40 sm:w-50 md:w-60 bg-[#F4F5F7] flex flex-col"
          >
            <img
              src={product.image}
              alt="product image"
              className="object-cover w-40 sm:w-50 md:w-60 h-40 sm:h-50 md:h-60"
            />
            <div className="p-2">
              <h1 className="font-bold md:text-lg text-[#333333]">{product.name}</h1>
              <p className="text-xs sm:text-base text-[#666666]">{product.description}</p>
              <h1 className="font-bold md:text-lg text-[#333333]">${product.price}</h1>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-6">
        <Link to="/products"
          className="text-[#B88E2F] text-base md:text-lg border border-[#B88E2F] py-2 md:py-3 px-8 md:px-12 hover:bg-[#B88E2F] hover:text-white transition"
        >
          Show More
        </Link>
      </div>
    </div>
  )
}

export default ProductsGrid
