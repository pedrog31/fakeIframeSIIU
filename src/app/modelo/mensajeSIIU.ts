export class MensajeSIIU {
  constructor() {

  }
  tipoProyecto: number;
  subTipoProyecto: number;
  codigoUnidadAcademica: number;
  codigoProgramaAcademico: number;
  codigoGrupoInvestigacion: number;
  tutor: SigpDirectoresProyectos;
  estudiante: EstudianteSIIU;
  numeroProceso: number;
  codigoPropuesta: string;
  codigoProyectoGrado: string;
}

export class EstudianteSIIU {
  constructor (cedula: string, nombres: string, correoElectronico: string) {
    this.cedula = cedula;
    this.nombres = nombres;
    this.correoElectronico = correoElectronico;
  }
  cedula: string;
  nombres: string;
  correoElectronico: string;
}

export class SigpDirectoresProyectos {
  constructor(documento: string, nombre: string, correoElectronico: string) {
    this.documento = documento;
    this.nombre = nombre;
    this.correoElectronico = correoElectronico;
  }
  documento: string;
  nombre: string;
  correoElectronico: string;
}
