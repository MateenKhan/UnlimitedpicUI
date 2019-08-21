import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  CategoryResponse = {
    categorytype: [
      {
        ImagePath: './assets/img/indian-image.jpg',
        categorytitle: 'Indian Images',
        categoryDescription: 'Explore thousands Indian stock images'
      },
      {
        ImagePath: './assets/img/vector.jpg',
        categorytitle: 'Vectors',
        categoryDescription: 'Take control with royalty-free vectors. Edit with no loss of quality'
      },
      {
        ImagePath: './assets/img/icons.jpg',
        categorytitle: 'Icons',
        categoryDescription: 'Find icons for every project. Practical and universal'
      },
      {
        ImagePath: './assets/img/footage.jpg',
        categorytitle: 'Footage',
        categoryDescription: 'Experience HD and 4K video clips, including exclusive content'
      },
    ]
  };

  ImageResponse = {
    images: [
      {
        Description: 'Festivals',
        ImagePath:
          './assets/img/festival.jpg'
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
      }
      ,
      {
        Description: 'Template',
        ImagePath: './assets/img/background.jpg'
      },
    ]
  };

  constructor() { }

  ngOnInit() {
  }

}
