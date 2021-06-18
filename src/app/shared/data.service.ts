import { isNull } from '@angular/compiler/src/output/output_ast';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private products = [
    {id:1,name: 'prod 1', category:'cat 1', description:'producto uno', price: 10.0},
    {id:2,name: 'prod 2', category:'cat 2', description:'producto dos', price: 20.0},
    {id:3,name: 'prod 3', category:'cat 3', description:'producto tres', price: 30.0},
    {id:4,name: 'prod 4', category:'cat 1', description:'producto cuatro', price: 40.0}
  ]

  getAllProducts(){
    return this.products;
  }

  getProductById(id:number){    
     return this.products.filter((p)=> p.id === id);    
  }
}
