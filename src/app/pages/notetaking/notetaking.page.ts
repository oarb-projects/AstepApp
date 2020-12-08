import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { NotetakingPopoverComponent } from 'src/app/components/notetaking-popover/notetaking-popover.component';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-notetaking',
  templateUrl: './notetaking.page.html',
  styleUrls: ['./notetaking.page.scss'],
})
export class NotetakingPage implements OnInit {
  usuarios: Observable<any>;

  constructor(private dataService: DataService, private popoverController: PopoverController) { }

  ngOnInit() {
    // this.dataService.getUsuarios().subscribe(console.log);
    this.usuarios = this.dataService.getUsuarios();
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

    popover.onDidDismiss().then((result) => {
      console.log(result.data);
    });
  }

  // jsonviewerawesome extension
}
