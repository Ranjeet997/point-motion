import React from 'react'
import { useSelector } from "react-redux";
import "./Manager.css";

export default function Manager() {
  let initialState = useSelector((state) => state);
  
  return initialState.userReducer.map((user)=>{
  return (
    <>
    <div className='d-flex justify-content-center'>
    <div className='row my-5' id='mainCard'>
        <div className='col-sm-6 col-md-6 col-lg-4 col-xl-4 mt-5'>
            <div className="card">
              <img src={user.prodImg} className="card-img-top" alt="..."/>
              <div className="card-body d-flex justify-content-evenly">
                {/* <div className="my-3 h5" style={{width:"5rem"}}>{user.prodName}</div> */}
                {/* <div className='my-4 h3'>{user.prodPrice}:-</div> */}
            </div>
            </div>
        </div>
        <div className='col-sm-6 col-md-6 col-lg-4 col-xl-4 mt-5'>
            <div className="card">
              <img src={user.prodImg} className="card-img-top" alt="..."/>
              <div className="card-body d-flex justify-content-evenly">
                {/* <div className="my-3 h5" style={{width:"5rem"}}>{user.prodName}</div> */}
                {/* <div className='my-4 h3'>{user.prodPrice}:-</div> */}
            </div>
            </div>
        </div>
    </div>
    </div>
    </>
  )
    });
}
