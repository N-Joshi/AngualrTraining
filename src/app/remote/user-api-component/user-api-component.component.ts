import { RestApiServiceService } from './../../services/rest-api-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-api-component',
  templateUrl: './user-api-component.component.html',
  styleUrls: ['./user-api-component.component.css']
})
export class UserApiComponentComponent implements OnInit {

  constructor(private userService: RestApiServiceService) { }

  allUser: any

  ngOnInit() {
    this.getApiData()
  }

  getApiData() {
    this.userService.getRemoteUser().subscribe((data) => {
      console.log(data)
      this.allUser = data
      console.log(this.allUser)
    })
  }

  user = {
    "name": "Naman",
    "email": "namyjoshi08@gmail.com",
    "address": {
      "geo": {
        "lat": "88.88",
        "lng": "24.45"
      }
    }
  }

  postUser() {
    this.userService.createUser(this.user).subscribe((response) => {
      console.log(response);
      this.userService.getRemoteUser().subscribe((data) => {
        this.allUser = data

      })
      //this.allUser=response;
    })
  }

  Delete(id) {
    this.userService.deleteUser(id).subscribe((response) => {
      this.userService.getRemoteUser().subscribe((data) => {
        this.allUser = data
      })

    })
  }
}
