import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-dietfood',
  templateUrl: './dietfood.component.html',
  styleUrls: ['./dietfood.component.css']
})
export class DietfoodComponent implements OnInit {

   dietfood=[
     {
       sku:1,
       name:"Protein",
       brand:"MuscleBlaze",
       price:4000
     } ,
     {
      sku:2,
      name:"PeanutButter",
      brand:"Asitis",
      price:2000
    },{
      sku:3,
      name:"ProteinBar",
      brand:"MuscleBlaze",
      price:500
    },{
      sku:4,
      name:"MassGainer",
      brand:"Whey",
      price:5000
    },
   ] ;

  constructor() { }

  ngOnInit(): void {
  }

}
