export const Forms=()=>{
 return(  <>
   <div className="mb-3">
  <label htmlfor="exampleFormControlInput1" className="form-label">Email address</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
</div>
<div className="mb-3">
  <label  htmlfor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
  <textarea classNames="form-control" id="exampleFormControlTextarea1" rows="3"/>
</div>
</>
 )
}