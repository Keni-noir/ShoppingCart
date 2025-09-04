import Catalogue from "./Component/catalogue"
import Cart from "./Component/cart"
import { useState } from "react"
import { Provider } from "react-redux";
import { store } from "./Store/Store"


function App() {
  const [confirmOrder, setconfirmOrder] = useState(false);

    const toggleConfirmOrder = () =>{
      setconfirmOrder(!confirmOrder)
    }

  return (
    <Provider store={store}>
       <div className="container flex flex-col md:flex-row justify-between gap-7 mx-auto px-4 sm:px-6 lg:px-8 min-h-screen">
        <Catalogue />
        <Cart onConfirmOrder={toggleConfirmOrder}/>
      </div>
    </Provider>
  )
}
 

export default App
