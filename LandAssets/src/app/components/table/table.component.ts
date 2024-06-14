import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.sass'],
  standalone: true,
  imports: [CommonModule],
})
export class TableComponent {
  @Input() headers: { field: string; label: string }[] = [];
  @Input() collections: Array<any> = [];
  @Input() idField: string = "id";
  @Input() basePath: string = "";
  
  constructor(private router: Router) {}

  visualizar(collection: any) {
    this.router.navigate([`${this.basePath}/vizualizar/${collection[this.idField]}`]);
  }

  editar(collection: any) {
    this.router.navigate([`${this.basePath}/editar/${collection[this.idField]}`]);
  }
}
