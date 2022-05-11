import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function Item_card() {
  let initialState = useSelector((state) => state);
  console.log(initialState);
  return initialState.userReducer.map((user)=>{
  return (
    <div>
      <div className="addCard mt-5">
        <div className=" border-bottom">
          <div
            className="border-top border-bottom py-3"
          >
            <div className="textBox d-flex justify-content-between">
            <span className="h4">Name</span>
            <span className="h4">Desctription</span>
            <span className="h4">Price</span>
            </div>
          </div>
          <div className="row g-0">
            <div className="col-md-1">
              <img src="" className="img-fluid rounded-start" alt="..." />
            </div>
            <div className="col-md-11">
              <div className="card-body">
                <div className="d-flex justify-content-between mx-5 pb-2">
                  <span className='h6'>{user.prodName}</span>
                  <span className="h6">{user.prodDes}</span>
                  <span className='h6'>{user.prodPrice}</span>
                  <span className="h6 text-info"><a href="">Remove</a></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    // })
  );
  })
}
