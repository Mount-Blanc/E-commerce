
import { useEffect,useState } from "react"
import Card from "./Card";

function ProductData () {
const [Data, setData] = useState([])

useEffect(() => {
    fetchData()
  }, []);

  const fetchData =  () => {
    fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(json=>setData(json))
  };




    return(<div>
        {Data.map(item => (
        <Card key={item.id}>
        {item.title}
        ${item.price}
        <img src={item.image}/>
        {item.description}
        <button>Add to Cart</button>
        </Card>
        
      ))}
    </div>)
}
export default ProductData