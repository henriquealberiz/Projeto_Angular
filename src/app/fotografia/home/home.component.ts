import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  img = "https://criticalhits.com.br/wp-content/uploads/2022/11/quando-comeca-a-copa-do-mundo-20.jpg";
  constructor() { }

  ngOnInit(): void {
  }

}
