import { Component, ElementRef, ViewChild } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import IState, { IStateEmpty, StateEmpty } from 'src/app/interfaces/IState';
import { EstateModel } from '../models/estate.service';
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
  @ViewChild('fileInput') fileInput!: any; 

  constructor(
    private formBuilder: FormBuilder,
    protected EstateModel: EstateModel
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
    if (file) {
      this.readFile(file).then((result: ArrayBuffer | null) => {
        if (result) {
          const blob = new Blob([new Uint8Array(result)]);
          
          this.imgFile.set('file', blob, file.name)
          this.stateForm.patchValue({
            img: file.name
          });
        } else {
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

  beforePost(data: any){
    this.imgFile.set("stateFields", JSON.stringify(data.value))
    return this.imgFile
  }

  submit() {
    const sendData = (data: FormGroup | FormData): any => {
        return this.EstateModel.putData(2, data).subscribe();
      }
  

        sendData(this.stateForm);
  }

  beforeLoad(data: any){
    const blob = this.createBlobFile(data.map)
    let file = new File([blob], data.imgName);
    this.imgFile.append('file', blob, file.name)
    this.stateForm.patchValue({
      img: file.name
    });
    
    let container = new DataTransfer(); 
    container.items.add(file);
    const fileInputElement = this.fileInput.nativeElement as HTMLInputElement;
    fileInputElement.files = container.files;
  }

  createBlobFile(base64Image: string) {
    const byteCharacters = atob(base64Image);
    const byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);

    return new Blob([byteArray]);
  }
}
