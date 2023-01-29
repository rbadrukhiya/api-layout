import { createContext, useState ,  } from "react";
import { useDispatch, useSelector } from "react-redux"

// import { Add } from "./action";
import Cart from "./cart";
// const user = createContext()
function Card(i) {
  
    // const dispatch =  useDispatch()
    // const getdata =  useSelector((state) => state.Cart)
    // const [data , setdata] = useState([''])
    // console.log(getdata);
    // function send(e)
    // {
    //     setdata(getdata)
        
    //     dispatch(Add(e))
    // }

    return (
        <>
    {/* <user.Provider storedata={data}>
        {
            data.map((i)=>{
                return(
                    <>
                    <Cart title = {i.title}/>
                    </>
                )
            })  
        }
    </user.Provider> */}
            <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4"
            >
                <div className="box m-3" data-aos="fade-up"
                    data-aos-duration="2000"
                    data-aos-once="true">
                    <div className="img">
                        <img src={i.img} alt="" /><a href=""></a>
                    </div>
                    <div className="content p-3">
                        <div className="title" >Title :- {i.title}</div>
                        <div className="stock">Stock :- {i.stock}</div>
                        <div className="brand">Brand :- {i.brand}</div>
                        <div className="category">Category :- {i.category}</div>
                        <div className="price"><i class="fa-solid fa-indian-rupee-sign"></i> :- {i.price}<button> {i.rating} <i class="fa-solid fa-star star"></i></button></div>
                        <h6 className="offer">{i.dis}% Off</h6>
                        <button className="btn pe-3 ps-3 me-3"><a href={`/card/${i.id}`}>Read More</a></button>
                        <button className="btn pe-3 ps-3" >
                            {/* <a href="#" onClick={() => send(i)}>  Add To Cart</a></button> */}
                            <a href={`/cart/${i.id}`} >  Add To Cart</a></button>

                    </div>
                </div>
            </div>
        </>
    )
}
export default Card;
// export {user};