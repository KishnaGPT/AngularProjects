import { Component } from '@angular/core';




@Component({
  selector: 'app-event-binding',
  imports: [],
  templateUrl: './events.html',
  styleUrl: './event-binding.css',
})
export class EventBinding {

    // customerName : string = "Tony Stark";
    // orderId : string = "ORD-10021";
    // productName: string = "Angular Book";

    // price: number = 4999;
    
    // quantity: number = 1;
    // couponCode: string = '';
    // shippingOption: string = 'Standard';

    // isPremiumCustomer: boolean = true;
    // isPaymentDone: boolean = false;

    // stockLeft: number = 3;
    // deliveryProgressPercent: number = 35;

    // uiMessage: string = '';

    // getPaymentLabel(): string{
    //   return this.isPaymentDone ? 'Paid' : 'Pending';
    // }

    // getMembershipLabel(): string{
    //   return this.isPremiumCustomer ? 'Premium' : 'Regular';
    // }

    // getFinalPayable(): number{
    //   const total = this.price * this.quantity;
    //   const discount = this.isPremiumCustomer ? 0.3 : 0;
    //   return total - discount;
    // }

    // increaseQuantity(): void{
    //   if(this.quantity < 10){
    //     this.quantity++;
    //     this.uiMessage = `Quantitiy updated to ${this.quantity}`;
    //   }
    // }

    // decreaseQuantity(): void{
    //   if(this.quantity > 1)
        
    //     this.quantity--;
    //     this.uiMessage = `Quantitiy updated to ${this.quantity}`;
    // }
    // // We are not using ngModel yet. So we manually read the input from $event.
    // onQuantityInput(event: any): void{
    //   const value = (event.target as HTMLInputElement).value;

    //   const parsed = Number(value);

    //   if(!Number.isNaN(parsed) && parsed >=1 && parsed <=10){
    //     this.quantity = parsed;
    //     this.uiMessage = `Quantitiy set to ${this.quantity}`;
    //   }
    //   else{
    //     this.uiMessage = 'Quantity must be between 1 and 10';
    //   }
    // }

    // //store latest typed value
    // onCouponInput(event: any): void{
    //   this.couponCode = (event.target as HTMLInputElement).value;
    // }

    // //simulation of coupon code
    // applyCoupon(): void{

    //   const code = this.couponCode.trim().toUpperCase();
    //   if(code===''){
    //     this.uiMessage = 'Please enter a coupon code';
    //   }

    //   //static coupon code SAVE10
    //   if(code === 'SAVE10'){
    //     this.uiMessage = 'Coupon Applied: SAVE10';
    //   }
    //   else{
    //     this.uiMessage = 'Invalid Coupon Code';
    //   }
    // }

    // onShippingChange(event: any): void{
    //   this.shippingOption = (event.target as HTMLSelectElement).value;
    //   this.uiMessage = `Shipping set to ${this.shippingOption}`;
    // }

    // payNow():void{
    //   this.isPaymentDone = true;
    //   this.uiMessage = `Payment received for ${this.orderId}.`;
    //   this.deliveryProgressPercent = 60;
    // }

    // placeOrder(event: any):void{
    //   event.preventDefault(); //prevent form submission
    //   if(!this.isPaymentDone){
    //     this.uiMessage = "Please complete tour payment first";
    //     return;
    //   }

    //   this.uiMessage = `Order placed successfully for Order Id: ${this.orderId}`;
    //   this.deliveryProgressPercent = 100;
    // }

    // toggleMembership(): void{
    //   this.isPremiumCustomer = !this.isPremiumCustomer;
    //   this.uiMessage = `Membership status changed to ${this.getMembershipLabel()}`;
    // }
    



    liveValue: string ='';
    changedValue: string='';
    lastKey: string='';
    focusStatus: string='Not Focused';
    clickMessage: string='';

    onInput(event: Event){
      this.liveValue = (event.target as HTMLInputElement).value;
    }

    onInputOne(event: Event){
      const input = event.target as HTMLInputElement;
      this.liveValue = input.value;
    }

    onChange(event: Event){
      const change = event.target as HTMLInputElement;
      this.changedValue = change.value;
    }

    onKeyUp(event: Event){
      const key= event.target as HTMLInputElement;
      this.lastKey = key.value;
    }

    onFocus(){
      this.focusStatus = 'Input Is Focused';
    }

    onBlur(){
      this.focusStatus = 'Input Lost Focus';
    }

    onClick(){
      this.clickMessage = 'Button Clicked';
    }



    textValue = '';
    passwordLength = 0;
    emailValue = '';
    numberValue: number | null = null;
    isChecked = false;
    selectedGender = '';
    fileName = '';
    rangeValue = 0;
    selectedDate = '';
    selectedColor = '#000000';
    selectedCity = '';
    textareaValue = '';


    onTextInput(event: Event){
      const input = event.target as HTMLInputElement;
      this.textValue = input.value;
    }

    onPasswordInput(event: Event){
      const password = event.target as HTMLInputElement;
      this.passwordLength = password.value.length;
    }

    onEmailBlur(event: Event){
      const email = event.target as HTMLInputElement;
      this.emailValue = email.value
    }

    onNumberChange(event: Event){
      const num = event.target as HTMLInputElement;
      this.numberValue = Number(num.value);
    }

    onCheckboxChange(event: Event){
      const checkbox = event.target as HTMLInputElement;
      this.isChecked = checkbox.checked;
    }

    onRadioChange(event: Event){
      const radio = event.target as HTMLInputElement;
      this.selectedGender = radio.value;
    }

    onFileChange(event: Event){
      const file = event.target as HTMLInputElement;
      if(file.files && file.files.length > 0){
        this.fileName = file.files[0].name;
      }
    }

    onRangeChange(event: Event){
      const range = event.target as HTMLInputElement;
      this.rangeValue = Number(range.value);
    }

    onDateChange(event: Event){
      const date = event.target as HTMLInputElement;
      this.selectedDate = date.value;
    }

    onColorChange(event: Event){
      const color = event.target as HTMLSelectElement;
      this.selectedColor = color.value;
    }

    onSelectChange(event: Event){
      const select = event.target as HTMLInputElement;
      this.selectedCity = select.value;
    }

    onTextareaInput(event: Event){
      const textarea = event.target as HTMLTextAreaElement;
      this.textareaValue = textarea.value;
    }



}
