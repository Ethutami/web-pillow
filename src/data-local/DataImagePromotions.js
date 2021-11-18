import Promo1 from '../../public/assets/images/promo1.png';
import Promo2 from '../../public/assets/images/promo2.png';
import Promo3 from '../../public/assets/images/promo3.png';

export const ImagePromotion = [Promo1, Promo2, Promo3];
export const ImagePromotionByIndex = (index) => ImagePromotion[index % ImagePromotion.length];
