import {Component, OnInit, Renderer2} from '@angular/core';
import {MensajeSIIU} from '../modelo/mensajeSIIU';

@Component({
  selector: 'app-creacion-propuesta',
  templateUrl: './creacion-propuesta.component.html',
  styleUrls: ['./creacion-propuesta.component.css']
})
export class CreacionPropuestaComponent implements OnInit {

  mensajeSIIU: MensajeSIIU;

  constructor(public renderer: Renderer2) { }

  ngOnInit() {
    this.renderer.listen('window', 'message', (event) => {
      if (event.data.mensajeSIIU !== undefined) {
        this.mensajeSIIU = event.data.mensajeSIIU;
      }
      return true;
    });
  }

  enviarPropuesta() {
    this.mensajeSIIU.codigoPropuesta = `${Math.floor(Math.random() * 999999999999) + 1}`;
    window.parent.postMessage({mensajeSIIU: this.mensajeSIIU}, '*');
  }

  enviarProyecto() {
    this.mensajeSIIU.codigoProyectoGrado = `${Math.floor(Math.random() * 999999999999) + 1}`;
    window.parent.postMessage({mensajeSIIU: this.mensajeSIIU}, '*');
  }

  get mensajeSIIUString(): string {
    return JSON.stringify(this.mensajeSIIU);
  }
}
