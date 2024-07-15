import { Component } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { AuthService } from './services/auth.service';
import { BlobOptions } from 'buffer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  authenticated!: 'conceded' | 'denied' | null;
  loading: boolean = true

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.authenticated$.subscribe((v) => {
      this.authenticated = v.authenticated;
      // this.loading = false
    });
  }
}
