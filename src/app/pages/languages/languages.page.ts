import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.page.html',
  styleUrls: ['./languages.page.scss'],
})
export class LanguagesPage implements OnInit {

  constructor( 
    public translate: TranslateService,
    private router:Router) { }

  ngOnInit() {
  }


  pickFlag(flag:string){

    this.translate.setDefaultLang(flag);
    
      switch(flag) { 
        case "fr": { 
          localStorage.setItem('lng',  flag);
       //   this.translate.setDefaultLang('fr');
          console.log(flag);
           break; 
        } 
        case "en": { 
          localStorage.setItem('lng',  flag);
          console.log(flag)
           break; 
        }
        case "gr": { 
          localStorage.setItem('lng',  flag);
          console.log(flag)
           break; 
        } 
        case "sp": { 
          localStorage.setItem('lng',  flag);
          console.log(flag)
           break; 
        }  case "lit": { 
          localStorage.setItem('lng',  flag);
          console.log(flag)
           break; 
        } 
        case "hun": { 
          localStorage.setItem('lng',  flag);
          console.log(flag)
           break; 
        }  case "rom": { 
          localStorage.setItem('lng',  flag);
          console.log(flag)
           break; 
        } 
        case "cz": { 
          localStorage.setItem('lng',  flag);
          console.log(flag)
           break; 
        }  case "bul": { 
          localStorage.setItem('lng',  flag);
          console.log(flag)
           break; 
        } 
        case "tr": { 
          localStorage.setItem('lng',  flag);
          console.log(flag)
           break; 
        }
        case "rs": { 
          localStorage.setItem('lng',  flag);
          console.log(flag)
           break; 
        } case "it": { 
          localStorage.setItem('lng', flag);
          console.log(flag)
           break; 
        }
        case "pol": { 
          localStorage.setItem('lng',  flag);
          console.log(flag)
           break; 
        }


      }

      this.router.navigateByUrl("/directions")
  }

}
