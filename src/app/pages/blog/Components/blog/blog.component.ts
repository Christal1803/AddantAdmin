import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { debug } from 'console';
import { BlogService } from './blog.service';
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  public first_name: any;
  public last_name: any;
  public email: any;
  public mobile: any;
  public subject: any;
  public message: any;
  public profilePicture: any;
  public coverPicture: any;
  public bannerPicture: any;
  public allPictures = [];

  form = new FormGroup({
    Blog_name: new FormControl('', Validators.required),
    Created_by: new FormControl('', Validators.required),
    Profile_picture: new FormControl('', Validators.required),
    Cover_picture: new FormControl('', Validators.required),
    Banner_picture: new FormControl('', Validators.required),
    Description: new FormControl('', Validators.required),
    Created_on: new FormControl('', Validators.required),

  });

  enquiryForm = new FormGroup({
    first_name: new FormControl('', Validators.required),
    last_name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    mobile: new FormControl('', Validators.required),
    subject: new FormControl('', Validators.required),
    message: new FormControl('', Validators.required),
  })
  constructor(private _BlogService: BlogService) { }

  ngOnInit(): void {

  }
  selectprofilePicture(event: any) {
    debugger
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      console.log(file);
      this.profilePicture = file;
    }
  }

  selectcoverPicture(event: any) {
    debugger
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      console.log(file);
      this.coverPicture = file;
    }
  }

  selectbannerPicture(event: any) {
    debugger
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      console.log(file);
      this.bannerPicture = file;
    }

  }



  saveBlog() {
    debugger
    //this.form.markAllAsTouched();
    const formdata = new FormData();
    formdata.append('file', this.profilePicture)
    //if (this.form.valid) {
      const requestBody = {
        MainHeader: this.form.controls['Blog_name'].value,
        CreatedBy: this.form.controls['Created_by'].value,
        CreatedOn: "2022 - 10 - 25T15: 00: 09.8462111+05: 30",
     ConverImgUrl: "sample string 2",
      CoverImg: "QEA=",
      BannerImgUrl: "sample string 3",
      BannerImg: "QEA=",
      ContentUrl: "sample string 4",
      content: "QEA=",
        ProfilePicUrl: "sample string 5",
        ProfilePic  : "QEA =",
    "IsDeleted": true, 

      }

      this._BlogService.saveBlog(requestBody).subscribe((response: any) => {
        if (response) {
          console.log(response);
        } else {
          console.log("hello error")

        }
      });

    this._BlogService.saveBlogImage(requestBody).subscribe((response: any) => {

      if (response) {
      } else {
        console.log("hello error")

      }
    });
    //}
  }
  
  saveEnquiry() {
    debugger
    //if (this.form.valid) {
      const enquiryBody = {
        //FirstName: this.first_name,
        LastName: this.form.controls['last_name'].value,
        Email: this.form.controls['email'].value,
        Mobile: this.form.controls['mobile'].value,
        Subject: this.form.controls['subject'].value,
        Message: this.form.controls['message'].value,
        //FirstName: "maria",
        //LastName: "",
        //Email: "fathima@addant.com",
        //Mobile: "000",
        //Subject: "Address",
        //Message: "How to reach addant ?",
        //"Status": "Viewed"
        //FirstName: this.first_name,
        //LastName: this.form.controls['last_name'].value,
        //Email: this.email,
        //Mobile: this.mobile,
        //Subject: this.subject,
        //Message: this.message,
      }
      this._BlogService.saveEnquiry(enquiryBody).subscribe((response: any) => {
        if (response) {
          console.log("hello")
        } else {
          //this.toastr.error('Category could not be updated at this time', 'ERROR');
          console.log("hello error")

        }
      });
    }
  }

//}
