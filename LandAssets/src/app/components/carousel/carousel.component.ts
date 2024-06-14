import { CommonModule } from '@angular/common';
import { AfterContentInit, AfterViewInit, Component, ContentChild, ElementRef, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { CarouselModule, CarouselPageEvent } from 'primeng/carousel';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.sass'],
  imports: [CarouselModule, CommonModule],
  standalone: true,
  encapsulation: ViewEncapsulation.None,
})
export class CarouselComponent {
  @Input() states:Array<any> = [];
  @Input() customRef: any;
  @Input() activeStateIndex: number = 0;
  @Output() pageEvent = new EventEmitter<number>();

  // @ViewChild('templateRef') templateRef!: TemplateRef<any>;
  teste = ['Item1', 'Item 2', 'Item 3'];

  // @ContentChild('templateRef', {static: false})
  projectedContentRef!: ElementRef;

  handlePageChange(e: CarouselPageEvent) {
    this.pageEvent.emit(e.page);
  }

  ngAfterViewInit() {
    if (this.projectedContentRef) {
      console.log(this.projectedContentRef); // Do whatever you need with the projected content
    }
  }
}
