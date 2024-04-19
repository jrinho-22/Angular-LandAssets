import {
  AfterContentInit,
  Component,
  ContentChild,
  ElementRef,
  TemplateRef,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import IState from 'src/app/interfaces/IState';
import { HttpRequestService } from '../../../../services/HttpRequest.service';

@Component({
  selector: 'app-plot-actions',
  templateUrl: './plot-actions.component.html',
  styleUrls: ['./plot-actions.component.sass'],
  providers: [HttpRequestService],
})
export class PlotActionsComponent {
  // @ViewChild('templateRef') item1!: TemplateRef<any>;
  states: IState[] | [] = [];
  constructor(private HttpRequestService: HttpRequestService) {}

  ngOnInit() {
    this.HttpRequestService._resource = 'estate';
    this.getStates()
  }

  getStates() {
    this.HttpRequestService.getData<IState[]>().subscribe((response) => {
      this.states = response
    });
  }

  getImg() {
    this.HttpRequestService.getData().subscribe((response) => {
      // const blobs = response.map((chunk: any) => new Blob([chunk]));
      // const concatenatedBlob = new Blob(blobs);
      // const reader = new FileReader();
      // const base64Image = concatenatedBlob.toString('base64');
      // reader.onload = () => {
        // const base64String = reader.result as string;
        // Use the base64String as needed
        // console.log(base64String, 'vbase64String')
        // this.img = base64String
      // };
      // reader.readAsDataURL(response);
      // this.img = base64Image
    }); 
  }

  teste = ['state1'];
}
