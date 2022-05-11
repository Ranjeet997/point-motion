import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import Item_card from './Item_card';
import { useSelector } from "react-redux";

export default function Item() {
  const dispatch = useDispatch();
  const [addData, setAddData] = useState({
    prodName: "",
    prodPrice : "",
    prodDes : "",
    prodImg : "",
    index: 0
  })
  // let [arr, setArr] = useState([]);
  // console.log(initialState);
  let initialState = useSelector((state) => state);
  // console.log(initialState.userReducer.length);
  
  const handleOnChange=()=>{
    setAddData({
      ...addData,
      index: initialState.userReducer.length+1
    })
    dispatch({type: "addProduct", payload: addData});
    // console.log(initialState)
  }
  return (
    <div>
    <div className='d-flex justify-content-center'>
     <div className='row my-5' id='rowCard'>
        <div className='col-md-6 col-lg-6'>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label h6">Product Name</label>
          <input type="text" className="form-control py-2" id="productName" onChange={(e)=>{
            setAddData({
              ...addData,
              prodName: e.target.value
            })
          }}  placeholder="Enter product name"/>
        </div>
        </div>
        <div className='col-md-6 col-lg-6'>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label h6">Price</label>
          <input type="text" className="form-control py-2" id="price" onChange={(e)=>{
            setAddData({
              ...addData,
              prodPrice: e.target.value
            })
          }} placeholder="Enter price"/>
        </div>
        </div>
        <div className='col-md-6 col-lg-6'>
        <div className="mb-3 my-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label h6">Product description</label>
          <textarea className="form-control" id="description" rows="3" onChange={(e)=>{
            setAddData({
              ...addData,
              prodDes: e.target.value
            })
          }} placeholder='Enter description'></textarea>
        </div>
        </div>
        <div className='col-md-6 col-lg-6'>
        <div className="mb-3 my-3">
          <label htmlFor="formFile" className="form-label h6">Product images</label>
          <input className="form-control py-2" type="file" id="file" onChange={(e)=>{
            setAddData({
              ...addData,
              prodImg: e.target.value
            })
          }} placeholder='choose file'/>
        </div>
        </div>
        <div className='button'>
         <button type="button" className="btn btn-info text-light px-4 my-4" onClick={handleOnChange}>Add Product</button>
        </div>
        <Item_card />
      </div>   
    </div>
    <style>
      {
        ` #rowCard{
            width: 70rem;
          } 
          .textBox{
            width:43rem;
            margin-left:8rem;
          }
          @media (max-width: 575.98px) { 
            #rowCard{
              width: 20rem;
            } 
              // .addCard{
              //   width:80%;
              // }
            #rowCard{
              width: 40rem;
            } 
            .textBox{
              width:20rem;
              margin-left:8rem;
            }  
          }
        `
      }
    </style>
    </div>

  )
}
