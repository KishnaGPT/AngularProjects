import { Component } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  imports: [],
  templateUrl: './property-binding.html',
  styleUrl: './property-binding.css',
})
export class PropertyBinding {

    customerName : string = "Tony Stark";
    orderId : string = "ORD-10021";
    productName: string = "Angular Book";
    price: number = 4999;
    quantity: number = 1;
    isPremiumCustomer: boolean = true;
    isPaymentDone: boolean = false;

    productImageUrl : string = "https://placehold.co/180x120/png?text=Angular+Course";
    invoiceUrl : string = "https://example.com/invoice/ORD-10021.pdf";

    getOrderTooltip() : string{
      return `Order: ${this.orderId} | Customer: ${this.customerName}`;
    }

    getFinalAmount() : number{
      const total = this.price * this.quantity;
      const discount = this.isPremiumCustomer ? total * 0.3 : 0;
      return total - discount; 
    }

    getPaymentLabel() : string{
      return this.isPaymentDone ? 'Payment Sucessful' : 'Payment Pending';
    }

    //return color based on the payment status
    getStatusColor() : string{
      return this.isPaymentDone ? 'green' : 'red';
    }

}
