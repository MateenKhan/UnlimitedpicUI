import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Constants } from '../app-constants';
import { StorageService } from '../services/storage-service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private modalService: NgbModal, private storageService: StorageService) { }

  Constants = Constants;
  isUserLoggedIn = this.storageService.isUserLoggedIn;
  @Input() title: String;
  isCollapsed = true;
  toggleCollapsed(): void {
    this.isCollapsed = !this.isCollapsed;
  }


  openloginmodel() {
    const modalRef = this.modalService.open(LoginModalComponent);
    // modalRef.componentInstance.name = 'World';
  }

  openregistermodel() {
    const modalRef = this.modalService.open(RegisterModalComponent);
    // modalRef.componentInstance.name = 'World';
  }

  logout(){
    this.storageService.deleteUser();
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
  email: string = '';
  constructor(public activeModal: NgbActiveModal, private storageService: StorageService) { }

  login() {
    this.storageService.storeUser(this.email);
    this.activeModal.close();
  }
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
