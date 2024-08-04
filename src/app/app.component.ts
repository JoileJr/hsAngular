import { Component } from '@angular/core';
import { AuthService } from './services/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'crud-angular';
  authenticated: boolean | undefined;

  constructor(public authService: AuthService) {}

  ngOnInit(): void {
    this.authenticated = this.authService.isLoggedIn()
  }

  onLoginSuccess(event: boolean) {
    this.authenticated = event;
    console.log('Login foi realizado com sucesso')
  }
}
