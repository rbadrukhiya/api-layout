import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from './card';
import Footer from './footer';
import Copyright from './copyright';
import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

function Home() {
  const [getchar, setchar] = useState([])
  const [spin, setspin] = useState(false)
  const [search , setsearch] = useState('https://dummyjson.com/products');
  function home(e)
  {
    
    if(e !='')
    {
      setsearch('https://dummyjson.com/products/search?q=' +e)
    }
    axios.get(search)
    .then(function (response) {
      console.log(response);
      setchar(response.data.products)
    })
    .catch(function (error) {
      console.log(error);
    })
  }
  useEffect(() => {
    axios.get('https://dummyjson.com/products')
      .then(function (response) {
        console.log(response);
        setchar(response.data.products)
        setspin(true)

      })
      .catch(function (error) {
        console.log(error);
      })
  }, [])





  if (spin)
  
  {


    return (
      <div className="App">
        <div className="header ">
          <div className="container ">
            <div className="row justify-content-between align-items-center pt-2 pb-2  ">
              <div className="col-auto">
                <div className="logo"><img src={require('./image/Swiffer.png')} alt="" className='img-fluid' /></div>
              </div>
              <div className="col-auto d-lg-block d-none">
                <ul className='list-unstyled d-flex main-menu' >
                  <li className='me-4'><a href="#">home</a><i class="fa-solid fa-angle-down"></i></li>
                  <li className='me-4'><a href="#">mobiles</a><i class="fa-solid fa-angle-down"></i></li>
                  <li className='me-4'><a href="#">electronics</a><i class="fa-solid fa-angle-down"></i></li>
                  <li className='me-4'><a href="#">cosmetic</a><i class="fa-solid fa-angle-down"></i></li>
                  <li className='me-4'><a href="#">top offers</a><i class="fa-solid fa-angle-down"></i></li>
                </ul>
              </div>
              <div className="col-auto d-lg-block d-none">
                <input type="text" placeholder='search '  onChange={(i) => {home(i.target.value)}} />
              </div>

              <div className="col-auto d-lg-none ">
                <div className="toggle"><i class="fa-solid fa-list"></i></div>
              </div>
            </div>
          </div>
        </div>
        <OwlCarousel className='owl-theme' loop margin={10} dots={false} items={1} autoplay autoplayTimeout={1000} >
          <div class='item'>
            <img src={require('./image/slider1.jpg')} alt="" className='img-fluid' />

          </div>
          <div class='item'>
            <img src={require('./image/slider2.jpeg')} alt="" className='img-fluid' />
          </div>
          <div class='item'>
            <img src={require('./image/slider3.jpg')} alt="" className='img-fluid' />

          </div>
          <div class='item'>
            <img src={require('./image/slider4.jpg')} alt="" className='img-fluid' />

          </div>
          <div class='item'>
            <img src={require('./image/slider5.jpg')} alt="" className='img-fluid' />

          </div>
          <div class='item'>
            <img src={require('./image/slider6.png')} alt="" className='img-fluid' />
          </div>
        </OwlCarousel>

        <div className="cardd">
          <div className="container pt-2">
            <div className="row justify-content-center align-items-center" >
              <div data-aos="flip-up"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-once="true"
              >
                <div className="col-auto mt-5 text-center">
                  <h1 >Best Of Electronics & Many More</h1>
                </div>
              </div>
              <div className="row mt-5" >

                {
                  getchar.slice(0, 30).map((i, id) => {
                    return (
                      <>
                        <Card img={i.images[0]}
                          title={i.title}
                          price={i.price}
                          stock={i.stock}
                          brand={i.brand}
                          category={i.category}
                          rating={i.rating}
                          dis={i.discountPercentage}
                          id={i.id}
                        />
                      </>
                    )
                  })
                }
              </div>
            </div>

          </div>
        </div>
        <Footer></Footer>
        <Copyright></Copyright>
      </div>
    );
  }
  else {
    return (
      <>
        <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
      </>
    )
  }
}

export default Home;



