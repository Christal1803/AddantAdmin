import { Component, OnInit } from '@angular/core';
import { EnquiryService } from './enquiry.service';

@Component({
  selector: 'app-enquiry',
  templateUrl: './enquiry.component.html',
  styleUrls: ['./enquiry.component.css']
})
export class EnquiryComponent implements OnInit {
  Contacts: any;





  constructor(private _EnquiryService: EnquiryService) { }

  ngOnInit(): void {

    this.getEnquiry();


  }
  getEnquiry() {
    this._EnquiryService.getEnquiry()
      .subscribe((response: any) => {
        if (response) {
          this.Contacts = response;
          console.log(this.Contacts);
        } else {
          console.log("hello error")

        }

      });
  }





}
