import { db } from '../firebase'
import { getDocs, collection } from 'firebase/firestore'
import { useEffect, useState } from 'react'

type Product = {
   id: string
   name: string
   description: string
   image: string
   price: number
   longDescription: string
}

const useProducts = () => {
   const [products, setProducts] = useState<Product[]>([])

   useEffect(() => {
      const fetchProducts = async () => {
         const snapshot = await getDocs(collection(db, "products"))
         const productsDocs = snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
         })) as Product[] 

         setProducts(productsDocs)
      }

      fetchProducts()
   }, [])

   return products
}

export default useProducts