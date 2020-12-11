import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-phonebook-popover',
  templateUrl: './phonebook-popover.component.html',
  styleUrls: ['./phonebook-popover.component.scss'],
})
export class PhonebookPopoverComponent implements OnInit {

  nombre: string = '';
 

  userInfo = {
    img: '',
    nombre:  '',
    celular:  ''
  };
  
  constructor(private popoverController: PopoverController) { }

  ngOnInit() {}

  // onClick(valor: number){
  //   const data = {
  //     nombre: this.nombre,
  //     fechas: this.fechas,
  //     notas: this.notas
  //   };
  //   console.log(data);
  //   this.popoverController.dismiss({
  //     argumentoEnviado: '2',
  //     data
  //   });
  // }
  onSubmit(formulario: NgForm){
    console.log(formulario)
    console.log(this.userInfo);
    this.popoverController.dismiss({
      informacion: this.userInfo
    });
  }

}
