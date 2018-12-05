import { FormGroup,FormControl,Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-model-forms',
  templateUrl: './model-forms.component.html',
  styleUrls: ['./model-forms.component.css']
})
export class ModelFormsComponent implements OnInit {

modelForm:any

  constructor() { }

  ngOnInit() {
    this.modelForm= new FormGroup({
                                  name: new FormControl("",
                                  Validators.compose([Validators.minLength(3),Validators.pattern('^[a-zA-Z]+$')])),
                                  email:new FormControl("",this.checkEmailType),
                                  hobby:new FormControl("")
    })
  }

checkEmailType(control){
  if(control.value.length<4){
    return {'email':'true'}
  }
}

    modelFormUser(user){
      console.log(user)
      
    }
}
