import { RestApiServiceService } from './../../services/rest-api-service.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  activePath: any
    selectedUser:any
  constructor(private active: ActivatedRoute, private userService: RestApiServiceService) { }

  ngOnInit() {
    this.activePath = this.active.snapshot.paramMap.get("id")
    this.getUser(this.activePath)

  }
getUser(id) {
    this.userService.detailUser(id).subscribe((response) => {
      this.selectedUser=response
    })
  }

}

