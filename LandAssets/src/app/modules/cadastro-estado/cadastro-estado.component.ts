import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import IState, { IStateEmpty, StateEmpty } from 'src/app/interfaces/IState';

@Component({
  selector: 'app-cadastro-estado',
  templateUrl: './cadastro-estado.component.html',
  styleUrls: ['./cadastro-estado.component.sass'],
})
export class CadastroEstadoComponent {
  stateForm: IState | IStateEmpty = StateEmpty
  name: any = ''

  handleChange(e: any){
    console.log(e.target.value)
  }
}
