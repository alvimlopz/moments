import { Component, OnInit } from '@angular/core';
import { Route, ActivatedRoute } from '@angular/router';

import { MomentService } from '../../../services/moment.service';

import { Moment } from '../../../moments';

import { environment } from '../../../../environment/environment';
import { faTimes, faEdit } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-moment',
  templateUrl: './moment.component.html',
  styleUrl: './moment.component.css'
})
export class MomentComponent implements OnInit {
  moment?: Moment;
  baseApiUrl = environment.baseApiUrl

  faTimes = faTimes
  faEdit = faEdit


  constructor(private momentService: MomentService, private route: ActivatedRoute){}

  ngOnInit(): void {
    const id = Number (this.route.snapshot.paramMap.get('id'));

    this.momentService.getMoment(id).subscribe(item => this.moment = item.data)
  }

}
