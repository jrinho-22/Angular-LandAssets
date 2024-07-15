import { ChangeDetectorRef, Component, Inject, InjectionToken, ViewEncapsulation } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MAT_SNACK_BAR_DATA, MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { BehaviorSubject } from 'rxjs';
import ISnackBarData from 'src/app/interfaces/ISnackBarData';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.sass'],
  encapsulation: ViewEncapsulation.None,
})
export class SnackbarComponent {
  values!: ISnackBarData
  constructor(
    @Inject(MAT_SNACK_BAR_DATA)
    public data: ISnackBarData,
  ) {}

  ngOnInit() {
    this.values = this.data 
  }
}
