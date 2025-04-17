import React from 'react'
import './MyOrders.css'
//import { StoreContext } from '../../context/StoreContext';
//import { assets } from '../../assets/assets';

const MyOrders = () => {
   
  // const {url, token} = useContext(StoreContext);
  // const [data, setData] = useState([]);

  // const fetchOrders = async () => {
  //   const response = await axios.post(url+"/api/order/userorders", {},{headers:{token}})
  //   setData(response.data.data);
   
  // }

  // const fetchOrders = async () => {
  //   const response = await axios.post(url+"/api/order/userorders", {})
  //   setData(response.data.data);
   
  // }

  // useEffect(() => {
  //   if (token) {
  //     fetchOrders();
  //   }

  // },[token])

  // useEffect(() => {
 
  //     fetchOrders();
    

  // },[])
    
  return (
    <div className='my-orders'>
      <h2>My Orders</h2>
      <div className="container">
        <p>Your order will be delivered soon.</p>
      </div>
    </div>
  )
}

export default MyOrders
