import {Component, Input} from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-textfield',
  templateUrl: './textfield.component.html',
  styleUrls: ['./textfield.component.sass'],
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule],
})
export class TextfieldComponent {
  @Input() placeholder: string = ""
  @Input() disabled: boolean = false
}
