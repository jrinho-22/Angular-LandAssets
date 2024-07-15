import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-icon-button',
  templateUrl: './icon-button.component.html',
  styleUrls: ['./icon-button.component.sass'],
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [CommonModule]
})
export class IconButtonComponent {
  @Input() icon: string = '';
  @Input() class: string | undefined;
  @Input() disabled: boolean = false
  @Output() buttonClick: EventEmitter<void> = new EventEmitter<void>();

  onClick(event: MouseEvent): void {
    if (!this.disabled) {
      this.buttonClick.emit();
    }
    event.stopPropagation(); // Stop propagation if disabled
  }
}
