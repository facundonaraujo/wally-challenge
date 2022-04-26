import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RouterExtensions } from '@nativescript/angular';
import { Page } from '@nativescript/core/ui/page';
import { User } from '~/app/models/user.model';
import { AuthService } from '~/app/services/auth.service';
import { SweetAlert } from 'nativescript-sweet-alert';
import { ShowError } from 'nativescript-sweet-alert/classes';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  
  constructor(
    private router: RouterExtensions,
    private fb: FormBuilder,
    private page: Page,
    private authService: AuthService,
  ) {
    this.page.actionBarHidden = true;
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  ngOnInit() {
  }

  register(form: any){
    let user: User = {
      name: form.name,
      email: form.email,
      password: form.password
    }
    this.authService.register(user).then(
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
