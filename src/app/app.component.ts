import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { DetailsComponent } from "./components/details/details.component";
import { CurrencyPipe, DatePipe, UpperCasePipe } from '@angular/common';
import { ProfitPipe } from './pipes/profit.pipe';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { HomeComponent } from "./components/home/home.component";
import { FooterComponent } from "./components/footer/footer.component";
import { SearchComponent } from "./components/search/search.component";
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DetailsComponent, UpperCasePipe, DatePipe,
    ProfitPipe, CurrencyPipe, NavbarComponent, HomeComponent, FooterComponent, SearchComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  // title = 'movies-app';
  // today = new Date();
  // sellingPrice = 15.39;
  // imageUrl = "https://yt3.googleusercontent.com/y4J_Fs5ksRlxx6_LzT1VKxVqH_T8Vyn_RN_YYgLJhuMzBS5qxTgm7NlEcMkQd3hgCpfWtYcEUg=s900-c-k-c0x00ffffff-no-rj";
  // attributeValue = "test-value";
  // multipleClass = 'sample sample-color'
  // timeNow = new Date();
  // setTimeToNow(){
  //   console.log(new Date());
  //   this.timeNow = new Date();
  // }
  // modColor = 'black';
  // setTextColor(color:string){
  //   console.log(color);
  //   this.modColor = color;
  // }
  // name = "Sabhari P"
}
