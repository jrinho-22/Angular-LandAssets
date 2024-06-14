import { Component, Input } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { notDeepEqual } from 'assert';
import { switchMap } from 'rxjs';
import { HttpRequestService } from 'src/app/services/HttpRequest.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.sass'],
  standalone: true,
  imports: [ReactiveFormsModule],
})
export class FormComponent<T> {
  @Input() formGroup!: FormGroup;
  formType!: 'cadastro' | 'edicao' | 'view';
  @Input() model!: HttpRequestService<T>;
  @Input() parent: any;
  paramId!: number;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.checkFormType();
    this.getCollection();
  }

  checkFormType() {
    const currentRoute = this.activatedRoute.routeConfig?.path;
    if (currentRoute?.includes('editar')) this.formType = 'edicao';
    else if (currentRoute?.includes('vizualizar')) {
      this.formType = 'view';
      this.formGroup.disable();
    } else this.formType = 'cadastro';
  }

  getCollection() {
    if (this.formType == 'edicao' || this.formType == 'view') {
      this.activatedRoute.params
        .pipe(
          switchMap((params) => {
            this.paramId = params['id'];
            return this.model.getData(params['id']);
          })
        )
        .subscribe((data: any) => this.populate(data));
    }
  }

  populate(data: any) {
    if (typeof this.parent.beforeLoad == 'function') {
      this.parent.beforeLoad(data);
    }
    this.formGroup.patchValue(data);
  }

  submit() {
    const sendData = (data: FormGroup | FormData) => {
      if (this.formType === 'edicao') {
        return this.model.putData(this.paramId, data).subscribe();
      } else {
        return this.model.postData(data).subscribe();
      }
    };

    if (typeof this.parent.beforePost === 'function') {
      const postRecord: FormGroup | FormData = this.parent.beforePost(this.formGroup);
      sendData(postRecord);
    } else {
      sendData(this.formGroup);
    }
  }
}
