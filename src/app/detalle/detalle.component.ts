import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../shared/data.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  public product:any = {};
 
  constructor(private route:ActivatedRoute, 
    private service:DataService,
    private location:Location) { 
    
  }

  ngOnInit(): void {
    const productId=this.route.snapshot.paramMap.get('id')??'0';
    console.log('id enviado ', productId);
    [this.product] = this.product = this.service.getProductById(+productId);
    console.log("id", this.product)
     
  }

  goBack(){
    this.location.back();
  }
}
