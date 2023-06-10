import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { SingupComponent } from './pages/singup/singup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { CarouselComponent } from './components/partials/carousel/carousel.component';
import { MovieCardsComponent } from './components/partials/movie-cards/movie-cards.component';
import { PremierCardsComponent } from './components/partials/premier-cards/premier-cards.component';
import { HttpClientModule } from '@angular/common/http';
import {MatDividerModule} from '@angular/material/divider';
import {MatSidenavModule} from '@angular/material/sidenav';
import { AdminDashboardComponent } from './pages/admin/admin-dashboard/admin-dashboard.component';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import {MatDialogModule} from '@angular/material/dialog';
import { AddMovieComponent } from './pages/admin/add-movie/add-movie.component';
import { MoviesCardsComponent } from './pages/admin/movies-cards/movies-cards.component';
import { UpdateMovieComponent } from './pages/admin/update-movie/update-movie.component';
import { TicketListComponent } from './pages/admin/ticket-list/ticket-list.component';
import { UsersDashboardComponent } from './pages/users/users-dashboard/users-dashboard.component';
import { BookticketComponent } from './pages/users/bookticket/bookticket.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { FormsModule } from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu';
import { authInterceptorProviders } from './services/guard/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SingupComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    CarouselComponent,
    MovieCardsComponent,
    PremierCardsComponent,
    AdminDashboardComponent,
    AddMovieComponent,
    MoviesCardsComponent,
    UpdateMovieComponent,
    TicketListComponent,
     UsersDashboardComponent,
     BookticketComponent,
     ForgotPasswordComponent

  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    AppRoutingModule,
    ReactiveFormsModule, 
    BrowserAnimationsModule,
    CarouselModule,
    SlickCarouselModule,
    HttpClientModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatDividerModule,
    MatTableModule,
    MatSelectModule,
    MatDialogModule,
    MatExpansionModule,
    FormsModule,
    MatMenuModule
  
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
