import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-notetaking-popover',
  templateUrl: './notetaking-popover.component.html',
  styleUrls: ['./notetaking-popover.component.scss'],
})
export class NotetakingPopoverComponent implements OnInit {

  nombre: string = '';
 

  userInfo = {
    session: '',
    fecha:  '',
    notas:  ''
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
