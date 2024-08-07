import { Injectable, Type } from '@angular/core';
import { Project } from '../_models/Project';
import { Tag } from '../_models/Tag';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  //this is the projects.
  //Image save in postimage 1280x720s
  //Add some blender project? IDN
  //Put Linux - Debian, Ubuntu projects and MADI and Python

  projects: Project[] =
    [
      { 
        id: 0, 
        name: "Central Optic",
        pictures: ["https://i.postimg.cc/QNBXzbYj/Central-Optic1.png", "https://i.postimg.cc/Tw44mnn9/Central-Optic2.png", "https://i.postimg.cc/kDrYY91R/Central-Optic3.png", "https://i.postimg.cc/SRYtGjrp/Central-Optic4.png",
          "https://i.postimg.cc/Vs3YPC2n/Central-Optic5.png", "https://i.postimg.cc/65nBWQNS/Central-Optic6.png", "https://i.postimg.cc/3xZ7GbNF/Central-Optic7.png", "https://i.postimg.cc/VNLwWBbQ/Central-Optic8.png", "https://i.postimg.cc/N0JcJ91y/Central-Optic9.png"
        ], 
        projectlink: "https://github.com/stars/J2rg3n-B3rm2d3z/lists/central-optic", 
        summary: "Sistema de información web de control de inventario y facturación para la óptica \"Central Optic\".", 
        description: "Poner una descripción.", 
        tags: [ Tag.SQLSERVERMANAGEMENT, Tag.VISUALSTUDIO, Tag.VISUALSTUDIOCODE,Tag.SQLSERVER, Tag.CSHARP, Tag.ASPNET, Tag.JWT, Tag.ANGULAR, Tag.TYPESCRIPT, Tag.HTML, Tag.CSS, Tag.BOOTSTRAP, Tag.WORD, Tag.DRAWIO]
      },
      { 
        id: 1, 
        name: "Bambishop",
        pictures: ["https://i.postimg.cc/QdVNKn6T/Bambishop1.png", "https://i.postimg.cc/sDTDXRJz/Bambishop2.png", "https://i.postimg.cc/WbN1T4gS/Bambishop3.png", "https://i.postimg.cc/Pfz5gDpP/Bambishop4.png"
        ], 
        projectlink: "https://github.com/stars/J2rg3n-B3rm2d3z/lists/bambishop", 
        summary: "Prototipo de sistema de información web de control de ventas e inventario para el emprendimiento \"Bambishop\".",
        description: "Poner una descripción.", 
        tags: [ Tag.SQLSERVERMANAGEMENT, Tag.VISUALSTUDIO, Tag.VISUALSTUDIOCODE, Tag.SQLSERVER, Tag.CSHARP, Tag.ASPNET, Tag.REACT, Tag.REDUX, Tag.TYPESCRIPT, Tag.HTML, Tag.CSS, Tag.BOOTSTRAP,  Tag.PHOTOSHOP]
      },
      { 
        id: 2, 
        name: "ShoList", 
        pictures: ["https://i.postimg.cc/5yc4PQcq/ShoList4.png", "https://i.postimg.cc/Bv4Rgb9d/ShoList1.png", "https://i.postimg.cc/52wZLvGB/ShoList2.png", "https://i.postimg.cc/FFPGJb4L/ShoList6.png", "https://i.postimg.cc/Jhxvd8Rt/ShoList3.png", "https://i.postimg.cc/m2tj3cL6/ShoList5.png"], 
        projectlink: "https://github.com/J2rg3n-B3rm2d3z/ShoList", 
        summary: "Aplicación para móviles android con el proposito de llevar el control de las listas de compras.", 
        description: "Esta es una aplicación para móviles Android desarrollado en Java. En ella se puede crear, modificar y eliminar listas de compras para cualquier fin en específico. Esta aplicación puede ser utilizada para crear un presupuesto de las compras que se están por realizar, y también para llevar un historial de gastos de estas mismas.", 
        tags: [Tag.ANDROIDSTUDIO, Tag.JAVA, Tag.SQLITE, Tag.XML, Tag.PHOTOSHOP] 
      },
      { 
        id: 3, 
        name: "Bekind", 
        pictures: ["https://i.postimg.cc/SN08MfrZ/Bekind1.png", "https://i.postimg.cc/65dZL4bB/Bekind2.png", "https://i.postimg.cc/13sqWRbw/Bekind3.png", "https://i.postimg.cc/13BNbhZT/Bekind4.png",
          "https://i.postimg.cc/XvvybHjv/Bekind5.png", "https://i.postimg.cc/JhdH4N05/Bekind6.png"
        ], 
        projectlink: "https://github.com/J2rg3n-B3rm2d3z/FinalProject", 
        summary: "Prototipo de aplicación colaborativa para móviles Android con el fin de mostrar ATMs cercanos, indicando si estos estan vacíos o no.", 
        description: "Poner una descripción.", 
        tags: [Tag.ANDROIDSTUDIO, Tag.KOTLIN, Tag.FIREBASE, Tag.XML, Tag.PHOTOSHOP] 
      },
      { 
        id: 4, 
        name: "Skin Medical Prescribe",
        pictures: ["https://i.postimg.cc/bJssX1C7/Skin1.png", "https://i.postimg.cc/rs4ssMLg/Skin2.png", "https://i.postimg.cc/fLpkMk1J/Skin3.png", "https://i.postimg.cc/CMnzmHfD/Skin4.png",
          "https://i.postimg.cc/RVcqzSdZ/Skin5.png", "https://i.postimg.cc/HsGjKcQN/Skin6.png", "https://i.postimg.cc/8zNcp2XB/Skin7.png", "https://i.postimg.cc/SxdsJgw0/Skin8.png", "https://i.postimg.cc/BvvvDx0j/Skin9.png"
        ], 
        projectlink: "https://drive.google.com/file/d/1zmSRSlgmVeXlYTkTDV_R_305M7O7vz0X/view?usp=sharing", 
        summary: "Estudio de factibilidad de un sistema de información web de prescripciones medicas para clínicas dermatológicas.", 
        description: "Poner una descripción.", 
        tags: [Tag.WORD, Tag.EXCEL, Tag.PROJECT, Tag.DRAWIO, Tag.FIGMA, Tag.PHOTOSHOP]
      },
      { 
        id: 5, 
        name: "Modificación de kernel en Linux.",
        pictures: ["https://i.postimg.cc/zBGtKM8b/Aso1.png", "https://i.postimg.cc/nrs3wDsn/Aso2.png", "https://i.postimg.cc/RFpPRRZP/Aso3.png", "https://i.postimg.cc/1XLvx36w/Aso4.png",
          "https://i.postimg.cc/RC8sJX8h/Aso5.png", "https://i.postimg.cc/m2HdY7fw/Aso6.png"
        ], 
        projectlink: "https://drive.google.com/file/d/1F_lRjrg-p40XeJzvgukIchmKBivI2gPJ/view?usp=sharing", 
        summary: "Modificación de la pantalla de arranque, creación del prototipo de un driver y configuración de servicios en la red, en la distribución de Kali Linux.", 
        description: "Poner una descripción.", 
        tags: [Tag.LINUX, Tag.C, Tag.KALILINUX, Tag.WORD, Tag.REDES]
      },
      { 
        id: 6, 
        name: "Configuración de servicios de red en Linux.",
        pictures: ["https://i.postimg.cc/252Tkwhz/Redes1.png", "https://i.postimg.cc/zfJ0YMLt/Redes2.png", "https://i.postimg.cc/Px74Z5S9/Redes3.png", "https://i.postimg.cc/SsRdJMfc/Redes4.png",
          "https://i.postimg.cc/fknf2gnv/Redes5.png", "https://i.postimg.cc/ZnyLLzgR/Redes6.png", "https://i.postimg.cc/fWt4PtQ3/Redes7.png", "https://i.postimg.cc/05Tg1k9V/Redes8.png", "https://i.postimg.cc/Jz89tpDJ/Redes9.png", "https://i.postimg.cc/9FZ6W6MC/Redes10.png"
        ], 
        projectlink: "https://drive.google.com/file/d/1t4vpxbE8hjQscTIXnhx4yltX9BK68ct7/view?usp=sharing", 
        summary: "Configuración de servicios en la red de DNS, DHCP, Web, Correo electrónico, FTP, VoIP y Streaming en la distribución de Kali Linux.", 
        description: "Poner una descripción.", 
        tags: [Tag.LINUX, Tag.KALILINUX, Tag.WORD, Tag.REDES]
      },
      { 
        id: 7, 
        name: "Configuración de servicios de red en Windows Server.",
        pictures: ["https://i.postimg.cc/6phFZCnP/Windows1.png", "https://i.postimg.cc/fLVP1Fp4/Windows2.png", "https://i.postimg.cc/HLsR9jtk/Windows3.png", "https://i.postimg.cc/SKT5TqZ7/Windows4.png",
          "https://i.postimg.cc/Fsy6t0WK/Windows5.png", "https://i.postimg.cc/x1gF8nSD/Windows6.png", "https://i.postimg.cc/nLzSQgHs/Windows7.png", "https://i.postimg.cc/Gmb5b9Vx/Windows8.png", "https://i.postimg.cc/ZqM7PHRw/Windows9.png", "https://i.postimg.cc/zBHdxhH8/Windows10.png"
        ], 
        projectlink: "https://drive.google.com/drive/folders/17kMaqlKVwRehi3qLJgwuC1NQ5ERrYzGP?usp=sharing", 
        summary: "Configuración de servicios en la red virtualizada de DNS, DHCP, Active Directory, Web, y FTP en Windows Server.", 
        description: "Poner una descripción.", 
        tags: [Tag.WINDOWSSERVER, Tag.WORD, Tag.REDES, Tag.VIRTUALBOX]
      },
      { 
        id: 8, 
        name: "Red Convolucional con Cifar10",
        pictures: ["https://i.postimg.cc/8CRh2XCK/IA1.png", "https://i.postimg.cc/3R3gYj4K/IA2.png", "https://i.postimg.cc/d0P2ScJZ/IA3.png"], 
        projectlink: "https://colab.research.google.com/drive/1yN0gAC1Qyozqyi_L5Cw93vYpV_BBweGE?usp=sharing", 
        summary: "Desarrollo del prototipo de una red neuronal convolucional con la base de datos de imágenes Cifar10.", 
        description: "Poner una descripción.", 
        tags: [Tag.PYTHON, Tag.GOOGLECOLAB, Tag.IA]
      },
      { 
        id: 9, 
        name: "Simulador de ensamblador",
        pictures: ["https://i.postimg.cc/bwF3PGXc/Simulador1.png", "https://i.postimg.cc/MK59sPdG/Simulador2.png", "https://i.postimg.cc/y8Nv2mby/Simulador3.png", "https://i.postimg.cc/g0X42Ydw/Simulador4.png",
          "https://i.postimg.cc/PqgyLBrS/Simulador5.png", "https://i.postimg.cc/tTF5F2sp/Simulador6.png", "https://i.postimg.cc/d3v96rCd/Simulador7.png", "https://i.postimg.cc/hvr15v8Y/Simulador8.png", "https://i.postimg.cc/05dnQXgC/Simulador9.png"
        ], 
        projectlink: "https://github.com/J2rg3n-B3rm2d3z/Simulador", 
        summary: "Aplicación para escritorio de un simulador de la arquitectura ensamblador de registros de 2 direcciones.", 
        description: "Poner una descripción.", 
        tags: [Tag.VISUALSTUDIO, Tag.CSHARP, Tag.WPF, Tag.XML] 
      },
      { 
        id: 10, 
        name: "Ejercicios de shell en Linux", 
        pictures: ["https://i.postimg.cc/jq3973QJ/Debian1.png", "https://i.postimg.cc/3Rnq9nsV/Debian2.png", "https://i.postimg.cc/D00MN1FZ/Debian3.png", "https://i.postimg.cc/cCzbG64c/Debian4.png",
          "https://i.postimg.cc/0264dGcX/Debian5.png", "https://i.postimg.cc/K8BsCGXn/Debian6.png", "https://i.postimg.cc/bNKB6G5y/Debian7.png", "https://i.postimg.cc/CK06g3Y9/Debian8.png", "https://i.postimg.cc/W47Yb51z/Debian9.png", "https://i.postimg.cc/pTXG9KmZ/Debian10.png"
        ], 
        projectlink: "https://drive.google.com/drive/folders/1EW86A1rSEm1Hcf2Sfbe8ZXucqz79IMev?usp=sharing", 
        summary: "Documentación de ejercicios prácticos de comandos en el shell de Linux utilizando la distribución de Debian.",
        description: "Poner una descripción.", 
        tags: [Tag.VMWAREWORKSTATION, Tag.DEBIAN, Tag.LINUX,  Tag.WORD] 
      },
      { 
        id: 11, 
        name: "Modelados en Blender", 
        pictures: ["https://i.postimg.cc/tCLTR5sh/Blender1.png", "https://i.postimg.cc/6qq3qbVh/Blender2.png", "https://i.postimg.cc/T2N1FGGN/Blender3.png", "https://i.postimg.cc/NfyFwVjs/Blender4.png",
          "https://i.postimg.cc/pdBXZMqZ/Blender5.png", "https://i.postimg.cc/qRMBDDFd/Blender6.png", "https://i.postimg.cc/Y0Tp9rCp/Blender7.png"
        ], 
        projectlink: "https://drive.google.com/drive/folders/1CMqaVsnJhHRAvootUEAK9nsURiRGOjRr?usp=sharing", 
        summary: "Modelados en 3D realizados en el software de blender, aplicando texturas, addons, nodos geométricos, nodos de texturas, etc.",
        description: "Poner una descripción.", 
        tags: [Tag.BLENDER, Tag.PHOTOSHOP] 
      },
      { 
        id: 12, 
        name: "Lotería en Turbo C", 
        pictures: ["https://i.postimg.cc/MH3T87GC/Loteria1.png", "https://i.postimg.cc/qRLq1VHM/Loteria2.png", "https://i.postimg.cc/cCLHj9d7/Loteria3.png"], 
        projectlink: "https://github.com/J2rg3n-B3rm2d3z/Turboc-2.0",
        summary: "Programación de un juego de lotería en el emulador de DOSBOX utilizando Turbo C.", 
        description: "Poner una descripción.", 
        tags: [Tag.C, Tag.TURBOC] 
      },
      { 
        id: 13, 
        name: "Registro académico en Turbo C", 
        pictures: ["https://i.postimg.cc/28MBgDM0/Registro-Academico1.png", "https://i.postimg.cc/yNz3YTV9/Registro-Academico2.png", "https://i.postimg.cc/j2j7YdRF/Registro-Academico3.png",
          "https://i.postimg.cc/ryh4CWJX/Registro-Academico4.png", "https://i.postimg.cc/KvRM9zqK/Registro-Academico5.png", "https://i.postimg.cc/7hQTH86Y/Registro-Academico6.png",
          "https://i.postimg.cc/dVCTYfKw/Registro-Academico7.png", "https://i.postimg.cc/7LMGCT6R/Registro-Academico8.png"
        ], 
        projectlink: "https://github.com/J2rg3n-B3rm2d3z/Turboc-2.0", 
        summary: "Programación de un sistema de registro académico en el emulador de DOSBOX utilizando Turbo C.", 
        description: "Poner una descripción.", 
        tags: [Tag.C, Tag.TURBOC] 
      },
      { 
        id: 14, 
        name: "Pong en Turbo C", 
        pictures: [
          "https://i.postimg.cc/SsCYtLvD/Pong1.png", "https://i.postimg.cc/J73BNqJh/Pong2.png", "https://i.postimg.cc/T1cLTdGb/Pong3.png",
          "https://i.postimg.cc/ZnmvkBkZ/Pong4.png", "https://i.postimg.cc/Fs9kDLgV/Pong5.png", "https://i.postimg.cc/9FJRSQL5/Pong6.png",
          "https://i.postimg.cc/HkncC1NJ/Pong7.png", "https://i.postimg.cc/13dgmYxv/Pong8.png"
        ], 
        projectlink: "https://github.com/J2rg3n-B3rm2d3z/Turboc-2.0", 
        summary: "Programación de un juego de Pong en el emulador de DOSBOX utilizando Turbo C por medio de sus primitivas graficas.", 
        description: "Poner una descripción.", 
        tags: [Tag.C, Tag.TURBOC] 
      },
      { 
        id: 15, 
        name: "Geometría computacional en Turbo C", 
        pictures: ["https://i.postimg.cc/ZRYDPhxL/Geometria-Computacional1.png", "https://i.postimg.cc/257KB5h6/Geometria-Computacional2.png", "https://i.postimg.cc/Qd5PhmMc/Geometria-Computacional3.png", "https://i.postimg.cc/mrsnD9cJ/Geometria-Computacional4.png" ], 
        projectlink: "https://github.com/J2rg3n-B3rm2d3z/Cierre-Convexo-C", 
        summary: "Programación de tres algoritmos de cierres convexos y un algoritmo para realizar un diagrama de Voronoi, en el emulador de DOSBOX utilizando Turbo C por medio de sus primitivas graficas.", 
        description: "Poner una descripción.", 
        tags:  [Tag.C, Tag.TURBOC] 
       },
      { 
        id: 16,
        name: "Aeropuerto en Turbo C", 
        pictures: ["https://i.postimg.cc/cHX1T0y1/Aeropuerto1.png", "https://i.postimg.cc/zvvzc68C/Aeropuerto2.png", "https://i.postimg.cc/KzZvn4Ws/Aeropuerto3.png", "https://i.postimg.cc/fyPznCR6/Aeropuerto4.png",
          "https://i.postimg.cc/7YCP1FBD/Aeropuerto5.png", "https://i.postimg.cc/QNYxT8J0/Aeropuerto6.png", "https://i.postimg.cc/QxR8ffP7/Aeropuerto7.png"
        ], 
        projectlink: "https://github.com/J2rg3n-B3rm2d3z/Aeropuerto-Turbo-C", 
        summary: "Programación de una simulación de la cabina de un aeropuerto en el emulador de DOSBOX utilizando Turbo C por medio de sus primitivas graficas.",
        description: "Poner una descripción.", 
        tags: [Tag.C, Tag.TURBOC] 
      }
    ]


    
  constructor() {
    
   }

  GetProjects(): Project[] {
    return this.projects;
  }

  GetProjectById(id: number = 0): Project {
    const project = this.projects.find(project => project.id === id);

    if (project === undefined) {
      throw new TypeError('There is no project that matches the id: ' + id)
    }

    return project
  }



  GetProjectByFilter(filterTags: Tag[]): Project[] {
    const filteredProjects: Project[] = []; //Empty Projects

    this.projects.forEach(function (project) { //Call a anonymous function for each project.
      let foundAll = true;

      filterTags.forEach(function (filterTag) { //Call a anonymous function for each tag.
        if (project.tags.includes(filterTag) == false) { //If tag is no found in the project, change dde state to false.
          foundAll = false;
        }
      })

      if (foundAll) { //if state true push to de filtered projects.
        filteredProjects.push(project);
      }

    })



    return filteredProjects;

  }


}
