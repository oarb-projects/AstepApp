import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PopoverController } from '@ionic/angular';
@Component({
  selector: 'app-recipe-popover',
  templateUrl: './recipe-popover.component.html',
  styleUrls: ['./recipe-popover.component.scss'],
})
export class RecipePopoverComponent implements OnInit {

  nombre: string = '';
 

  recipeInfo = {
    nombre: '',
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
    console.log(this.recipeInfo);
    this.popoverController.dismiss({
      informacion: this.recipeInfo
    });
  }

}
