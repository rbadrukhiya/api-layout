import { useSelector, useDispatch } from "react-redux";
// import { user } from "./card";
import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";


function Cart() {

  const { id } = useParams()
  const [getchar, setchar] = useState()
  const [condition, setcondition] = useState(false)
  useEffect(() => {
    axios.get(`https://dummyjson.com/products/${id}`)
      .then(function (response) {

        console.log(response)
        setchar([response.data])
        setcondition(true)
      })
      .catch(function (error) {
        console.log(error);
      })
  }, [])
  if (condition) {
    return (
      <>
        <div className="cart">

          {
            getchar.map((i) => {
              return (
                <>
                  {/* <p>{i.title}</p>
              <img src={i.images[0]} className='img-fluid'/>
              <p>{i.description}</p> */}


                  <div className="container">
                    <div className="row ">
                      <div className="col-auto mt-5">
                        <div className="cart-image">
                          <img src={i.images[0]} alt="" />
                        </div>
                      </div>
                      <div className="col-auto mt-5 ms-5">
                        <div className="cart-desc d-flex">
                          <div className="icon d-flex justify-content-between align-items-center ">
                          <i class="fa-solid fa-check"></i>
                          </div>
                          <p>Added To Cart</p>
                        </div>
                        <div className="cart-desc d-flex">
                          <div className="icon d-flex justify-content-between align-items-center ">
                          <i class="fa-solid fa-check"></i>
                          </div>
                          <p>7 - 8 days deliver products</p>
                        </div>
                        <div className="cart-desc d-flex">
                          <div className="icon d-flex justify-content-between align-items-center ">
                          <i class="fa-solid fa-check"></i>
                          </div>
                          <p>14 days money back gaurantee</p>
                        </div>
                        <div className="cart-desc d-flex">
                          <div className="icon d-flex justify-content-between align-items-center ">
                          <i class="fa-solid fa-check"></i>
                          </div>
                          <p>1 year warranty</p>
                        </div>
                        <div className="cart-desc d-flex">
                          <div className="icon d-flex justify-content-between align-items-center ">
                          <i class="fa-solid fa-check"></i>
                          </div>
                          <p>emi start at 1,887$</p>
                        </div>
                        <div className="cart-desc d-flex">
                          <div className="icon d-flex justify-content-between align-items-center ">
                          <i class="fa-solid fa-check"></i>
                          </div>
                          <p>no cost emi available</p>
                        </div>

                        <div className="row">
                          <div className="col-auto">
                            <div className="payment">
                              <img src={require('./image/1.jpg')} alt="" />
                                                          </div>
                          </div>
                          <div className="col-auto">
                            <div className="payment">
                              <img src={require('./image/2.jpg')} alt="" />
                                                          </div>
                          </div>
                          <div className="col-auto">
                            <div className="payment">
                              <img src={require('./image/3.jpg')} alt="" />
                                                          </div>
                          </div>
                          <div className="col-auto">
                            <div className="payment">
                              <img src={require('./image/4.jpg')} alt="" />
                                                          </div>
                          </div>
                          <div className="col-auto">
                            <div className="payment">
                              <img src={require('./image/5.jpg')} alt="" />
                                                          </div>
                          </div>
                        </div>



                        
                        {/* <div className="cart-title ms-4">
                          <p>{i.title}</p>
                        </div>
                        <div className="cart-title ms-4">
                          <p>brand -: {i.brand}</p>
                        </div>
                        <div className="cart-title ms-4">
                          <p>rating -: {i.rating}%</p>
                        </div> */}
                        {/* <div className="cart-title ms-4">
                          <p>category -: {i.category}</p>
                        </div> */}
                        {/* <div className="cart-title ms-4">
                          <p>price -: {i.price}</p>
                        </div> */}
                        {/* <div className="go-cart ms-4">
                          <button>go to cart</button>
                        </div> */}
                      </div>
                    </div>
                    <div className="row">

                    </div>
                  </div>
                </>
              )
            })
          }

          {/* <p>{id}</p> */}
          {/* <p>{title}</p> */}
          {/* <img src={img}/> */}</div>
      </>
    )
  }
  else {

    return (
      <>
        <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>


      </>
    )

  }

}
export default Cart