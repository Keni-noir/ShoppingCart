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
      <div className="container flex flex-col justify-between gap-7 w-7xl mx-auto  min-h-screen md:flex-row">
        <Catalogue />
        <Cart onConfirmOrder={toggleConfirmOrder}/>
      </div>
    </Provider>
  )
}
 

export default App
