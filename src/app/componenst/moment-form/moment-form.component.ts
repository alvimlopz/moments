import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-moment-form',
  templateUrl: './moment-form.component.html',
  styleUrl: './moment-form.component.css'
})
export class MomentFormComponent implements OnInit{

  @Input() btnText!: string;

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
