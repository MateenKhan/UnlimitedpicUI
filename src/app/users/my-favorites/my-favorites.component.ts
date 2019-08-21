import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-favorites.component.html',
  styleUrls: ['./my-favorites.component.scss']
})
export class MyFavoritesComponent implements OnInit {
  ImageResponse = {
    images: [
      {
        Description: 'Festivals',
        ImagePath: './assets/img/festival.jpg'
      },
      {
        Description: 'Shopping',
        ImagePath: './assets/img/shopping.jpg'
      },
      {
        Description: 'Animals',
        ImagePath: './assets/img/animal.jpg'
      },
      {
        Description: 'Nature',
        ImagePath: './assets/img/nature.jpg'
      },
      {
        Description: 'Florals',
        ImagePath: './assets/img/florals.jpg'
      },
      {
        Description: 'Food',
        ImagePath: './assets/img/food.jpg'
      },
      {
        Description: 'Business',
        ImagePath: './assets/img/business.jpg'
      },
      {
        Description: 'Infographic',
        ImagePath: './assets/img/infographic.jpg'
      },
      {
        Description: 'Backgrouds',
        ImagePath: './assets/img/background.jpg'
      },
      {
        Description: 'Technology',
        ImagePath: './assets/img/technology.jpg'
      },
      {
        Description: 'Template',
        ImagePath: './assets/img/background.jpg'
      }
    ]
  };

  constructor() { }

  ngOnInit() {
  }

}
