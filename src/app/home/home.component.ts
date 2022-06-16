import { Component, OnInit } from '@angular/core';
import { DataServiceService } from'../data-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 posts:any;
  constructor( private DataServiceService:DataServiceService) { }

  ngOnInit(): void {
    this.DataServiceService.getPost().subscribe(response=>this.posts=(response));
  }

}
