import { Component,OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  showDialog = false;
  statement:string;
  alertText:string;

  constructor() { }
  ngOnInit(){
    this.statement = "Please, click the button to show the modal"
  }
  showCustomDialog(){
    this.alertText = 'Are you sure you want this custom model?';
    this.showDialog = true;
  }

  executeYes(){
      this.showDialog = false;
      this.statement = "YES"

  }

  executeNo(){
    this.showDialog = false;
    this.statement = "NO"
  }
}
