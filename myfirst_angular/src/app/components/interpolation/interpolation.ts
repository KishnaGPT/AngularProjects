import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  imports: [],
  templateUrl: './interpolation.html',
  styleUrl: './interpolation.css',
})
export class Interpolation {

  customerName : string = "Tony Stark";
  orderId : string = "ORD-10021";
  productName: string = "Angular Book";
  price: number = 4999;
  quantity: number = 1;
  isPremiumCustomer: boolean = true;
  isPaymentDone: boolean = false;


  getFinalAmount(): number{
    const total = this.price * this.quantity;
    const discount = this.isPremiumCustomer ? total * 0.3 : 0;
    return total - discount;
  }

  getOrderStatusMessage(): string{ 
    return this.isPaymentDone ? `Payment received for the order ${this.orderId}. Your order is confirmed 🤗` : `Payment pending for the order ${this.orderId}. Please complete payment 🙂`;
  }
}
