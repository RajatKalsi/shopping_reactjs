import './offerCard.css'
import React from 'react';
import {useSelector,useDispatch} from 'react-redux';
import{addmoney,addmoney1} from '../state/actions/addmoney';
// import addmoney1 from '../state/actions/addmoney';
const Offercard=()=>{

    const mystate=useSelector((state)=>state.changereducer);
    const dispatch=useDispatch();

    return(
        <div className="offercard">
<div className="card m-3"  id="offercards1"style={{"width": "18rem"}}>

  <img src="https://source.unsplash.com/collection/190727/1600x150 laptop" height="150px" className="card-img-top" alt="..."/>
  <div className="card-body">
    <p className="card-text"><center>Top brends available now
    <p className="cardset">50% off now! </p>
    <button className="btn btn-success" onClick={()=>dispatch(addmoney1())}>buy $20</button></center></p>
  </div>
</div>

<div className="card m-3"  id="offercards1"style={{"width": "18rem"}}>
  <img src="https://source.unsplash.com/collection/190727/1600x150 camera" height="150px"className="card-img-top" alt="..."/>
  <div className="card-body">
    <p className="card-text"><center>Top brends available now
    <p className="cardset">49% off now!</p> <button className="btn btn-success"  onClick={()=>dispatch(addmoney1())}>buy $20</button></center></p>
  </div>
</div>

<div className="card m-3" id="offercards1" style={{"width": "18rem"}}>
  <img src="https://source.unsplash.com/collection/190727/1600x150 phone" height="150px" className="card-img-top" alt="..."/>
  <div className="card-body">
    <p className="card-text"><center>Top brends available now
    <p className="cardset">50% off now! {mystate}</p> <button className="btn btn-success" onClick={()=>dispatch(addmoney())} >buy $50</button></center></p>
  </div>
</div>

<div className="card m-3" id="offercards1" style={{"width": "18rem"}}>
  <img src="https://source.unsplash.com/collection/190727/1600x150 cloths" height="150px" className="card-img-top" alt="..."/>
  <div className="card-body">
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>

        </div>
    )
}

export default Offercard;