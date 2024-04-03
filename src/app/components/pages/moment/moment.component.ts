import { MessageService } from './../../../services/message.service';
import { Component, OnInit } from '@angular/core';
import { Route, ActivatedRoute, Router } from '@angular/router';

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

  faTimes = faTimes;
  faEdit = faEdit;


  constructor(private momentService: MomentService,
     private route: ActivatedRoute,
      private mensagemService: MessageService,
      private router: Router

      ){}

  ngOnInit(): void {
    const id = Number (this.route.snapshot.paramMap.get('id'));

    this.momentService.getMoment(id).subscribe(item => this.moment = item.data)
  }

  async removeHandler(id: number){
    await this.momentService.removeMoment(id).subscribe()

    this.mensagemService.add("Momento excluido com sucesso")

    this.router.navigate(['/'])

  }

}
