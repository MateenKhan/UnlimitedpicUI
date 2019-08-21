import { Routes } from '@angular/router';
import { SearchResultComponent } from './search-result/search-result.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ImageInfoComponent } from './image-info/image-info.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { UsersComponent } from './users/users.component';
import { MyProfileComponent } from './users/my-profile/my-profile.component';
import { UnlimitedComponent } from './layouts/unlimitedpic/unlimitedpic.component';
import { MyFavoritesComponent } from './users/my-favorites/my-favorites.component';
import { MyDownloadsComponent } from './users/my-downloads/my-downloads.component';
import { MyUploadsComponent } from './users/my-uploads/my-uploads.component';

export const AppRoutes: Routes = [
  {
    path: '',
    component: UnlimitedComponent,
    children: [
      { path: '', component: HomepageComponent },
      {
        path: 'homepage',
        redirectTo: '/',
        pathMatch: 'full'
      },
      { path: 'SearchResult', component: SearchResultComponent },
      { path: 'ImageInfo', component: ImageInfoComponent },
      { path: 'Portfolio', component: PortfolioComponent },
      {
        path: 'my',
        component: UsersComponent,
        children: [
          { path: 'profile', component: MyProfileComponent },
          { path: 'favotites', component: MyFavoritesComponent },
          { path: 'downloads', component: MyDownloadsComponent },
          { path: 'uploads', component: MyUploadsComponent },
          // { path: 'parent-profile', component: ParentProfileComponent },
          // { path: 'school-profile', component: VendorProfileComponent },
          // { path: 'orders', component: OrdersComponent },
          // { path: 'subscriptions', component: SubscriptionsComponent },
          // { path: 'favourites', component: FavoritesComponent },
          // { path: 'mypreference', component: MyPreferenceComponent },
          // { path: 'alerts', component: AlertsAndNotificationsComponent },
          // { path: 'setting', component: SettingsComponent }
        ],
        // canActivate: [AuthGuard]
      }
    ]
  },
];


