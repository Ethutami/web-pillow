import Pillow1 from '../../public/assets/images/Single-Pillow-1.png';
import Pillow2 from '../../public/assets/images/Single-Pillow-2.png';
import Pillow3 from '../../public/assets/images/Single-Pillow-3.png';
import Pillow4 from '../../public/assets/images/Single-Pillow-4.png';
import Pillow5 from '../../public/assets/images/Single-Pillow-5.png';
import Pillow6 from '../../public/assets/images/Single-Pillow-6.png';

export const DataBundlingProduct = [Pillow1, Pillow2, Pillow3, Pillow4, Pillow5, Pillow6];

export const DataBundlingProductByIndex = (index) => DataBundlingProduct[index % DataBundlingProduct.length];
