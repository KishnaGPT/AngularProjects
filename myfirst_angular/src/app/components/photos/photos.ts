import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-photos',
  imports: [FormsModule],
  templateUrl: './photos.html',
  styleUrl: './photos.css',
})
export class Photos implements OnInit {


  photoList: any[] = [];
  http = inject(HttpClient); //this is dependency injection

  // constructor(private http:HttpClient){

  // }  old method before angular 16


  //an empty object which will contain the new photo
  newPhoto: any = {
    'albumId': 0,
    'id': 0,
    'title': '',
    'url': '',
    'thumbnailUrl': ''
  }

  

  //as we want that the data should get fetch as application start running
  ngOnInit(): void {
    debugger;
    this.getAllPhotos();
  }

  getAllPhotos(){
    //api call to path -> subscribe means catching the data and storing inside a container
    this.http.get("https://jsonplaceholder.typicode.com/photos").subscribe((response:any)=>{
      this.photoList = response;
    })
  }

  onSavePhoto(){
    //post requires object to store in array
    this.http.post("https://jsonplaceholder.typicode.com/photos",this.newPhoto).subscribe((response:any)=>{
        console.log(response);
        alert("Photo Saved Successfully");
        this.getAllPhotos(); //to show the newly added photo also
    })
  }

  onEdit(photo: any){
    this.newPhoto = photo;
  }

  //for updating we need to pass the id of the photo as well along with the updated object
  onUpdatePhoto(){
    this.http.put("https://jsonplaceholder.typicode.com/photos/"+this.newPhoto.id, this.newPhoto).subscribe((response:any)=>{
        console.log(response);
        alert("Photo Updated Successfully");
        this.getAllPhotos();
    })
  }


  onDelete(id:number){

    //ask user confirmation first whether to delete or not

    const isDelete = confirm("Are you sure want to Delete");

    if(isDelete == true){
      this.http.delete("https://jsonplaceholder.typicode.com/photos/"+id).subscribe((response:any)=>{
      console.log(response);
      alert("Photo Id: "+id+" Deleted Successfully!");
      this.getAllPhotos();
    })
    }
    
  }
  

}
