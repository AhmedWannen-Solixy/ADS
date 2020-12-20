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
      immatruculation: new FormControl('', [Validators.required]),
      place_parking: new FormControl('', Validators.required),
      societe_transport: new FormControl('', Validators.required),
      tel_mobile: new FormControl('', Validators.required),
      declarant: new FormControl('oui')
    });
  }
  logForm(){
    console.log(this.exportForm.value);
    
  }

  initMessages() {
    this.validationMessages = {
      immatruculation: [
        { type: 'required', message: 'Ce champ est obligatoire.' },

      ],
      place_parking: [
        { type: 'required', message: 'Ce champ est obligatoire.' },

      ],
      societe_transport: [
        { type: 'required', message: 'Ce champ est obligatoire.' },

      ],
      tel_mobile: [
        { type: 'required', message: 'Ce champ est obligatoire.' },

      ]

    };
  }
}
