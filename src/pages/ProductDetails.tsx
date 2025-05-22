import { Link, useParams } from "react-router-dom"
import useProducts from "../components/useProducts"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import { IoIosArrowForward } from "react-icons/io";
import { useState, useEffect } from "react"


type Product = {
  id: string,
  image: string,
  name: string,
  description: string,
  price: number,
  longDescription: string
}

const ProductDetails = () => {
  const products = useProducts()
  const {id} = useParams()

  // Always call hooks first!
  const [maxToShow, setMaxToShow] = useState(1)

  useEffect(() => {
    const updateProductsLimit = () => {
      const width = window.innerWidth
      if (width < 640) {
        setMaxToShow(1)
      } else if (width < 768) {
        setMaxToShow(2)
      } else {
        setMaxToShow(3)
      }
    }
    updateProductsLimit()
    window.addEventListener("resize", updateProductsLimit)
    return () => window.removeEventListener("resize", updateProductsLimit)
  }, [])

  const product: Product | undefined = products.find((p) => p.id === id);

  if (!product) {
    return <div>Product not found.</div>;
  }

  
  const visibleProducts = products.slice(0, maxToShow)

  return (
    <div>
      <NavBar/>
      <div >
        <div className="bg-[#F9F1E7] w-full h-10 sm:h-12 md:h-15 lg:h-18 xl:h-20 text-xs sm:text-sm md:text-base lg:text-xl xl:text-2xl flex justify-start items-center px-4">
          <Link to={"/"} className=" text-[#9f9f9f] ">Home</Link>
          <IoIosArrowForward className=" mt-0.5"/>
          <Link to={"/products"} className=" text-[#9f9f9f] cursor-pointer">Products</Link>
          <IoIosArrowForward className=" mt-0.5"/>
          <h1 className="mb-0.5"> |</h1>
          <h1 className=" ml-1">{product.name}</h1>
        </div>
        {/*  Product Details */}
        <div className="flex flex-col items-center justify-center w-full">  
            <div className="w-full flex flex-col items-center justify-center  mt-10">
              <img src={product.image} alt={product.name} 
              className="w-60 sm:w-80 md:w-90 lg:w-100 xl:w-[500px]  rounded-2xl"/>
            </div>
            <div className="text-base  flex text-[#333333] flex-col w-60 sm:w-80 md:w-90 lg:w-100 xl:w-[500px]  mt-5 mb-10">
              <h1 className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl ">{product.name}</h1>
              <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl  md:my-2">{product.longDescription}</h1>
              <h1 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl  font-bold">{product.price}$</h1>
              <button className="self-center bg-[#F9F1E7] font-semibold text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl w-40 sm:w-50 md:w-60 lg:w-70 xl:w-80 h-10 sm:h-12 md:h-15 lg:h-18 xl:h-20 rounded-2xl sm:mt-5 ">Add to Cart</button>
            </div>
        </div>

        {/* Related Products */}
        <div>
               <div className="p-4 lg:mt-5">
      <h1 className="text-lg sm:text-2xl md:text-3xl lg:text-5xl  text-[#333333] text-center font-bold mb-4 mt-5 sm:mb-5 lg:mb-10">
        Related Products
      </h1>

      <div className="place-items-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-2 md:gap-4 w-full">
        {visibleProducts.map((relatedProduct) => (
          <div
            key={relatedProduct.id}
            className="w-40 sm:w-50 md:w-60 lg:w-80  bg-[#F4F5F7] flex flex-col"
          >
            <img
              src={relatedProduct.image}
              alt="product image"
              className="object-cover w-40 sm:w-50 md:w-60 lg:w-80   h-40 sm:h-50 md:h-60 lg:h-80 "
            />
            <div className="p-2 pb-5 xl:p-5 xl:pb-8 flex flex-col">
              <h1 className="font-bold md:text-lg lg:text-2xl xl:text-3xl   text-[#333333]">{relatedProduct.name}</h1>
              <p className="text-xs sm:text-base md:text-lg lg:text-xl xl:text-2xl  text-[#666666]">{relatedProduct.description}</p>
              <h1 className="font-bold md:text-lg lg:text-2xl xl:text-3xl  text-[#333333] mb-2 lg:mb-5 2xl:mb-10">${relatedProduct.price}</h1>
              <Link to={`/product/${relatedProduct.id}`}
              className="text-center text-[#B88E2F] font-semibold text-sm md:text-base lg:text-lg xl:text-2xl  border border-[#B88E2F] py-1 px-6 sm:py-2 xl:py-3 sm:px-8 xl:px-10 hover:bg-[#B88E2F] hover:text-white transition"
              >See details</Link>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-6">
        <Link to="/products"
          className="text-[#B88E2F] text-base md:text-lg  font-semibold lg:text-2xl xl:text-3xl  border border-[#B88E2F] py-2 md:py-3 lg:py-5 px-8 md:px-12 lg:px-20 lg:mt-5 hover:bg-[#B88E2F] hover:text-white transition"
        >
          Show More
        </Link>
      </div>
    </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default ProductDetails