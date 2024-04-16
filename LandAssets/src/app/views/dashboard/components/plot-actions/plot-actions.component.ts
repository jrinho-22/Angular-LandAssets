import { AfterContentInit, Component, ContentChild, ElementRef, TemplateRef, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-plot-actions',
  templateUrl: './plot-actions.component.html',
  styleUrls: ['./plot-actions.component.sass'],
})
export class PlotActionsComponent {
  // @ViewChild('templateRef') item1!: TemplateRef<any>;

  teste = ['state1'];
  testes = [
    { url: 'assets/images/estateMap.png', name: 'state1' },
    { url: 'assets/images/estateMap.png', name: 'estate 2' },
    { url: 'assets/images/estateMap.png', name: 'estate 3' },
  ];
}
