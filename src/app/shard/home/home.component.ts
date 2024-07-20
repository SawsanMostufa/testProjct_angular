import { IfStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  selectedValue: any;
  nameValue!: string;
  phoneNumberValue!: string;
  emailValue!: string;
  myData: any[] = [
    {
      id:'1',
      nameValue: 'sawsan',
      emailValue: 'sawsanmostufa555@gmail.com',
      phoneNumberValue: '01122697812',
    },
  ];
  idList: number[] = [1];
  countID:number=1;
  idSelected: any;
  constructor() {}
  ngOnInit() {}

  save() {
    if(!this.idSelected){
    this.countID=this.countID+1;
    this.myData.push({
      id:this.countID,
      nameValue: this.nameValue,
      emailValue: this.emailValue,
      phoneNumberValue: this.phoneNumberValue,
    });

     this.idList.push(this.countID)
  this.reset();
    }else{
  let item= this.myData.find(x=>x.id== this.idSelected);
  let index= this.myData.findIndex(x=>x.id== this.idSelected);
  this.myData.splice(index,1,{
   id:this.countID,
   nameValue: this.nameValue,
   emailValue: this.emailValue,
   phoneNumberValue: this.phoneNumberValue,
 })
 this.reset();
}
  }
  changeData(e:any){
    this.idSelected=e.target.value;
  }
  reset(){
    this.nameValue='';
    this.emailValue='';
    this.phoneNumberValue='';
  }
}
