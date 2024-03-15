import { Component, OnInit } from '@angular/core';

import { MomentService } from '../../../services/moment.service';
import { Moment } from '../../../moments';
import { environment } from '../../../../environment/environment';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  allMoments: Moment[] = []
  moment: Moment[] = []
  baseApiUrl = environment.baseApiUrl

  constructor(){}

  ngOnInit(): void {
  }

}
