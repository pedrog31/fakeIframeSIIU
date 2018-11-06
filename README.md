# DummiIFRAME

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.1.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4201/`. The app will automatically reload if you change any of the source files.

## Descripción

Este proyecto busca mostrar la forma dcodigoProgramaAcademico: 70004
                                      codigoUnidadAcademica: 20
                                      estudiante: {nombre: "LILIANA", apellidos: "CHAVES CASTANO", email: "liliana.chaves@udea.edu.co", emailInstitucional: "liliana.chaves@udea.edu.co", celular: "", …}
                                      proyecto: {id: {…}, sigpProcesosSiiu: {…}, nombreProyecto: "p1", documentoDirProy: "gf", nombreDirProy: "jv", …}
e integracion entre el modulo SIGP y SIIU la cual se haria usando la libreria  Renderer2 de '@angular/core' para el paso de mensajes entre el padre (en este caso SIGP) e hijo (SIIU).

La estructura de envio de mensaje estara definida por el modelo "MensajeSIGP" que se encuentra en la carpeta modelo, esta se usara para el envio bidireccional.

```typescript
export class MensajeSIGP {
  codigoUnidadAcademica: number;
  codigoGrupoInvestigacion: number;
  proyecto: SigpProyectosEstudiante;
  estudiante: InformacionBasica;
  estado: string; //Enviado por SIIU con el estado actual del proyecto.
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
  propuestaId: string; //Enviado por SIIU para ser almacenado en SIGP y hacer la relacion propuesta de proyecto y proyecto de grado..
  proyectoGradoId: string; //Enviado por SIIU con el estado actual del proyecto para ser almacenado en SIGP.
  sigpProcesosSiiu: SigpProcesosSiiu;
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
```

los atributos comentados son enviados desde SIIU a SIGP, los demas desde SIGP a SIIU.

En el codigo se puede ver de forma muy simple como se realiza el paso de mensjaes, el funcionamiento general seria asi:

1. Estudiante registrado en SIGP, sin propuesta registrada inicia su inscripcion. 

![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 1")
