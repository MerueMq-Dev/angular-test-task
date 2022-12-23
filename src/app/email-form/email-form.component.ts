import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRouteSnapshot, Router } from '@angular/router';

@Component({
  selector: 'app-email-form',
  templateUrl: './email-form.component.html',
  styleUrls: ['./email-form.component.css']
})
export class EmailFormComponent {
  constructor(private router: Router) {
  }

  testForm = new FormGroup({
    email: new FormControl('mail@mail.ru', [Validators.email]),
  })

  onClick() {
    this.router.navigate(['/actualize']);
  }
}
