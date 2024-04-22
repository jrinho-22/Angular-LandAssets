import {Component, EventEmitter, Input, Output, SimpleChanges} from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import IState from 'src/app/interfaces/IState';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.sass'],
  standalone: true,
  imports: [CommonModule, FormsModule, MatFormFieldModule, MatSelectModule, MatInputModule],
})

export class SelectComponent<T> {
  @Input() placeholder: string = "Select a option"
  @Input() disabled: boolean = false
  @Input() value: string = 'value'
  @Input() label: string = 'label'
  @Input() selectedState: IState | undefined = undefined
  @Input() options: T[] = [] 

  @Output() dataEvent = new EventEmitter();

  selectedValue: string = '';

  sendData() {
    this.dataEvent.emit(this.selectedValue);
  }

  ngOnChanges(changes: SimpleChanges) {
    this.selectedValue = changes['selectedState'].currentValue.name
  }
}



// import {Component, forwardRef, Input} from '@angular/core';
// import {MatInputModule} from '@angular/material/input';
// import {MatSelectModule} from '@angular/material/select';
// import {MatFormFieldModule} from '@angular/material/form-field';
// import {ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR} from '@angular/forms';
// import { CommonModule } from '@angular/common';

// @Component({
//   selector: 'app-select',
//   templateUrl: './select.component.html',
//   styleUrls: ['./select.component.sass'],
//   standalone: true,
//   providers: [
//     {
//       provide: NG_VALUE_ACCESSOR,
//       useExisting: forwardRef(() => SelectComponent),
//       multi: true
//     }
//   ],
//   imports: [CommonModule, FormsModule, MatFormFieldModule, MatSelectModule, MatInputModule],
// })
// export class SelectComponent implements ControlValueAccessor{
//   @Input() placeholder: string = ""
//   @Input() disabled: boolean = false
//   selectedValue: string = '';
//   selectedCar: string =  '';

//   foods: any = [
//     {value: 'steak-0', viewValue: 'Steak'},
//     {value: 'pizza-1', viewValue: 'Pizza'},
//     {value: 'tacos-2', viewValue: 'Tacos'},
//   ];

//   cars: any = [
//     {value: 'volvo', viewValue: 'Volvo'},
//     {value: 'saab', viewValue: 'Saab'},
//     {value: 'mercedes', viewValue: 'Mercedes'},
//   ];

//   value: string = '';

//   onChange: any = () => {};
//   onTouch: any = () => {};

//   writeValue(value: any): void {
//     this.value = value;
//   }

//   registerOnChange(fn: any): void {
//     this.onChange = fn;
//   }

//   registerOnTouched(fn: any): void {
//     this.onTouch = fn;
//   }

//   setDisabledState(isDisabled: boolean): void {
//     this.disabled = isDisabled;
//   }
// }