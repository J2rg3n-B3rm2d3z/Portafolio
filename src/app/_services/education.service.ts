import { Injectable } from '@angular/core';
import { Education, Phase_education } from '../_models/Education';

@Injectable({
  providedIn: 'root'
})
export class EducationService {

  private phases = [
    {
      id: 0,
      phase: 'Secundaria',
      education: [
        {
          id: 0,
          header: 'Colegio Madre del Divino Pastor | 2015 - 2016',
          body: 'Colegio ubicado cerca de la alcaldía de managua, destacada por su gran educación y enseñanza, formando personas de calidad por y para el mundo.',
          imagelink: 'https://www.facebook.com/CMDPManagua/?locale=es_LA',
          imageresource: '../../assets/divinoPastor.jpg',
          alt: 'Divino Pastor'
        },
        {
          id: 1,
          header: 'Instituto Pedagógico La Salle | 2017 - 2019',
          body: 'Institución ubicada de los semáforos Villa Fontana 50mts al oeste, preparando a los alumnos para la vida, buscando la forma de descubrir su propia hambre de aprendizaje y sed de conocimiento.',
          imagelink: 'https://www.lasalle.edu.ni/',
          imageresource: '../../assets/laSalle.jpg',
          alt: 'La Salle'
        }
      ] as Education[]
    },
    {
      id: 1,
      phase: 'Universitaria',
      education: [
        {
          id: 0,
          header: 'Universidad Nacional de Ingeniería | 2020 - 2024',
          body: 'Sede Central ubicada en la Avenida Universitaria. Especializada en ingeniería y arquitectura de Nicaragua, con 3 programas académicos acreditados a nivel internacional, formando a los mejores ingenieros, siendo líderes en ciencia y tecnología.',
          imagelink: 'https://www.uni.edu.ni/#/',
          imageresource: '../../assets/uni.jpeg',
          alt: 'UNI'
        }
      ] as Education[]
    },
    {
      id: 3,
      phase: 'Certificación',
      education: [
        {
          id: 0,
          header: 'Cisco Networking Academy | Certificación Linux Essentials | 2022',
          body: 'Certificación obtenida en la plataforma de Cisco Networking Academy, en el curso de NDG Linux Essentials, donde se aprende y se pone en práctica comandos de shell en sistemas operativos Linux.',
          imagelink: 'https://drive.google.com/file/d/1RpFnEYQ6T76fYeIRblM5TmjK_j1igAFp/view?usp=sharing',
          imageresource: 'https://i.postimg.cc/hj1Yvngk/Linux-Essential.png',
          alt: 'Linux Essentials'
        },
        {
          id: 2,
          header: 'Universidad Nacional de Ingeniería | Reconocimiento de aplicaciones móviles | 2022',
          body: 'Reconocimiento obtenido por participar en la V edición de la feria de desarrollo de aplicaciones móviles de la carrera de ingeniería en computación.',
          imagelink: 'https://drive.google.com/file/d/1IaUqhLar4H_XCFpLeNMAkHvZXQMkWwlh/view?usp=sharing',
          imageresource: 'https://i.postimg.cc/jdnnwhBq/Aplicaciones-Moviles.png',
          alt: 'Aplicaciones Moviles'
        }
      ] as Education[]
    }
  ] as Phase_education[]

  constructor() { }

  GetPhase_education(): Phase_education[] {
    return this.phases;
  }

}
