import { MainLayoutComponent } from '../layouts/main/MainLayout/MainLayout.component';
import { DetailProduct } from '../pages/DetailProduct/DetailProduct.component';
import { Homepage } from '../pages/Homepage/Homepage.component';

const mainRouter = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        component: Homepage,
      },
      {
        path: ':id',
        component: DetailProduct,
      },
    ],
  },
];

export default mainRouter;
