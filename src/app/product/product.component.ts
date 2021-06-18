import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  public users=[
    {name:'luis', city:'jalpa'},
    {name:'jaun', city:''},
    {name:'pepe', city:'zac'}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
