import React from 'react'
import AllProduct from './components/AllProduct'
import SpecificProduct from './components/SpecificProduct'
import AddNewProduct from './components/AddNewProduct'
import UpadateProduct from './components/UpadateProduct'
import DeleteProduct from './components/DeleteProduct'

const App = () => {
  return (
    <div>
      {/* <AllProduct/>
      <SpecificProduct/> */}
      {/* <AddNewProduct/> */}
      {/* <UpadateProduct productId={4}/> */}
      <DeleteProduct/>
    </div>
  )
}

export default App