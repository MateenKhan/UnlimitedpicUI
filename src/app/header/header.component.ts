import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() title: String;
  isCollapsed = true;
  toggleCollapsed(): void {
    this.isCollapsed = !this.isCollapsed;
  }

  constructor(private modalService: NgbModal) { }

  openloginmodel() {
    const modalRef = this.modalService.open(LoginModalComponent);
    // modalRef.componentInstance.name = 'World';
  }

  openregistermodel() {
    const modalRef = this.modalService.open(RegisterModalComponent);
    // modalRef.componentInstance.name = 'World';
  }

  ngOnInit() {
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
