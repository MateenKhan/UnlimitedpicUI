import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';


import { HomepageComponent } from './homepage/homepage.component';
import { FooterComponent } from './footer/footer.component';
import { SearchResultComponent } from './search-result/search-result.component';
import {
  ImageInfoComponent,
  DownloadModalComponent
} from './image-info/image-info.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutes } from './app-routing';

import {
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule
} from '@angular/material';

import BugsnagErrorHandler from 'bugsnag-angular';
import bugsnag from 'bugsnag-js';
import { SearchFieldComponent } from './search-field/search-field.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { UsersComponent } from './users/users.component';
import { MyProfileComponent } from './users/my-profile/my-profile.component';
import { LoginModalComponent, HeaderComponent, RegisterModalComponent } from './header/header.component';
import { UnlimitedComponent } from './layouts/unlimitedpic/unlimitedpic.component';
import { MyFavoritesComponent } from './users/my-favorites/my-favorites.component';
import { MyDownloadsComponent } from './users/my-downloads/my-downloads.component';
import { MyUploadsComponent } from './users/my-uploads/my-uploads.component';

const bugsnagClient = bugsnag('API_KEY');

export function errorHandlerFactory() {
  return new BugsnagErrorHandler(bugsnagClient);
}

@NgModule({
  exports: [
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule
  ],
  declarations: [],
})
export class MaterialModule { }

@NgModule({
  declarations: [
    AppComponent,
    UnlimitedComponent,
    HeaderComponent,
    HomepageComponent,
    FooterComponent,
    SearchResultComponent,
    ImageInfoComponent,
    SearchFieldComponent,
    DownloadModalComponent,
    LoginModalComponent,
    RegisterModalComponent,
    PortfolioComponent,
    UsersComponent,
    MyProfileComponent,
    MyFavoritesComponent,
    MyDownloadsComponent,
    MyUploadsComponent
  ],
  entryComponents: [DownloadModalComponent, LoginModalComponent, RegisterModalComponent],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule.forRoot(AppRoutes),
    HttpClientModule,
    NgbModule,
    MaterialModule
  ],

  providers: [
    { provide: ErrorHandler, useFactory: errorHandlerFactory },
    NgbActiveModal
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
