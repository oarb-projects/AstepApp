import { Component, OnInit } from '@angular/core';
import { Contacts, Contact, ContactField, ContactName } from '@ionic-native/contacts/ngx';

@Component({
  selector: 'app-phonebook',
  templateUrl: './phonebook.page.html',
  styleUrls: ['./phonebook.page.scss'],
})
export class PhonebookPage implements OnInit {
  myContacts: Contact[] =  [];

  constructor(private contacts: Contacts ) { }

  ngOnInit() {
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

}
