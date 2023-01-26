import { Component } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.scss']
})
export class PropertyBindingComponent {
  public mensaje: string = 'Si pulsas el boton cambiaras el valor de "public mensaje: string" en el componente!';
  public isDisabled = false

  mostrarMensaje() {
    this.mensaje = "Has pulsado el botón";
    this.isDisabled = true
  }
}
