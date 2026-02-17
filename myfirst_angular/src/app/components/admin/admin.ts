import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  imports: [],
  templateUrl: './admin.html',
  styleUrl: './admin.css',
})
export class Admin implements OnInit, AfterViewInit, OnDestroy {

  constructor(){
    console.log("Constructor Executed!"); 
    //constructor used for property initialization
  }

  ngOnInit(): void {
    console.log("OnInit Executed!");
    //ngOnInit used for data fetching and heavy operations and API Calls 
  }

  ngAfterViewInit(): void{
    console.log("AfterViewInit Executed!")
  }

  ngOnDestroy(): void{
    console.log("OnDestroy Executed!");
    
  }

}
