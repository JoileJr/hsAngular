import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {
  loginForm: FormGroup;
  errorMessage: string | undefined;
  @Output() loginSuccess = new EventEmitter<boolean>();
  hide = true;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }


  onSubmit() {
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;
      this.authService.login(username, password).subscribe({
        next: () => {
          this.loginSuccess.emit(true);
          this.router.navigate(['/estabelecimentos']);
        },
        error: (error) => {
          this.errorMessage = 'Erro ao fazer login. Por favor, tente novamente.';
          console.error('Login error:', error);
        }
      });
      console.log('Login realizado com sucesso');
    }
  }

  clickEvent(event: MouseEvent) {
    this.hide = !this.hide;
  }

}
