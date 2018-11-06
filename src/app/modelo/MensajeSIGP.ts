export class MensajeSIGP {
  codigoUnidadAcademica: number;
  codigoGrupoInvestigacion: number;
  proyecto: SigpProyectosEstudiante;
  estudiante: InformacionBasica;
}

export class SigpProcesosSiiu {
  codigoTipoProyecto: number;
  codigoSubtipoProyecto: number;
  numeroProceso: number;
  duracionMeses: number;
}

export class SigpProyectosEstudiante {
  id: Id;
  nombreProyecto: string;
  nombreDirProy: string;
  documentoDirProy: string;
  correoDirProy: string;
  cohorte: string;
  grupoInvestigacion: GrupoInvestigacion;
  propuestaId: string;
  proyectoGradoId: string;
  sigpProcesosSiiu: SigpProcesosSiiu;
  estado: string;
}

export class InformacionBasica {
  nombre: string;
  apellidos: string;
  email: string;
  emailInstitucional: string;
  celular: string;
  telefono: string;
  documento: string;
  tipoDocumento: string;
}

export class GrupoInvestigacion {
  identificador: number;
  nombreCompleto: string;
  nombreCorto: string;
}

export class Id {
  codigoPrograma: number;
}
