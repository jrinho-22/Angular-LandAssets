import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import IState, { IStateEmpty, StateEmpty } from 'src/app/interfaces/IState';
import { EstateModel } from './models/estate.service';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  Validators,
} from '@angular/forms';
import { blob } from 'stream/consumers';

@Component({
  selector: 'app-cadastro-estado',
  templateUrl: './cadastro-estado.component.html',
  styleUrls: ['./cadastro-estado.component.sass'],
  providers: [EstateModel],
})
export class CadastroEstadoComponent {
  stateForm: FormGroup;
  name: any = '';
  imgFile: FormData = new FormData();  

  constructor(
    private formBuilder: FormBuilder,
    private EstateModel: EstateModel
  ) {
    this.stateForm = this.formBuilder.group({
      name: [''],
      size: [''],
      img: [null],
      oceanDistance: [''],
      plotsAvailable: [''],
      population: [''],
      counties: [''],
      paymentTerm: [''],
      averagePricePerSQM: [''],
      averagePartialPaymentPrice: [''],
    });
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    // this.stateForm.patchValue({
    //   map: file
    // });
    if (file) {
      console.log(file, 'fiellel')
      this.readFile(file).then((result: ArrayBuffer | null) => {
        if (result) {
          // Create a Blob from the ArrayBuffer
          const blob = new Blob([new Uint8Array(result)]);
          
          // Set the value of the form control
          this.imgFile.append('file', blob, file.name)
          this.stateForm.patchValue({
            img: file.name
          });
        } else {
          // Handle the case where the file reading result is null
          console.error('Failed to read file');
        }
      });
    }
  }

  private readFile(file: File): Promise<ArrayBuffer | null> {
    return new Promise((resolve, reject) => {
      const reader: FileReader = new FileReader();

      reader.onload = () => {
        console.log(reader.result);
        // const blob = new Blob([reader.result], { type: 'image/png' });
        resolve(reader.result as ArrayBuffer);
      };

      reader.onerror = () => {
        reject(reader.error);
      };

      reader.readAsArrayBuffer(file);
    });
  }

  submit() {
    console.log(this.stateForm.value)
    this.imgFile.append("stateFields", JSON.stringify(this.stateForm.value))
    this.EstateModel.postData(this.imgFile).subscribe();
  }
}
