import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.less']
})
export class HomePageComponent implements OnInit {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      username: ['', 
        [
          Validators.required, 
          Validators.maxLength(20), 
          Validators.minLength(4)
        ]
      ]
    })
  }

  complete() {
    if (this.form.get('username').valid) {
      this.userService.set(this.form.get('username').value);
      this.router.navigateByUrl('dashboard')
    }
  }
}
