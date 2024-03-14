import { Component, Inject, OnInit } from '@angular/core';

import { Moment } from '../../../moments';
import { MessageService } from '../../../services/message.service';
import { MomentService } from '../../../services/moment.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-new-moment',
  templateUrl: './new-moment.component.html',
  styleUrl: './new-moment.component.css'
})
export class NewMomentComponent implements OnInit {

  btnText = 'Compartilhar';

  constructor(private momentService: MomentService, private messageService: MessageService, @Inject(Router) private router: Router){

  }

  ngOnInit(): void {
  }

  async createHandler(moment: Moment){
    //quando for trabalhar com arquivos usar o formData
    const formData = new FormData()

    formData.append("titles", moment.title)
    formData.append("description", moment.description)

    if (moment.image){
      formData.append('image', moment.image);
    }

    await this.momentService.createMoment(formData).subscribe();

    this.messageService.add("Momento adicionado com sucesso")

    this.router.navigate(['/']);


  }

}
