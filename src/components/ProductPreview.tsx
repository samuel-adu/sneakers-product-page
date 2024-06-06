import '../styles/carousel.css';
import product1 from '../assets/images/image-product-1.jpg';
import product2 from '../assets/images/image-product-2.jpg';
import product3 from '../assets/images/image-product-3.jpg';
import product4 from '../assets/images/image-product-4.jpg';
import product1thumbnail from '../assets/images/image-product-1-thumbnail.jpg';
import product2thumbnail from '../assets/images/image-product-2-thumbnail.jpg';
import product3thumbnail from '../assets/images/image-product-3-thumbnail.jpg';
import product4thumbnail from '../assets/images/image-product-4-thumbnail.jpg';
// import iconPrev from '../assets/icons/icon-previous.svg';
// import iconNext from '../assets/icons/icon-next.svg';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

function ProductPreview() {
  return (
    <div className="container">
      <div className="product-preview">
        <Carousel className="carousel">
          <CarouselContent className='carousel-content'>
            <CarouselItem className="carousel-item">
              <img src={product1} alt="" className="rounded" />
            </CarouselItem>
            <CarouselItem className="carousel-item">
              <img src={product2} alt="" />
            </CarouselItem>
            <CarouselItem className="carousel-item">
              <img src={product3} alt="" />
            </CarouselItem>
            <CarouselItem className="carousel-item">
              <img src={product4} alt="" />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

        <div className="thumbnails">
          <img src={product1thumbnail} alt="" />
          <img src={product2thumbnail} alt="" />
          <img src={product3thumbnail} alt="" />
          <img src={product4thumbnail} alt="" />
        </div>
      </div>
    </div>
  );
}

export default ProductPreview;
