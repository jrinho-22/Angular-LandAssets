import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Inject,
  Input,
  Output,
  ViewChild,
  ViewContainerRef,
  ViewEncapsulation,
} from '@angular/core';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { modalSizeConverter } from './utils/modalSizeConverter';
import IModalData from 'src/app/interfaces/IModalData';
import { FlatButtonComponent } from '../buttons/flat-button/flat-button.component';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.sass'],
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    FlatButtonComponent,
    FormsModule,
    MatButtonModule,
    MatGridListModule,
  ],
})
export class ModalComponent {

  @Output() actionButtonClicked = new EventEmitter<any>();
  @ViewChild('container', { read: ViewContainerRef })
  container!: ViewContainerRef;
  modalSize!: { height: string; width: string };

  constructor(
    private dialogRef: MatDialogRef<ModalComponent>,
    private cdr: ChangeDetectorRef,
    @Inject(MAT_DIALOG_DATA) public data: IModalData
  ) {}

  ngOnInit() {
    this.modalSize = modalSizeConverter(this.data.size);
  }


  onActionButtonClick() {
    this.data.action()
  }

  onActionButtonClose() {
    this.dialogRef.close();
  }

  ngAfterViewInit(): void {
    // console.log(this.container, 'contttt', typeof this.data.component);
    this.container.createComponent(this.data.component);

    this.cdr.detectChanges();
  }
}
