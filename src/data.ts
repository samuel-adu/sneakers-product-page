import Product1Image from './assets/images/image-product-1.jpg';
import Product2Image from './assets/images/image-product-2.jpg';
import Product3Image from './assets/images/image-product-3.jpg';
import Product4Image from './assets/images/image-product-4.jpg';

import Product1Thumbnail from './assets/images/image-product-1-thumbnail.jpg';
import Product2Thumbnail from './assets/images/image-product-2-thumbnail.jpg';
import Product3Thumbnail from './assets/images/image-product-3-thumbnail.jpg';
import Product4Thumbnail from './assets/images/image-product-4-thumbnail.jpg';

import ProductCartImage from './assets/images/image-product-1-thumbnail.jpg';

export const product = {
  id: 1,
  name: 'Fall Limited Edition Sneakers',
  price: 125,
  cartImage: ProductCartImage,
  images: [
    { image: Product1Image, thumbnail: Product1Thumbnail, alt: 'Product1' },
    { image: Product2Image, thumbnail: Product2Thumbnail, alt: 'Product2' },
    { image: Product3Image, thumbnail: Product3Thumbnail, alt: 'Product3' },
    { image: Product4Image, thumbnail: Product4Thumbnail, alt: 'Product4' },
  ],
};
