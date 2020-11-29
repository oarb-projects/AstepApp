import { Component } from '@angular/core';
import { CallNumber } from '@ionic-native/call-number/ngx';
// import { CallNumber } from '@ionic-native/call-number';
import { InAppBrowser, InAppBrowserOptions} from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor( private callNumber: CallNumber,private iab: InAppBrowser ) { }

  callMe(){
    const beSafeNumber= '5552598121';
    this.callNumber.callNumber(beSafeNumber, true)
    .then(res => console.log('Launched dialer!', res))
    .catch(err => console.log('Error launching dialer', err));
  }

  openFb(url: string){
    const options: InAppBrowserOptions = {
      zoom: 'no'
    };
    // Opening a URL and returning an InAppBrowserObject
    const browser = this.iab.create(url, '_system', options);
  }
}
