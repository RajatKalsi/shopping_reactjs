import './carousel.css';

function Carousel(){
    return(
        <>
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://source.unsplash.com/700x100/?shopping,women" className="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block" id="carousel-button">
     
      <h4  className="font">Shopping in minimum balance</h4>
      </div>
     
    </div>
    <div class="carousel-item">
      <img src="https://source.unsplash.com/700x100/?shopping,design" className="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block " id="carousel-button">
      <h4 className="font">Shopping in minimum balance</h4>
      </div>
    </div> 
    
    <div className="carousel-item">
     <div> <img src="https://source.unsplash.com/700x100/?shopping,ecommerce" className="d-block w-100" alt="..."/>
     <div class="carousel-caption d-none d-md-block">
     <h4 className="font">Shopping in minimum balance</h4>
     </div>
     </div>
    </div>
  </div>
</div>
        </>
    )
}
export default Carousel;