import { CommonModule } from '@angular/common';
import { Component, Input, Optional, ViewEncapsulation } from '@angular/core';
import { ControlContainer, ReactiveFormsModule } from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';

@Component({
  selector: 'app-form-radio',
  templateUrl: './form-radio.component.html',
  styleUrls: ['./form-radio.component.sass'],
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [MatRadioModule, CommonModule, ReactiveFormsModule]
})
export class FormRadioComponent {
  @Input() collections: {value: any, label: string}[] = []
  @Input() formControlName!: string

  constructor(@Optional() public controlContainer: ControlContainer){}
}
