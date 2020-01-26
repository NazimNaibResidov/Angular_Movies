import { MovieService } from './services/movie.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule,Route} from '@angular/router';
import { AppComponent } from './app.component';
import { HeadComponent } from './components/head/head.component';
import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { SlideComponent } from './components/slide/slide.component';
import { MoviesComponent } from './components/movies/movies.component';
import { DetayComponent } from './components/detay/detay.component';

const myRoute:Route[]=[
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'head',
    component:HeadComponent
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'detay/:id',
    component:DetayComponent
  },
  {
    path:'login',
    component:LoginComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    SlideComponent,
    MoviesComponent,
    DetayComponent,
   
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(myRoute)
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
