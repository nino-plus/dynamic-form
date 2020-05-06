import { Validators } from '@angular/forms';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  form: FormGroup;
  type;
  customForm = {
    male: {
      likeSports: ['', Validators.required],
    },
    female: {
      likeCosme: ['', Validators.required],
    },
  };

  constructor(private fb: FormBuilder, private route: ActivatedRoute) {
    this.route.queryParamMap.subscribe((map) => {
      this.type = map.get('type');
      this.buildForm(this.type);
    });
  }

  buildForm(type) {
    this.form = this.fb.group({
      name: [],
      email: [],
      ...this.customForm[type],
    });
  }
}
