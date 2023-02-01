import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor() { }
  //dressDetails
  dressDetails =[
    {
      id:1,
      dressName: "Robe femme large",
      dressDetails: "Robe-all-size",
      dressPrice:200,
      dressImg:"https://res.cloudinary.com/dknccr30c/image/upload/v1672777964/image/photo1_qityrf.jpg"
    },
    {
      id:2,
      dressName: "Robe femme large",
      dressDetails: "Robe-all-size",
      dressPrice:100,
      dressImg:"https://res.cloudinary.com/dknccr30c/image/upload/v1672778041/image/photo2_gsj4ca.jpg"
    },
    {
      id:3,
      dressName: "Robe femme large",
      dressDetails: "Robe-all-size",
      dressPrice:200,
      dressImg:"https://res.cloudinary.com/dknccr30c/image/upload/v1672778042/image/photo3_a7ksr4.jpg"
    },
    {
      id:4,
      dressName: "Robe femme large",
      dressDetails: "Robe-all-size",
      dressPrice:250,
      dressImg:"https://res.cloudinary.com/dknccr30c/image/upload/v1672778042/image/photo4_k3ss35.jpg"
    },
    {
      id:5,
      dressName: "Robe femme large",
      dressDetails: "Robe-all-size",
      dressPrice:160,
      dressImg:"https://res.cloudinary.com/dknccr30c/image/upload/v1672778042/image/photo5_aufo14.jpg"
    },
    {
      id:6,
      dressName: "Robe femme large",
      dressDetails: "Robe-all-size",
      dressPrice:400,
      dressImg:"https://res.cloudinary.com/dknccr30c/image/upload/v1672778042/image/photo6_cvfqnh.jpg"
    }
  ]

}
