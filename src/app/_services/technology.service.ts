import { Injectable } from '@angular/core';
import { Tecnology, TypeTec } from '../_models/Tecnology';

@Injectable({
  providedIn: 'root'
})
export class TechnologyService {

  private typetecs = [
    {
      id: 0,
      type1: 'Lenguajes',
      type2: 'Frameworks',
      section1:
        [
          {
            id: 0,
            imagelink: 'https://www.java.com/es/',
            imageresource: 'https://raw.githubusercontent.com/gilbarbara/logos/29e8719bf78915c7a82a26a6c203f53c4cb8fff2/logos/java.svg',
            alt: 'Java'
          },
          {
            id: 1,
            imagelink: 'https://kotlinlang.org/',
            imageresource: 'https://raw.githubusercontent.com/gilbarbara/logos/29e8719bf78915c7a82a26a6c203f53c4cb8fff2/logos/kotlin-icon.svg',
            alt: 'Kotlin'
          },
          {
            id: 2,
            imagelink: 'https://www.cprogramming.com/',
            imageresource: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg',
            alt: 'C'
          },
          {
            id: 3,
            imagelink: 'https://es.wikipedia.org/wiki/C%2B%2B',
            imageresource: 'https://raw.githubusercontent.com/loganmarchione/homelab-svg-assets/6b21726b821c961d5c85b9f7afd8950ba700f306/assets/cplusplus.svg',
            alt: 'C++'
          },
          {
            id: 4,
            imagelink: 'https://www.w3schools.com/cs/',
            imageresource: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg',
            alt: 'CSharp'
          },
          {
            id: 5,
            imagelink: 'https://learn.microsoft.com/es-es/dotnet/visual-basic/',
            imageresource: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/VB.NET_Logo.svg/512px-VB.NET_Logo.svg.png?20210603083010',
            alt: 'Visual Basic'
          },
          {
            id: 6,
            imagelink: 'https://www.python.org',
            imageresource: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg',
            alt: 'Python'
          },
          {
            id: 7,
            imagelink: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
            imageresource: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg',
            alt: 'JavaScript'
          },
          {
            id: 8,
            imagelink: 'https://www.typescriptlang.org/',
            imageresource: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg',
            alt: 'TypeScript'
          },
          {
            id: 9,
            imagelink: 'https://www.w3schools.com/css/',
            imageresource: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg',
            alt: 'Css3'
          },
          {
            id: 10,
            imagelink: 'https://www.w3.org/html/',
            imageresource: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg',
            alt: 'Html5'
          },
          {
            id: 11,
            imagelink: 'https://aws.amazon.com/es/what-is/xml/#:~:text=El%20lenguaje%20de%20marcado%20extensible%20(XML)%20es%20un%20lenguaje%20de,de%20computaci%C3%B3n%20por%20s%C3%AD%20mismo.',
            imageresource: 'https://www.vectorlogo.zone/logos/w3c_xml/w3c_xml-icon.svg',
            alt: 'XML'
          }
        ] as Tecnology[],
      section2: [
        {
          id: 0,
          imagelink: 'https://angular.dev/',
          imageresource: 'https://raw.githubusercontent.com/gilbarbara/logos/29e8719bf78915c7a82a26a6c203f53c4cb8fff2/logos/angular-icon.svg',
          alt: 'Angular'
        },
        {
          id: 1,
          imagelink: 'https://reactjs.org/',
          imageresource: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg',
          alt: 'React'
        },
        {
          id: 2,
          imagelink: 'https://getbootstrap.com',
          imageresource: 'https://upload.vectorlogo.zone/logos/getbootstrap/images/987f8f6c-263a-47b1-a85d-853cfca215d9.svg',
          alt: 'Bootstrap'
        },
        {
          id: 3,
          imagelink: 'https://dotnet.microsoft.com/en-us/download',
          imageresource: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/.NET_Core_Logo.svg/2048px-.NET_Core_Logo.svg.png',
          alt: 'NETCore'
        }
      ] as Tecnology[],
    },
    {
      id: 0,
      type1: 'IDEs',
      type2: 'Bases de datos',
      section1: [
        {
          id: 0,
          imagelink: 'https://developer.android.com/studio?hl=es-419',
          imageresource: 'https://upload.vectorlogo.zone/logos/android_studio/images/bc43bbac-e239-4ae9-829a-9809e57a8bc0.svg',
          alt: 'Android Studio'
        },
        {
          id: 1,
          imagelink: 'https://es.wikipedia.org/wiki/Turbo_C',
          imageresource: 'https://vid.geekazine.com/dith/uploads/2013/05/Turbo-C-DITH.png',
          alt: 'Turbo C'
        },
        {
          id: 2,
          imagelink: 'https://www.spyder-ide.org/',
          imageresource: 'https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/spyder/spyder-original.svg',
          alt: 'Spyder'
        },
        {
          id: 3,
          imagelink: 'https://learn.microsoft.com/es-es/sql/ssms/download-sql-server-management-studio-ssms?view=sql-server-ver16',
          imageresource: 'https://miro.medium.com/v2/1*-hkzF9m5828c-UIaSQNUug.jpeg',
          alt: 'Microsft SQLServer Managment Studio'
        },
        {
          id: 4,
          imagelink: 'https://code.visualstudio.com/',
          imageresource: 'https://raw.githubusercontent.com/benc-uk/icon-collection/e33ee714d05a24a81cf6ccd967ef34b22cb77e65/azure-patterns/visual-studio-blue.svg',
          alt: 'Visual Studio Code'
        },
        {
          id: 5,
          imagelink: 'https://visualstudio.microsoft.com/es/vs/community/',
          imageresource: 'https://raw.githubusercontent.com/gilbarbara/logos/29e8719bf78915c7a82a26a6c203f53c4cb8fff2/logos/visual-studio.svg',
          alt: 'Visual Studio Community'
        },
        {
          id: 6,
          imagelink: 'https://colab.research.google.com/',
          imageresource: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOUCw6EGyF9_vJg-hOx6_mxB0f2W3yw60_pG_hMF9zvlUrtv4-Vy9ehi3ftuOcG444j0s',
          alt: 'Google Colab'
        }] as Tecnology[],
      section2: [
        {
          id: 0,
          imagelink: 'https://www.sqlite.org/',
          imageresource: 'https://www.vectorlogo.zone/logos/sqlite/sqlite-icon.svg',
          alt: 'SQL Lite'
        },
        {
          id: 1,
          imagelink: 'https://www.microsoft.com/es-es/sql-server/sql-server-downloads',
          imageresource: 'https://www.svgrepo.com/show/303229/microsoft-sql-server-logo.svg',
          alt: 'Microsft SQLServer'
        },
        {
          id: 2,
          imagelink: 'https://firebase.google.com/',
          imageresource: 'https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg',
          alt: 'Firebase'
        }
      ] as Tecnology[]
    },
    {
      id: 1,
      type1: 'SO/Distros',
      type2: 'Diseño',
      section1: [
        {
          id: 0,
          imagelink: 'https://www.microsoft.com/es-es/windows-server',
          imageresource: 'https://cdn.worldvectorlogo.com/logos/windows-server-2.svg',
          alt: 'Windows Server'
        },
        {
          id: 1,
          imagelink: 'https://www.linux.org/',
          imageresource: 'https://raw.githubusercontent.com/loganmarchione/homelab-svg-assets/6b21726b821c961d5c85b9f7afd8950ba700f306/assets/linux.svg',
          alt: 'Linux'
        },
        {
          id: 2,
          imagelink: 'https://ubuntu.com/',
          imageresource: 'https://raw.githubusercontent.com/edent/SuperTinyIcons/d190e37443ed7a09f39017cbf06d1b6be82d06e1/images/svg/ubuntu.svg',
          alt: 'Ubuntu'
        },
        {
          id: 3,
          imagelink: 'https://www.debian.org/index.es.html',
          imageresource: 'https://raw.githubusercontent.com/edent/SuperTinyIcons/d190e37443ed7a09f39017cbf06d1b6be82d06e1/images/svg/debian.svg',
          alt: 'Debian'
        },
        {
          id: 4,
          imagelink: 'https://www.kali.org/',
          imageresource: 'https://raw.githubusercontent.com/detain/svg-logos/07e36b4aa0691f3015886624395e083395e528c5/svg/k/kali-1.svg',
          alt: 'Kali Linux'
        }] as Tecnology[],
      section2: [
        {
          id: 0,
          imagelink: 'https://www.photoshop.com/en',
          imageresource: 'https://raw.githubusercontent.com/gilbarbara/logos/29e8719bf78915c7a82a26a6c203f53c4cb8fff2/logos/adobe-photoshop.svg',
          alt: 'Photoshop'
        },
        {
          id: 1,
          imagelink: 'https://www.adobe.com/es/products/illustrator.html',
          imageresource: 'https://raw.githubusercontent.com/pheralb/svgl/5c82f5c8ee850fe1ae505978ae50296c9f5a6f29/static/library/illustrator.svg',
          alt: 'Illustrator'
        },
        {
          id: 2,
          imagelink: 'https://app.diagrams.net/',
          imageresource: 'https://upload.vectorlogo.zone/logos/drawio/images/6fe38e50-405d-4a17-aae8-bce2e377bca8.svg',
          alt: 'Draw.io'
        },
        {
          id: 3,
          imagelink: 'https://www.figma.com/',
          imageresource: 'https://www.vectorlogo.zone/logos/figma/figma-icon.svg',
          alt: 'Figma'
        },
        {
          id: 4,
          imagelink: 'https://www.blender.org/',
          imageresource: 'https://raw.githubusercontent.com/gilbarbara/logos/29e8719bf78915c7a82a26a6c203f53c4cb8fff2/logos/blender.svg',
          alt: 'Blender'
        }
      ] as Tecnology[]
    },
    {
      id: 2,
      type1: 'Office',
      type2: 'Otros',
      section1: [
        {
          id: 0,
          imagelink: 'https://www.microsoft.com/es-es/microsoft-365/project/project-management-software',
          imageresource: 'https://static.wikia.nocookie.net/logopedia/images/9/98/Microsoft_Project_%282019%E2%80%93present%29.svg',
          alt: 'Microsft Project'
        },
        {
          id: 1,
          imagelink: 'https://www.microsoft.com/es-es/microsoft-365/word',
          imageresource: 'https://vectorwiki.com/images/Qwfvh__microsoft-word.svg',
          alt: 'Microsft Word'
        },
        {
          id: 2,
          imagelink: 'https://www.microsoft.com/es-es/microsoft-365/powerpoint',
          imageresource: 'https://brandeps.com/logo-download/M/Microsoft-Powerpoint-logo-vector-02.svg',
          alt: 'Microsft Powerpoint'
        },
        {
          id: 3,
          imagelink: 'https://www.microsoft.com/es-es/microsoft-365/excel',
          imageresource: 'https://w7.pngwing.com/pngs/394/915/png-transparent-excel-hd-logo-thumbnail.png',
          alt: 'Microsft Excel'
        }] as Tecnology[],
      section2: [
        {
          id: 0,
          imagelink: 'https://jwt.io/',
          imageresource: 'https://raw.githubusercontent.com/bestofjs/bestofjs/685cbfef889820a837726b95d5ce095deca09929/apps/bestofjs-nextjs/public/logos/jwt.svg',
          alt: 'JWT'
        },
        {
          id: 1,
          imagelink: 'https://redux-toolkit.js.org/',
          imageresource: 'https://raw.githubusercontent.com/gilbarbara/logos/29e8719bf78915c7a82a26a6c203f53c4cb8fff2/logos/redux.svg',
          alt: 'Redux'
        },
        {
          id: 2,
          imagelink: 'https://www.virtualbox.org/',
          imageresource: 'https://www.vectorlogo.zone/logos/virtualbox/virtualbox-icon.svg',
          alt: 'Virtual Box'
        },
        {
          id: 3,
          imagelink: 'https://www.vmware.com/',
          imageresource: 'https://raw.githubusercontent.com/walkxcode/dashboard-icons/be82e22c418f5980ee2a13064d50f1483df39c8c/svg/vmware-workstation.svg',
          alt: 'Vmware Workstation'
        }
      ] as Tecnology[]
    }
  ] as TypeTec[];

  constructor() { }

  GetTechnology(): TypeTec[] {
    return this.typetecs;
  }

}
