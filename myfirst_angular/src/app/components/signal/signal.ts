import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-signal',
  imports: [],
  templateUrl: './signal.html',
  styleUrl: './signal.css',
})
export class Signal {

  courseName: string = "Angular ";

  angularVersion = signal("20");

  courseDuration = signal<string>('3 Months');

  cityList = signal<string[]>(['Pune', 'Mumbai', 'Nashik']);

  studentObj = signal<any>({
    Name: 'Krishna',
    City: 'Mumbai'
  });

  newObj = signal<any>({
    name: 'ABC',
    class: '10th'
  })

  changeDuration() {

    this.courseName = ".NET Core "
    this.courseDuration.set('5 Months');

  }

  addCity(cityName: string) {
    this.cityList.update((old: string[]) => [...old, cityName])
  }

  changeCity() {


    // this.studentObj.set({
    // Name: 'Krishna',
    // City: 'Thane'

    this.newObj.update((old: any) => ({ ...old, name: 'XYZ' }))

    this.studentObj.update((oldObj: any) => ({ ...oldObj, City: 'Thane' }))

  }

}
