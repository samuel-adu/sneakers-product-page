import '../styles/preview.css';
import product1 from '../assets/images/image-product-1.jpg';
import product1thumbnail from '../assets/images/image-product-1-thumbnail.jpg';
import product2thumbnail from '../assets/images/image-product-2-thumbnail.jpg';
import product3thumbnail from '../assets/images/image-product-3-thumbnail.jpg';
import product4thumbnail from '../assets/images/image-product-4-thumbnail.jpg';
import iconPrev from '../assets/icons/icon-previous.svg';
import iconNext from '../assets/icons/icon-next.svg';

function Preview() {
  return (
    <div className="product-preview">
      <div className="carousel">
        <div className="carousel-item">
          <img src={product1} alt="" />
        </div>
        <img src={iconNext} alt="" className="carousel-nav carousel-next" />
        <img src={iconPrev} alt="" className="carousel-nav carousel-prev" />
      </div>

      <div className="thumbnails">
        <img src={product1thumbnail} alt="" />
        <img src={product2thumbnail} alt="" />
        <img src={product3thumbnail} alt="" />
        <img src={product4thumbnail} alt="" />
      </div>
    </div>
  );
}

export default Preview;
