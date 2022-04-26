import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RouterExtensions } from '@nativescript/angular';
import { Page } from '@nativescript/core/ui/page';
import { AuthService } from '~/app/services/auth.service';
import { User } from '../../models/user.model'
import { SweetAlert } from 'nativescript-sweet-alert';
import { ShowError } from 'nativescript-sweet-alert/classes';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private router: RouterExtensions,
    private fb: FormBuilder,
    private page: Page,
    private authService: AuthService,
  ) {
    this.page.actionBarHidden = true;
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  ngOnInit() {
  }

  login(form: any){
    let user: User = {
      email: form.email,
      password: form.password
    }
    this.authService.login(user).then(
      (resp) => {
        this.router.navigate(['/home/books']);
      },
      (err) => {
        const options: ShowError = {
          text: "Oops...",
          contentText: err.toString(),
        }
        SweetAlert.showError(options);
      }
    );
  }

}
