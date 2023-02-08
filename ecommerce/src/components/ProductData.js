
import { useEffect,useState } from "react"

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
        <p key={item.id}>{item.title}</p>
      ))}
    </div>)
}
export default ProductData