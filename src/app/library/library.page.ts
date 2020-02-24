import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-library',
  templateUrl: './library.page.html',
  styleUrls: ['./library.page.scss'],
})
export class LibraryPage implements OnInit {

  typeSend: string;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  View(type: number){
    if(type == 1){
      this.typeSend = "A";
      this.router.navigate(['../tabs/library/vacine1/list', { 'type': this.typeSend}]);
    }
    else if(type == 2){
      this.typeSend = "B";
      this.router.navigate(['../tabs/library/vacine2/list', { 'type': this.typeSend}]);
    }
    else if(type == 3){
      this.typeSend = "C"
    }
    else if(type == 4){
      this.typeSend = "D"
    }
    else if(type == 5){
      this.typeSend = "E"
    }
  }

}
