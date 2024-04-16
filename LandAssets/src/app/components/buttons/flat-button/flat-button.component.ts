import { Component, Input  } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-flat-button',
  templateUrl: './flat-button.component.html',
  styleUrls: ['./flat-button.component.sass'],
  standalone: true,
  imports: [MatButtonModule, MatDividerModule, MatIconModule],
})
export class FlatButtonComponent {
  @Input() text: string = '';
}
