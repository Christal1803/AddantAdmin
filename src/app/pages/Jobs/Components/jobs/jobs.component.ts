import { Component, OnInit } from '@angular/core';
import { JobsService } from './jobs.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {

  Jobs: any;

  constructor(private _JobService: JobsService) { }

  ngOnInit(): void {

    this.getJob();

  }



  getJob() {
    debugger
    this._JobService.getJob()
      .subscribe((response: any) => {
        if (response) {
          this.Jobs = response;
          console.log(this.Jobs);
        } else {
          console.log("hello error")

        }

      });

  }
}
