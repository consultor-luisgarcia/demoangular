import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {

  public products:any = [];
  constructor(private servicio:DataService) { }

  ngOnInit(): void {
    this.products = this.servicio.getAllProducts();
  }

}
