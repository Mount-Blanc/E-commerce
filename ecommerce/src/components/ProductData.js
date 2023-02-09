
import { useEffect,useState } from "react"
import Card from "./Card";
import CartContext from './context/cartcontext'
import { useContext } from "react";



function ProductData () {
const [Data, setData] = useState([])
const { cart, addToCart, removeFromCart } = useContext(CartContext);


useEffect(() => {
    fetchData()
  }, []);

  const fetchData =  () => {
    fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(json=>setData(json))
  };


    return(<div>
        {Data.map((item) => (
        <Card key={Math.random()}>
        {item.title}
        ${item.price}
        <img src={item.image}/>
        {item.description}
        <button onClick ={() => addToCart(item) }className="button">Add to Cart</button>
        </Card>
        
      ))}
    </div>)
}
export default ProductData