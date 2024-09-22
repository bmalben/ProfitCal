
import { MDBBtn, MDBInput } from 'mdb-react-ui-kit'
import './App.css'
import {  useEffect, useState } from 'react'


function App() {
  const [price,setPrice]=useState()
  console.log(price);
  const [discount,setDiscount]=useState(50)
  console.log(discount);
const[final,setFinal]=useState("");
const[save,setSave]=useState("");

// const[key,setKey]=useState(0);

// const finalPrice = (price - (price * discount) / 100).toFixed(2);
//   const savings = (price - finalPrice).toFixed(2);

// const handleButton=()=>{
//   setFinal((price-(price*discount)/100).toFixed(2));
//   console.log(final);
//   setSave("")
// }

// const handleButton = () => {
//   setKey(1);
// const priceNum = parseFloat(price);
// const discountNum = parseFloat(discount);

// if (!isNaN(priceNum) && !isNaN(discountNum)) {
//   const finalPrice = (priceNum - (priceNum * discountNum) / 100).toFixed(2);
//   setFinal(finalPrice);
//   setSave((priceNum - finalPrice).toFixed(2));
// }
// };

// const handleSave=()=>{
  
  //   setSave((price-final).toFixed(2));
  //   console.log("save",save);
  
  // }

useEffect(() => {
    const priceNum = parseFloat(price);
    const discountNum = parseFloat(discount);

    if (!isNaN(priceNum) && !isNaN(discountNum)) {
      const finalPrice = (priceNum - (priceNum * discountNum) / 100).toFixed(2);
      setFinal(finalPrice);
      setSave((priceNum - finalPrice).toFixed(2));
    } else {
      setFinal('');
      setSave('');
    }
  }, [price, discount]);

  
  const handleReset=()=>{

  
  setPrice("");
  setDiscount("");
  setFinal("");
  setSave("");

}

  
  return (
    <>
    <div className="App">
      <div className="container">
       <div className="price">
        <label htmlFor="" className='mb-2'>Total Price</label>
       <MDBInput label="Price" id='price' value={price} onChange={(e)=>setPrice(e.target.value)} type="number" />
       
       </div> 
       <div className="discount">
        <label htmlFor="" className='mb-2'>Discount Percentage</label>
       <MDBInput label={discount} type="range" min="0" max="100" step="1" value={discount} onChange={(e) => setDiscount(e.target.value)} className="range-slider" />
       </div>
       <div className="button btnmain">
       <MDBBtn style={{width:'150px'}} className='m-1' outline color='light' onClick={handleReset}  >
        Reset
       </MDBBtn>
       </div>
       <div className="current">
        {/* <label htmlFor="">Final Amount</label>
        <h5 style={{textAlign:'center'}}>{final}</h5> */}
        {final&&(
              <label style={{color:'white'}}>Final Amount : {final}</label>
            )}
       </div>
       <div className="save">
        {/* <label htmlFor="">You Saved</label>
        <h5 style={{textAlign:'center'}}>{save}</h5> */}
        {save&&(
              <label style={{color:'white'}}>You Saved : {save}</label>
            )}
       </div>
      </div>
    </div>
    </>
  );
}

export default App;