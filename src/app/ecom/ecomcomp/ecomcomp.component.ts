import { RestApiServiceService } from './../../services/rest-api-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ecomcomp',
  templateUrl: './ecomcomp.component.html',
  styleUrls: ['./ecomcomp.component.css']
})
export class EcomcompComponent implements OnInit {

  constructor(private userService: RestApiServiceService) { }

  allProducts:any

  ngOnInit() {
    this.getApiData()
  }

  getApiData() {
    this.userService.getProduct().subscribe((data) => {
      console.log(data)
      this.allProducts=data
      console.log(this.allProducts)

    })

  }
}
