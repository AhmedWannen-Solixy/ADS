import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-export-zone',
  templateUrl: './export-zone.page.html',
  styleUrls: ['./export-zone.page.scss'],
})
export class ExportZonePage implements OnInit {
  validationMessages: any;
  exportForm: FormGroup;
  constructor(public translate: TranslateService) { }

  ngOnInit() {
    this.initMessages();
    const emailPattern = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

    this.exportForm = new FormGroup({
      lastname: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(25)]),
      firstname: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(25)]),
      email: new FormControl('', [Validators.required, Validators.pattern(emailPattern)]),
      profession: new FormControl('', Validators.required),
      tel_portable: new FormControl('', Validators.required),
      tel_fixe: new FormControl('', Validators.required),
      
    });
  }


  initMessages() {
    this.validationMessages = {
      firstname: [
        { type: 'required', message: 'Ce champ est obligatoire.' },
        { type: 'minlength', message: 'Veuillez fournir au moins trois caractères.' },
        { type: 'maxlength', message: 'Veuillez fournir au plus 25 caractères.' }
      ],
      lastname: [
        { type: 'required', message: 'Ce champ est obligatoire.' },
        { type: 'minlength', message: 'Veuillez fournir au moins trois caractères.' },
        { type: 'maxlength', message: 'Veuillez fournir au plus 25 caractères.' }
      ],
      profession: [
        { type: 'required', message: 'Ce champ est obligatoire.' },

      ],
      email: [
        { type: 'required', message: 'Ce champ est obligatoire.' },
        { type: 'pattern', message: 'Veuillez entrer une adresse e-mail valide' }
      ]

    };
  }
}
