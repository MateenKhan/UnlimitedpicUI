import { Component, OnInit, Input } from '@angular/core';

import { Router } from '@angular/router';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';


declare const $: any;
interface FileReaderEventTarget extends EventTarget {
  result: string;
}

interface FileReaderEvent extends Event {
  target: FileReaderEventTarget;
  getMessage(): string;
}
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  view: 'profile';
  schoolName;

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {

  }

  pictureChangeCallback(event): any {
    if (event.target.files && event.target.files[0]) {
      const reader: any = new FileReader();
      reader.onload = function (e: FileReaderEvent) {
        $('#wizardPicturePreview')
          .attr('src', e.target.result)
          .fadeIn('slow');
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  }
}



@Component({
  selector: 'app-contact-model',
  templateUrl: '../login-model/login-model.html',
  styleUrls: ['../login-model/login-model.scss']
})
export class LoginModalComponent {
  @Input() name;
  constructor(public activeModal: NgbActiveModal) { }
}


@Component({
  selector: 'app-login-model',
  templateUrl: '../register-model/register-model.html',
  styleUrls: ['../register-model/register-model.scss']
})
export class RegisterModalComponent {
  @Input() name;
  constructor(public activeModal: NgbActiveModal) { }
}
