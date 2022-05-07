import axios from 'axios'
import React, { useState } from 'react'
import "./shipping.css"
export const Shipping = () => {

  const [formdata, setFormdata]=useState({
    address: "",
    city: "",
    first_name: "",
    last_name: "",
    mobile: "",
    state: "",
    zipcode: "",
  

  })

   const handelchange=(e)=>{
     
    setFormdata({
      ...formdata,
      [e.target.name]:e.target.value
    })

   }

   const handelsubmit=(e)=>{
       e.preventDefault();
       console.log(formdata)
       axios.post("http://localhost:8080/useraddress",formdata)
   }
  return (
    
    <>
      <div className='shipping-main-div'>
          <div className='shipping-left-div'>
              <p className='shipping-p-div'>SHIPPING ADDRESS</p>
              <form className='shipping-form-div' onSubmit={handelsubmit}>
                  <label className='shipping-label-div'><span className='shipping-span-div'>*</span>First Name</label> <br />
                  <input type="text" className='shipping-input-box' name='first_name' onChange={handelchange} />
                  <br />
                  <label className='shipping-label-div'><span className='shipping-span-div'>*</span>Last Name</label> <br />
                  <input type="text" className='shipping-input-box' name='last_name' onChange={handelchange}/>
                  <br />
                  <label className='shipping-label-div'><span className='shipping-span-div'>*</span>Address 1</label> <br />
                  <input type="text" className='shipping-input-box'  name='address' onChange={handelchange}/>
                  <br />
                  <label className='shipping-label-div'>Address 2</label> <br />
                  <input type="text" className='shipping-input-box' />
                  <br />
                  <label className='shipping-label-div'><span className='shipping-span-div' >*</span>Country</label> <br />
                   <select className='shipping-select-tag'  name='country' onChange={handelchange}>
                      <option value="India">India</option>
                      <option value="United State">United State</option>
                   </select><br />
                  <label className='shipping-label-div'><span className='shipping-span-div'>*</span>City</label> <br />
                  <input type="text"  className='shipping-input-box'  name='city' onChange={handelchange} />
                  <br />
                  <label className='shipping-label-div'><span className='shipping-span-div'>*</span>State</label> <br />
                  <select className='shipping-select-tag'  name='state' onChange={handelchange}>
                      <option value="">Select...</option>
                      <option value="Maharashtra">Maharashtra</option>
                      <option value="Utter Pradesh">Utter Pradesh</option>
                      <option value="Panjab">Panjab</option>
                      <option value="Madha Pradesh">Madha Pradesh</option>
                      <option value="Gujrat">Gujrat</option>
                      <option value="Chennai">Chennai</option>
                      <option value="Rajstan">Rajstan</option>
                      <option value="Dehli">Dehli</option>
                   </select><br />

                  <label className='shipping-label-div'><span className='shipping-span-div'>*</span> ZIP Code</label> <br />
                  <input type="number"  className='shipping-input-box'  name='zipcode' onChange={handelchange} />
                  <br />
                  <label className='shipping-label-div'><span className='shipping-span-div'>*</span>Phone</label> <br />
                  <input type="text"  className='shipping-input-box'  name='mobile' onChange={handelchange}/>
                  <br />

                  <input className='shipping-button' type="submit" value="CONFORM SHIPPING ADDRESS" />
              </form>
          </div>
          <div className='shipping-right-div'>
              <div>YOUR ORDER</div>
               <hr />
               <div className='shipping-flexdiv'>
                 <div className='shipping-left-flexdiv'>
                    <img className='shipping-img-div' src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwf97a6473/crop/026414639_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_" alt="" />
                 </div>
                 <div className='shipping-right-flexdiv'>
                      <p>sdljflsdj</p>
                      <p>hjdhflshdlfsld</p>
                      <p>fjsdjfsdj;fjs</p>
                      <p>hflsdhfshdlfk</p>
                      <p>shananajjau</p>
                 </div>
               </div>
               <hr />
               <div className='shipping-bottom-flexdiv'>
                 <div className='shipping-bottom-left-flexdiv'>
                   <p>MERCHANDISE SUBTOTAL</p>
                   <p>ESTIMATED SHIPPING </p>
                   <p>SALES TAX</p>
                   <h3>ORDER TOTAL (USD)</h3>
                 </div>
                 <div className='shipping-bottom-right-flexdiv'>
                   <p>$31.00</p>
                   <p>$31.00</p>
                   <p>$31.00</p>
                   <h3>$31.00</h3>
                 </div>
              </div>

          </div>
      </div>
    </>
  )
}
