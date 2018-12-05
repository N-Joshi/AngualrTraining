import { RestApiServiceService } from './../../services/rest-api-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {
  myForm:any
  constructor(private userService:RestApiServiceService) { }

  ngOnInit() {
  }

  submitForm(user){
    console.log(user)
    this.userService.createUser(user).subscribe((response => console.log(response)))
  }

}
