import { CommonModule } from '@angular/common';
import { AfterContentInit, AfterViewInit, Component, ContentChild, ElementRef, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.sass'],
  imports: [CarouselModule, CommonModule],
  standalone: true
})
export class CarouselComponent implements AfterViewInit {
  @Input() states:Array<any> = [];
  @Input() customRef: any;


  // @ViewChild('templateRef') templateRef!: TemplateRef<any>;
  teste = ['Item1', 'Item 2', 'Item 3'];

  // @ContentChild('templateRef', {static: false})
  projectedContentRef!: ElementRef;

  ngAfterViewInit() {
    if (this.projectedContentRef) {
      console.log(this.projectedContentRef); // Do whatever you need with the projected content
    }
  }
}
