import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { RecipePopoverComponent } from 'src/app/components/recipe-popover/recipe-popover.component';
import { DataService } from 'src/app/services/data.service';

interface Recipe {
  nombre: string;
  fecha: string;
}


@Component({
  selector: 'app-recipebook',
  templateUrl: './recipebook.page.html',
  styleUrls: ['./recipebook.page.scss'],
})
export class RecipebookPage implements OnInit {
  recipes: Array<Recipe>;

  constructor(private popoverController: PopoverController) { }

  ngOnInit() {
    const recipes: Array<Recipe> = [
      {nombre: 'Pastilla 1',
      fecha: '2020-12-01',
      },
      {nombre: 'Pastilla 2',
      fecha: '2020-12-02',}
    ]
     this.recipes = recipes;

  }

  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: RecipePopoverComponent,
      // cssClass: 'my-custom-class',
      event: ev,
      translucent: true
    });
    await popover.present();

    const {data} = await popover.onWillDismiss();
    console.log(data);

    popover.onDidDismiss().then(({data}) => {
      console.log(data.informacion);
      data.informacion.fecha = data.informacion.fecha.split('T')[0];
      this.recipes.push(data.informacion);
    });
  }
}
