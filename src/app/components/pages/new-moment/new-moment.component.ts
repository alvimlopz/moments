import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-moment',
  templateUrl: './new-moment.component.html',
  styleUrl: './new-moment.component.css'
})
export class NewMomentComponent implements OnInit {

  btnText = 'Compartilhar';

  ngOnInit(): void {
  }

  createHandler(event: any){

  }

}
