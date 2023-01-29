import { useParams } from "react-router-dom"
import axios from "axios"
import { useEffect, useState } from "react"
import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Footer from "./footer";
import Copyright from "./copyright";


function Single_products() {
  const { id } = useParams()
  const [getchar, setchar] = useState()
  const [condition, setcondition] = useState(false)
  const [get , setimg] = useState([])
  useEffect(() => {
    axios.get(`https://dummyjson.com/products/${id}`)
      .then(function (response) {
        
        setchar([response.data])
        console.log(getchar)
        setcondition(true)
        setimg(response.data.thumbnail)
      })
      .catch(function (error) {
        console.log(error);
      })
  }, [])
  if (condition) {
    return (
      <>
        {
          getchar.map((i) => {
            return (
              <>
               
                <div className="single">
                  <div className="container p-4 ">
                    <div className="row justify-content-center  row-cols-xxl-3 row-cols-xl-2 ">
                   
                      <div className="col-auto  p-0  ">
                        <div className="img-single">
                           <OwlCarousel className='owl-theme mb-3' loop margin={10} items={1} dots={false} autoplay autoplayTimeout={3000}>
                            <div class='item'>
                            <img src={i.images[0]} alt="" className="img-fluid" />

                            </div>
                            <div class='item'>
                            <img src={i.images[2]} alt="" className="img-fluid" />
                            </div>
                            <div class='item'>
                            <img src={i.images[1]} alt="" className="img-fluid" />
                            </div>
                            <div class='item'>
                            <img src={i.images[3]} alt="" className="img-fluid" />
                            </div>

                          </OwlCarousel> 
                          
                          {/* <img src={get} alt="" /> */}

                        </div>

                        
                        <div className="col-auto">
                        <ul className="list-unstyled many-img d-flex ">
                          <li className="me-3"><img src={i.images[0]} onClick={() => {setimg(i.images[0])}} alt="" /></li>
                          <li className="me-3"><img src={i.images[2]} onClick={() => {setimg(i.images[2])}} alt="" /></li>
                          <li className="me-3"><img src={i.images[3]} onClick={() => {setimg(i.images[3])}} alt="" /></li>
                          <li className="me-3"><img src={i.images[1]} onClick={() => {setimg(i.images[1])}} alt="" /></li>
                        </ul>
                      </div>

                      </div>
                      <div className="single_content">
                          <div className="title">{i.title} {i.description}</div>
                          <div className="price"> <i class="fa-solid fa-indian-rupee-sign"></i> {i.price}</div>
                          <div className="discount">{i.discountPercentage}% off</div>
                          <div className="brand">{i.brand}</div>
                          <div className="free"><i class="fa-solid fa-truck"></i> Free Delivery </div>
                          <div className="rating"><button className="rat mt-3">{i.rating} <i class="fa-solid fa-star"></i></button><button className="ms-3 mt-3 bank">Bank Offer</button></div>
                        </div>
                      
                    </div>
                    <div className="back_button"><button><a href="/">Back</a></button></div>
                  </div>
                </div>
              </>
            )
          })
        }

        <Footer></Footer>
        <Copyright></Copyright>
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
export default Single_products

