import { APP_BOOTSTRAP_LISTENER, Component, OnInit } from '@angular/core';
import {NgbCarousel,NgbSlideEvent,NgbSlideEventSource} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-partner-with-shupple',
  templateUrl: './partner-with-shupple.component.html',
  styleUrls: ['./partner-with-shupple.component.scss']
})
export class PartnerWithShuppleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  whycard= ["500+ cities across India","2.5 lakhs+ Business listing ","4 crore+ monthly orders"];
 
  howcard = [
      {
          id:1,
          imageUrl: "https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
          title: "Step 1",
          subtitle:"Create your page on Shupple",
          text:"Help users discover your place by creating a listing on Shupple"

      },
      {
          id:2,
          imageUrl: "https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
          title: "Step 2",
          subtitle:"Register for online ordering",
          text:"And deliver orders to millions of customers with ease"

      },
      {
          id:3,
          imageUrl: "https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
          title: "Step 3",
          subtitle:"Start receiving orders online",
          text:"Manage orders on our partner app, web dashboard or API partners"

      }

  ]
 
   ourproducts = [
      {
          card1:{
              id:1,
              imageUrl:"https://b.zmtcdn.com/merchant-onboarding/be4f70ca22a3b31a84b3cf8ed811f0281600769259.png",
              title:"Listings",
              text:"A free app that allows you to manage your Zomato listing directly from your smartphone",
              link:"#",

          },
          card2:{
              id:2,
              imageUrl:"https://b.zmtcdn.com/merchant-onboarding/2c7dd621a502cde6f5051fc6d411b8881600769171.png",
              title:"Online Ordering",
              text:"Start taking orders online from millions of users near you and deliver with Zomato...",
              link:"#",
          },
          card3:{
              id:3,
              imageUrl:"https://b.zmtcdn.com/merchant-onboarding/01a4db6bca19cd7f2013f05f159b6b491600769328.png",
              title:"Pro",
              text:"Drive more users to dine-in at your place by partnering with Zomato’s loyalty program",
              link:"#",
          }
      },
      {
          card1:{
              id:1,
              imageUrl:"https://www.zomato.com/partner_with_us/static/media/ZomatoAdvertise.31195a83.svg",
              title:"Advertise",
              text:"For every marketing dollar spent, Zomato returns over 8x the investment...",
              link:"#",

          },
          card2:{
              id:2,
              imageUrl:"https://www.zomato.com/partner_with_us/static/media/ZomatoBook.a71b5381.svg",
              title:"Table Reservations",
              text:"Powerful tool that puts you in control of your table management and reservations...",
              link:"#",
          },
          card3:{
              id:3,
              imageUrl:"https://www.zomato.com/partner_with_us/static/media/ZomatoEvent.c3e1f3a8.svg",
              title:"Events",
              text:"Partner with us for India’s grandest food & entertainment carnival - “Zomaland”...",
              link:"#",
          }
      },
      {
          card1:{
              id:1,
              imageUrl:"https://www.zomato.com/partner_with_us/static/media/FoodAtWork.6cff8d71.svg",
              title:"Food@work",
              text:"Redefines the cafe ordering experience by making it completely digital, cashless...",
              link:"#",

          },
          card2:{
              id:2,
              imageUrl:"https://www.zomato.com/partner_with_us/static/media/Hyperpure.25f37214.svg",
              title:"Hyperpure",
              text:"Supplies fresh and high quality ingredients to restaurant for serving delicious meals...",
              link:"#",
          },
          card3:{
              id:3,
              imageUrl:"https://www.zomato.com/partner_with_us/static/media/ZomatoKitchen.8951ea53.svg",
              title:"Kitchens",
              text:"Entrepreneurs to own and operate cloud kitchens with minimal investments...",
              link:"#",
          }
      }
  ]
  ourpartner = [
      {  
          id:1,
          imageUrl:"https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
          review:"We are immensely satisfied with the marketing push Shupple has provided us. We are now exclusive with Zomato and look forward to more growth in our delivery business through online orders.",
          username:"Pawan Kumar",
          location:"Owner - Chicago BR , Dehradun"
      },
      {  
          id:2,
          imageUrl:"https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
          review:"Zomato delivery fleet saves considerable effort on our part resulting in more fulfilled orders for us. Also, it has now become much easier for customers to discover our brand on Zomato..",
          username:"Tushar",
          location:"Owner - Concept Shawarma , Delhi NCR"
      },
      {  
          id:3,
          imageUrl:"https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
          review:"Earlier, we delivered food orders to our known and repeat customers but now we have been able to create a completely new segment of repeat users - all because of the Zomato app.",
          username:"Jasmeet Singh",
          location:"Owner - Pick and Move, Udaipur"
      }

  ]
  faq = [
      {
          id:1,
          question:"What will Shupple charge me for creating a page on its platform?",
          answer:"Creating a restaurant page on Shupple is free of cost. You can maintain your page by replying to reviews and do a lot more without any charges."
      },
      {
          id:2,
          question:"What will Shupple charge me for creating a page on its platform?",
          answer:"Creating a restaurant page on Shupple is free of cost. You can maintain your page by replying to reviews and do a lot more without any charges."
      },
      {
          id:3,
          question:"What will Shupple charge me for creating a page on its platform?",
          answer:"Creating a restaurant page on Shupple is free of cost. You can maintain your page by replying to reviews and do a lot more without any charges."
      },
  ]
  images=[
      "https://b.zmtcdn.com/merchant-onboarding/2b0ec3e91e16dfcae922f213fdf808f11600934847.png",
      "https://b.zmtcdn.com/merchant-onboarding/a603975bb4aea5941c7c45bb3480be1c1600934866.png",
      "https://b.zmtcdn.com/merchant-onboarding/e83523818f82dd8cefedf4e069424fae1600934891.png"
  ];
  show1:boolean;
  show2:boolean;
  show3:boolean;
 
  showAnswer1(){
      this.show1 = !this.show1;
  }
  showAnswer2(){
      this.show2 = !this.show2;
}
  showAnswer3(){
      this.show3 = !this.show3;
  }
}
