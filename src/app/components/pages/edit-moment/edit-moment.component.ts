
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

import { Moment } from '../../../moments';
import { MomentService } from '../../../services/moment.service';

@Component({
  selector: 'app-edit-moment',
  templateUrl: './edit-moment.component.html',
  styleUrl: './edit-moment.component.css'
})
export class EditMomentComponent implements OnInit {
  moment!: Moment;
  btnText: string = 'Editar';

  constructor(

    private momentService : MomentService,
    private router: Router,
    private route: ActivatedRoute
  ){}

  ngOnInit(): void {
const id = Number(this.route.snapshot.paramMap.get('id'));

this.momentService.getMoment(id).subscribe((item) => {
  this.moment = item.data;
})
  }

}
