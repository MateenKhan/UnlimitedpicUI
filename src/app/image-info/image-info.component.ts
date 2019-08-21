import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-image-info',
  templateUrl: './image-info.component.html',
  styleUrls: ['./image-info.component.scss']
})
export class ImageInfoComponent implements OnInit {
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

  constructor(private modalService: NgbModal) { }

  open() {
    const modalRef = this.modalService.open(DownloadModalComponent);
    // modalRef.componentInstance.name = 'World';
  }

  ngOnInit() { }
}

@Component({
  selector: 'app-download',
  templateUrl: './download-model.component.html',
  styleUrls: ['./download-model.component.scss']
})
export class DownloadModalComponent {
  @Input() name;
  constructor(public activeModal: NgbActiveModal) { }
}
