import {Component, OnInit, Renderer2} from '@angular/core';
import {MensajeSIGP} from '../modelo/MensajeSIGP';

@Component({
  selector: 'app-creacion-propuesta',
  templateUrl: './creacion-propuesta.component.html',
  styleUrls: ['./creacion-propuesta.component.css']
})
export class CreacionPropuestaComponent implements OnInit {

  mensajeSIGP: MensajeSIGP;

  constructor(public renderer: Renderer2) { }

  ngOnInit() {
    this.renderer.listen('window', 'message', (event) => {
      if (event.data.SIGP !== undefined) {
        this.mensajeSIGP = event.data.SIGP;
        return true;
      }
    });
  }

  enviarPropuesta() {
    this.mensajeSIGP.proyecto.estado = 'enviado';
    window.parent.postMessage({SIIU: this.mensajeSIGP}, '*');
  }

  enviarProyecto() {
    this.mensajeSIGP.proyecto.proyectoGradoId = `${Math.floor(Math.random() * 999999999999) + 1}`;
    this.mensajeSIGP.proyecto.estado = 'enviado';
    window.parent.postMessage({SIIU: this.mensajeSIGP}, '*');
  }

  get mensajeSIIUString(): string {
    return JSON.stringify(this.mensajeSIGP);
  }

  guardarPropuesta() {
    this.mensajeSIGP.proyecto.propuestaId = `${Math.floor(Math.random() * 999999999999) + 1}`;
    this.mensajeSIGP.proyecto.estado = 'elaborando';
    window.parent.postMessage({SIIU: this.mensajeSIGP}, '*');
  }
}
