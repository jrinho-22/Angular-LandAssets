import { CommonModule } from '@angular/common';
import { Component, ContentChild, EventEmitter, Input, Output, TemplateRef } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { HttpRequestService } from 'src/app/services/HttpRequest.service';
import { SnackbarComponent } from '../snackbar/snackbar.component';
import { SnackbarService } from '../../services/snackbar.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.sass'],
  standalone: true,
  imports: [CommonModule],
})
export class TableComponent<T> {
  @Input() headers: { field: string; label: string }[] = [];
  @Input() collections: Array<any> = [];
  @Input() idField: string = "id";
  @Input() basePath: string = "";
  @Input() model!: HttpRequestService<T>;
  @Input() defaultActions: boolean = true;
  @ContentChild('actions') actionsRef!: TemplateRef<any>;

  ngOnInit() {
    console.log(this.collections)
  }

  constructor(private router: Router, private _snackBar: MatSnackBar, private snackbarService: SnackbarService) { }

  visualizar(collection: any) {
    this.router.navigate([`${this.basePath}/vizualizar/${collection[this.idField]}`]);
  }

  getField(collection: any, field: any) {
    const separatedStrings = field.split(".");
    if (separatedStrings.length > 1) {
      return collection[separatedStrings[0]][separatedStrings[1]]
    }
    return collection[field]
  }

  editar(collection: any) {
    this.router.navigate([`${this.basePath}/editar/${collection[this.idField]}`]);
  }


  reload() {
    setTimeout(() => {
      window.location.reload()
    }, 2000);
  }

  excluir(collection: any) {
    this.model.deleteData(collection[this.idField]).subscribe(
      {
        complete: () => {
          this.snackbarService.openSnack({ panel: 'success', message: 'Item excluido com SUCESSO' });
          this.reload()
        }
      }
    )
  }
}
