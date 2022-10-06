import { Product } from './../model/product';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
  public title: String;
  public list:Product[];
  public priceMax:number;
  constructor() {
  }
  ngOnInit(): void {
    this.title = 'MyStore App';

    this.list =[
      {
        id:12,
        
        name : "Napapijri",
        description : "BOX - T-shirt imprimé - gray",
        price :39,
        nbrLike : 23,
        picture:"https://img01.ztat.net/article/spp-media-p1/68ef9f76034f44808e6bdb5070f2b455/9925feb97f184ca9a5747fc477514c53.jpg?imwidth=300&filter=packshot",
        quantity: 0
      },
      {
        id:32,
        
        name : "CHASIN'",
        description : "BASE-B - T-shirt basique - black",
        price :100,
        nbrLike : 30,
        picture:"https://img01.ztat.net/article/spp-media-p1/b8277ae30cc942cfa1e44f4c137babdc/1aae5cf0cd9545a498a09ddefd278872.jpg?imwidth=300",
        quantity: 3
      },
      {
        id:32,
        
        name : "CHASIN'",
        description : "BASE-B - T-shirt basique - black",
        price :100,
        nbrLike : 30,
        picture:"https://img01.ztat.net/article/spp-media-p1/b8277ae30cc942cfa1e44f4c137babdc/1aae5cf0cd9545a498a09ddefd278872.jpg?imwidth=300",
        quantity: 3
      },
      {
        id:32,
        
        name : "CHASIN'",
        description : "BASE-B - T-shirt basique - black",
        price :100,
        nbrLike : 30,
        picture:"https://img01.ztat.net/article/spp-media-p1/b8277ae30cc942cfa1e44f4c137babdc/1aae5cf0cd9545a498a09ddefd278872.jpg?imwidth=300",
        quantity: 3
      },
      {
        id:32,
        
        name : "CHASIN'",
        description : "BASE-B - T-shirt basique - black",
        price :100,
        nbrLike : 30,
        picture:"https://img01.ztat.net/article/spp-media-p1/b8277ae30cc942cfa1e44f4c137babdc/1aae5cf0cd9545a498a09ddefd278872.jpg?imwidth=300",
        quantity: 3
      }
    ]
    }
    incerementLike (product :Product):void {

      let i = this.list.indexOf(product);
      if(i!= -1){
        this.list[i].nbrLike++;
      }
      
      }
      buyProduct(product :Product):void{
        let i = this.list.indexOf(product);
        if(i!= -1){
          this.list[i].quantity--;
        }
      }

}
