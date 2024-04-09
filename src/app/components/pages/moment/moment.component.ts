import { Comment } from './../../../commets';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { faEdit, faTimes } from '@fortawesome/free-solid-svg-icons';

import { environment } from '../../../../environment/environment';
import { Moment } from '../../../moments';
import { MomentService } from '../../../services/moment.service';
import { MessageService } from './../../../services/message.service';
import { CommentService } from '../../../services/comment.service';

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

  commentForm!: FormGroup


  constructor(private momentService: MomentService,
     private route: ActivatedRoute,
      private mensagemService: MessageService,
      private router: Router,
      private commentService: CommentService

      ){}

  ngOnInit(): void {
    const id = Number (this.route.snapshot.paramMap.get('id'));

    this.momentService.getMoment(id).subscribe(item => this.moment = item.data)

    this.commentForm = new FormGroup({
      text: new FormGroup("", [Validators.required]),
      username: new FormGroup("", [Validators.required]),
    })
  }

  get text(){
    return this.commentForm.get("text")!;
  }

  get username(){
    return this.commentForm.get("username")!;
  }

  async removeHandler(id: number){
    await this.momentService.removeMoment(id).subscribe()

    this.mensagemService.add("Momento excluido com sucesso")

    this.router.navigate(['/'])

  }

  async onSubmit(formDirective: FormGroupDirective){

    if (this.commentForm.invalid){
      return
    }

    const data: Comment = this.commentForm.value

    data.momentId = Number(this.moment!.id)

    await this.commentService.createComment(data).subscribe((comment) => this.moment!.comments!.push(comment.data))

    this.mensagemService.add("Comentario adicionado!")

    //limpo o form
    this.commentForm.reset()

    formDirective.resetForm();

  }

}
