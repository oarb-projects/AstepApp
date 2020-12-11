import { Component, OnInit } from '@angular/core';
import { Contacts, Contact, ContactField, ContactName } from '@ionic-native/contacts/ngx';
import { PhonebookPopoverComponent } from 'src/app/components/phonebook-popover/phonebook-popover.component';
import { PopoverController } from '@ionic/angular';

interface User {
  nombre: string;
  celular: string;
  notas: string;
  img?: string;
}

@Component({
  selector: 'app-phonebook',
  templateUrl: './phonebook.page.html',
  styleUrls: ['./phonebook.page.scss'],
})
export class PhonebookPage implements OnInit {
  myContacts: Contact[] =  [];
  usuarios: Array<User>;
  constructor(private contacts: Contacts, private popoverController: PopoverController) { }
  myImgUrl="https://placeimg.com/500/500/any";

  ngOnInit() {
    const usuarios: Array<User> = [
      {nombre: 'Pedro Armenta',
      celular: '6862667052',
      notas: 'Recordar la meditacion y pensamientos positivos'},
      {nombre: 'Jorge Perez',
      celular: '6862667052',
      notas: 'Olvidar malos momentos y perdonar a las personas'}
    ]
    this.usuarios=usuarios;
  }

  loadContacts(){
    const options = {
      filter: '',
      multiple: true,
      hasPhoneNumber: true
    };
    this.contacts.find(['*'], options).then((contacts: Contact[]) => {
      this.myContacts = contacts;
      console.log('Contacts: ', contacts);
    });
  }
  call(c: any){
    console.log("===calling===");
  }

  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: PhonebookPopoverComponent,
      // cssClass: 'my-custom-class',
      event: ev,
      translucent: true
    });
    await popover.present();

    const {data} = await popover.onWillDismiss();
    console.log(data);

    popover.onDidDismiss().then(({data}) => {
      console.log(data.informacion);
      data.informacion.img="https://placeimg.com/500/500/any";

      // data.informacion.fecha = data.informacion.fecha.split('T')[0];
      this.usuarios.push(data.informacion);
    });
  }
}
