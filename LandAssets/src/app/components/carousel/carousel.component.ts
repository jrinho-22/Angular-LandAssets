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
  @Input() teste2:Array<any> = [];
  @Input() templateRef!: TemplateRef<any>;
  @Input() templateRefName: string= 'Item1'


  // @ViewChild('templateRef') templateRef!: TemplateRef<any>;
  teste = ['Item1', 'Item 2', 'Item 3'];

  // @ContentChild('templateRef', {static: false})
  projectedContentRef!: ElementRef;

  ngAfterViewInit() {
    console.log(this.templateRef, 'refffffffff')
    if (this.projectedContentRef) {
      console.log(this.projectedContentRef); // Do whatever you need with the projected content
    }
  }

  // products: string[] = ["<span>test</span>", "<span>test</span>"];

  // products: any = [
  //   {    
  //     id: '1000',
  //     code: 'f230fh0g3',
  //     name: 'Bamboo Watch',
  //     description: 'Product Description',
  //     image: 'bamboo-watch.jpg',
  //     price: 65,
  //     category: 'Accessories',
  //     quantity: 24,
  //     inventoryStatus: 'INSTOCK',
  //     rating: 5
  //   },
  //   {    
  //     id: '1000',
  //     code: 'f230fh0g3',
  //     name: 'Bamboo Watch',
  //     description: 'Product Description',
  //     image: 'bamboo-watch.jpg',
  //     price: 65,
  //     category: 'Accessories',
  //     quantity: 24,
  //     inventoryStatus: 'INSTOCK',
  //     rating: 5
  //   },
  //   {    
  //     id: '1000',
  //     code: 'f230fh0g3',
  //     name: 'Bamboo Watch',
  //     description: 'Product Description',
  //     image: 'bamboo-watch.jpg',
  //     price: 65,
  //     category: 'Accessories',
  //     quantity: 24,
  //     inventoryStatus: 'INSTOCK',
  //     rating: 5
  //   },
  //   {    
  //     id: '1000',
  //     code: 'f230fh0g3',
  //     name: 'Bamboo Watch',
  //     description: 'Product Description',
  //     image: 'bamboo-watch.jpg',
  //     price: 65,
  //     category: 'Accessories',
  //     quantity: 24,
  //     inventoryStatus: 'INSTOCK',
  //     rating: 5
  //   }
  // ];
}
