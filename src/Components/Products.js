import "./Style/Products.css"
import React from 'react';
import { useDispatch, useSelector } from "react-redux"
import axios from "axios"
import { add_Product } from "../Redux/action"
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';


const Products = () => {
  // ⬇ useSelector hook is an alternatives to mapStateToProps is used to get the state from the redux store. ⬇
   
  const products = useSelector((store) => (store.product))

// ⬇ useDispatch  hooks is an alternatives to mapDispatchToProps The useDispatch hook is used to dispatch an action ⬇
  const dispatch = useDispatch();
  //⬇ useState to return an updated function for our sorting functionality⬇
  const [change, setChange] = useState(false)

//Sorting Functionality from ascending to descending
  const sortItems = (sort, value) => {
    if (sort === 'asc' && value === 'Rent') {
      products.sort((a, b) => a.Rent - b.Rent)
      setChange(!change)
    };

    if (sort === 'dsc' && value === 'Rent') {
      products.sort((a, b) => b.Rent - a.Rent)
      setChange(!change)
    };

  }

  useEffect(() => {
    getdata()
  }, [])

  const getdata = () => {
    axios.get(`http://localhost:3000/Products`).then((res) => {
      dispatch(add_Product(res.data))
      console.log(res.data)
    })
  }

  return (
 
    <div className="slide-container">
      <div className="dropdown">
        <button className="dropbtn">Dropdown</button>
        <div className="dropdown-content">
          <button className="button" onClick={() => { sortItems('asc', 'Rent') }} >Low to High Price</button>
          <button className="button" onClick={() => { sortItems('dsc', 'Rent') }} >High to Low Price</button>
          <button className="button" onClick={() => { sortItems('asc', 'name') }} >Sort By Name A-Z</button>
        </div>
      </div>
      <div className="produ">
        {/* //map function to get show the data from json server */}
        {products.map((e) => {
          return <Link to={`/Products/${e._id}`}>

            <div className="main-div"> 

            <img src={e.image} alt="" className="img_prod" />
            <div className="price">
              <div className="Leftdiv">
                {e.title}
                <p>₹ {e.Rent}</p>

              </div>

              <div>
                <button className="order">Rent Now</button>
              </div>

            </div>
          </div></Link>

        })}

      </div>
      <div className="sam">

      </div>

    </div>
  )
}
export default Products
