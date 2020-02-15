import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-btn-component',
  templateUrl: './btn-component.component.html',
  styleUrls: ['./btn-component.component.css']
})

export class BtnComponentComponent implements OnInit {
  
  @Output() public delComp = new EventEmitter<String>();
  constructor() { }

  ngOnInit() {
  }

  onDelComp(temp){
  	this.delComp.emit(temp);
  }

}
