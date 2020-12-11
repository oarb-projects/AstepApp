import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { NotetakingPopoverComponent } from 'src/app/components/notetaking-popover/notetaking-popover.component';
import { DataService } from 'src/app/services/data.service';

interface User {
  session: string;
  fecha: string;
  notas: string;
}

@Component({
  selector: 'app-notetaking',
  templateUrl: './notetaking.page.html',
  styleUrls: ['./notetaking.page.scss'],
})
export class NotetakingPage implements OnInit {
  // usuarios: Observable<any>;
  usuarios: Array<User>;
  constructor(private dataService: DataService, private popoverController: PopoverController) { }

  ngOnInit() {
    // this.dataService.getUsuarios().subscribe(console.log);
    // this.usuarios = this.dataService.getUsuarios();
    const usuarios: Array<User> = [
      {session: 'Sesion 01 Terapia',
      fecha: '2020-12-01',
      notas: 'Recordar la meditacion y pensamientos positivos'},
      {session: 'Sesion 02 Terapia',
      fecha: '2020-12-07',
      notas: 'Olvidar malos momentos y perdonar a las personas'}
    ]
    this.usuarios = usuarios;
  }

  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: NotetakingPopoverComponent,
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
      this.usuarios.push(data.informacion);
    });
  }

  // jsonviewerawesome extension
}
