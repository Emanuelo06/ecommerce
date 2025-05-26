import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import { Link } from "react-router-dom"
import { IoIosArrowForward } from "react-icons/io" 
import { useCart } from "../context/CartContext"

const Cart = () => {
  const { cartItems, increaseQty, decreaseQty, removeFromCart } = useCart()
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  
  return (
    <div>
      <NavBar/>
      <div className="text-[#333333] text-base bg-cover bg-center w-full h-15 md:h-25 flex flex-col justify-center items-center bg-[#F9F1E7]">
        <h1 className="text-xl sm:text-2xl font-bold md:text-3xl xl:text-4xl">Cart</h1>
        <div className="w-full text-base sm:text-lg md:text-xl xl:text-2xl flex justify-center items-center gap-2 sm:mt-2">
          <Link to="/">Home</Link>
          <IoIosArrowForward />
          <Link to="/cart">Cart</Link>
        </div>
      </div>
      <div className="w-full max-w-6xl mx-auto flex flex-col lg:flex-row gap-8 p-4 lg:p-8">
        <div className="flex-1 flex flex-col gap-4">
          {cartItems.length === 0 ? (
            <div className="text-center text-lg text-[#333333]">Your cart is empty.</div>
          ) : (
            cartItems.map(item => (
              <div
                key={item.id}
                className="flex flex-col sm:flex-row items-center gap-4 bg-[#F4F5F7] rounded-lg shadow-sm p-4"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 object-cover rounded"
                />
                <div className="flex flex-col gap-1 text-[#333333] w-full sm:w-auto">
                  <span className="font-bold text-base sm:text-lg md:text-xl lg:text-2xl">{item.name}</span>
                  <span className="text-sm sm:text-base">Price: <b>{item.price}$</b></span>
                  <div className="flex items-center gap-2 mt-1">
                    <button
                      className="px-2 py-1 bg-[#B88E2F] text-white rounded disabled:opacity-50"
                      onClick={() => decreaseQty(item.id)}
                      disabled={item.quantity <= 1}
                    >-</button>
                    <span className="text-sm sm:text-base">{item.quantity}</span>
                    <button
                      className="px-2 py-1 bg-[#B88E2F] text-white rounded"
                      onClick={() => increaseQty(item.id)}
                    >+</button>
                  </div>
                  <span className="text-sm sm:text-base">Total: <b>{item.price * item.quantity}$</b></span>
                  <button
                    className="mt-2 px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 w-fit"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
        <div className="w-full lg:w-1/3 bg-[#F4F5F7] rounded-lg shadow-sm flex flex-col items-start p-4 md:p-6 gap-3 self-start">
          <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-[#333333]">Cart Totals</h1>
          <p className="mt-3 2xl:text-[22px]">
            Total: <span className="font-bold sm:text-lg lg:text-xl 2xl:text-2xl">{total}$</span>
          </p>
          <button className="border-[#333333] self-center sm:text-lg lg:text-xl 2xl:text-2xl border rounded-lg p-2 sm:p-2.5 lg:py-3 py-1 sm:px-5 lg:px-10 mt-3 cursor-pointer hover:bg-[#333333] hover:text-[#F4F5F7]">
            Check Out
          </button>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Cart