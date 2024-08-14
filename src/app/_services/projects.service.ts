import { Injectable, Type } from '@angular/core';
import { Project } from '../_models/Project';
import { Tag } from '../_models/Tag';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  //This is the projects.
  //Image save in postimage 1280x720s

  private projects: Project[] =
    [
      {
        id: 0,
        name: "Central Optic",
        pictures: ["https://i.postimg.cc/QNBXzbYj/Central-Optic1.png", "https://i.postimg.cc/Tw44mnn9/Central-Optic2.png", "https://i.postimg.cc/kDrYY91R/Central-Optic3.png", "https://i.postimg.cc/SRYtGjrp/Central-Optic4.png",
          "https://i.postimg.cc/Vs3YPC2n/Central-Optic5.png", "https://i.postimg.cc/65nBWQNS/Central-Optic6.png", "https://i.postimg.cc/3xZ7GbNF/Central-Optic7.png", "https://i.postimg.cc/VNLwWBbQ/Central-Optic8.png", "https://i.postimg.cc/N0JcJ91y/Central-Optic9.png"
        ],
        projectlink: "https://github.com/stars/J2rg3n-B3rm2d3z/lists/central-optic",
        summary: "Sistema de información web de control de inventario y facturación para la óptica \"Central Optic\".",
        description: "Sistema de inventario y facturación desarrollado para la microempresa “Central Optic”, donde se maneja el control de la información de los clientes, los empleados, los usuarios del propio sistema, los proveedores, los laboratorios, las facturas con sus pagos, los exámenes realizados, la administración de sus productos y los pedidos para la realización de los lentes, además de tener un apartado de reportes personalizados. Este es un proyecto que se ha estado trabajando en equipo a lo largo de diversos cursos universitarios, siguiendo la línea de la carrera de desarrollo de software, desde la creación de la base de datos hasta el lanzamiento de manera virtualizada.",
        tags: [Tag.SQLSERVERMANAGEMENT, Tag.VISUALSTUDIO, Tag.VISUALSTUDIOCODE, Tag.SQLSERVER, Tag.CSHARP, Tag.NETCORE, Tag.JWT, Tag.ANGULAR, Tag.TYPESCRIPT, Tag.HTML, Tag.CSS, Tag.BOOTSTRAP, Tag.WORD, Tag.DRAWIO]
      },
      {
        id: 1,
        name: "Bambishop",
        pictures: ["https://i.postimg.cc/QdVNKn6T/Bambishop1.png", "https://i.postimg.cc/sDTDXRJz/Bambishop2.png", "https://i.postimg.cc/WbN1T4gS/Bambishop3.png", "https://i.postimg.cc/Pfz5gDpP/Bambishop4.png"],
        projectlink: "https://github.com/stars/J2rg3n-B3rm2d3z/lists/bambishop",
        summary: "Prototipo de sistema de información web de control de ventas e inventario para el emprendimiento \"Bambishop\".",
        description: "Prototipo de un sistema de información web de control de ventas e inventario para el emprendimiento \"Bambishop\". En este caso se intentó desarrollar un sistema donde solo se lleve el control de la información de los clientes, las facturas, los productos y los proveedores. Este es un proyecto personal, donde se pone en práctica los conocimientos adquiridos en la universidad y de cursos apartes para el uso de tecnologías como React. Si bien el proyecto llegó tener ciertos avances, debido a la falta de disponibilidad de tiempo no se llegó a continuar.",
        tags: [Tag.SQLSERVERMANAGEMENT, Tag.VISUALSTUDIO, Tag.VISUALSTUDIOCODE, Tag.SQLSERVER, Tag.CSHARP, Tag.NETCORE, Tag.REACT, Tag.REDUX, Tag.TYPESCRIPT, Tag.HTML, Tag.CSS, Tag.BOOTSTRAP, Tag.PHOTOSHOP]
      },
      {
        id: 2,
        name: "Portafolio",
        pictures: ["https://i.postimg.cc/P5ZW3X1v/Portafolio1.png", "https://i.postimg.cc/NfK7X7M4/Portafolio2.png", "https://i.postimg.cc/HsF09c8C/Portafolio3.png", "https://i.postimg.cc/wxfQ3b6M/Portafolio4.png", "https://i.postimg.cc/vmsWCJvq/Portafolio6.png", "https://i.postimg.cc/GpxkRX7c/Portafolio7.png"],
        projectlink: "https://github.com/J2rg3n-B3rm2d3z/Portafolio.git",
        summary: "Página web programada para demostrar información relevante respecto al portafolio de habilidades y tecnologías aprendidas a lo largo de la carrera.",
        description: "Página web programada en Angular con HTML, CSS y Typescript, con el fin de realizar un portafolio visual para las personas interesadas en saber acerca de mi curriculum. La página tiene la sección de inicio que muestra de manera general la información, se muestra en otra sección la educación que se ha recibido, se tiene una sección de tecnologías donde se puede observar las herramientas que se manejan, se muestran proyectos en los que se ha trabajado, y por último la información de contacto.",
        tags: [Tag.VISUALSTUDIOCODE, Tag.ANGULAR, Tag.BOOTSTRAP, Tag.TYPESCRIPT, Tag.HTML, Tag.CSS]
      },
      {
        id: 3,
        name: "ShoList",
        pictures: ["https://i.postimg.cc/5yc4PQcq/ShoList4.png", "https://i.postimg.cc/Bv4Rgb9d/ShoList1.png", "https://i.postimg.cc/52wZLvGB/ShoList2.png", "https://i.postimg.cc/FFPGJb4L/ShoList6.png", "https://i.postimg.cc/Jhxvd8Rt/ShoList3.png", "https://i.postimg.cc/m2tj3cL6/ShoList5.png"],
        projectlink: "https://github.com/J2rg3n-B3rm2d3z/ShoList",
        summary: "Aplicación para móviles android con el proposito de llevar el control de las listas de compras.",
        description: "Aplicación para móviles Android desarrollado en Java. En ella se puede crear, modificar y eliminar listas de compras para cualquier fin en específico. Esta aplicación puede ser utilizada para crear un presupuesto de las compras que se están por realizar, y también para llevar un historial de gastos de estas mismas. Este software se desarrolló para poner en práctica lo aprendido en el lenguaje de Java y para dar una solución sencilla para las personas que suelen llevar en papel las listas de compras. Si bien ya es una app funcional, aun no se ha publicado en alguna plataforma de distribución.",
        tags: [Tag.ANDROIDSTUDIO, Tag.JAVA, Tag.SQLITE, Tag.XML, Tag.PHOTOSHOP]
      },
      {
        id: 4,
        name: "Bekind",
        pictures: ["https://i.postimg.cc/SN08MfrZ/Bekind1.png", "https://i.postimg.cc/65dZL4bB/Bekind2.png", "https://i.postimg.cc/13sqWRbw/Bekind3.png", "https://i.postimg.cc/13BNbhZT/Bekind4.png",
          "https://i.postimg.cc/XvvybHjv/Bekind5.png", "https://i.postimg.cc/JhdH4N05/Bekind6.png"
        ],
        projectlink: "https://github.com/J2rg3n-B3rm2d3z/FinalProject",
        summary: "Prototipo de aplicación colaborativa para móviles Android con el fin de mostrar ATMs cercanos, indicando si estos estan vacíos o no.",
        description: "Prototipo de aplicación colaborativa para móviles Android con el fin de mostrar ATMs cercanos, indicando si estos están vacíos o no. Esta aplicación fue desarrollada como proyecto de curso en la clase de \"Programación gráfica\", aplicando los conocimientos adquiridos en el lenguaje de Kotlin y el uso de Firebase como base de datos. En este proyecto se propone el uso colaborativo de la App por parte de los usuarios para que ellos mismos indiquen que cajeros automáticos pueden tener o no efectivo, ayudando a los demás a no perder tiempo al momento de ir a algún cajero en específico.",
        tags: [Tag.ANDROIDSTUDIO, Tag.KOTLIN, Tag.FIREBASE, Tag.XML, Tag.PHOTOSHOP]
      },
      {
        id: 5,
        name: "Skin Medical Prescribe",
        pictures: ["https://i.postimg.cc/bJssX1C7/Skin1.png", "https://i.postimg.cc/rs4ssMLg/Skin2.png", "https://i.postimg.cc/fLpkMk1J/Skin3.png", "https://i.postimg.cc/CMnzmHfD/Skin4.png",
          "https://i.postimg.cc/RVcqzSdZ/Skin5.png", "https://i.postimg.cc/HsGjKcQN/Skin6.png", "https://i.postimg.cc/8zNcp2XB/Skin7.png", "https://i.postimg.cc/SxdsJgw0/Skin8.png", "https://i.postimg.cc/BvvvDx0j/Skin9.png"
        ],
        projectlink: "https://drive.google.com/file/d/1zmSRSlgmVeXlYTkTDV_R_305M7O7vz0X/view?usp=sharing",
        summary: "Estudio de factibilidad de un sistema de información web de prescripciones medicas para clínicas dermatológicas.",
        description: "Estudio de factibilidad para la creación de un sistema de información web de prescripciones medicas para clínicas dermatológicas, donde se lleva el control de la información básica de las clínicas que lo utilicen, como los empleados, los usuarios del sistema, sus pacientes y las prescripciones realizadas, manteniendo un control digital de estas. Este es un documento donde se mira el diseño del sistema, junto con sus requerimientos y costos, mostrando los posibles riesgos de la puesta en marcha del proyecto, y concluyendo con una propuesta para el desarrollo. Esto fue un proyecto de final de curso en la clase de \"Economía de proyectos informáticos\".",
        tags: [Tag.WORD, Tag.EXCEL, Tag.PROJECT, Tag.DRAWIO, Tag.FIGMA, Tag.PHOTOSHOP]
      },
      {
        id: 6,
        name: "Modificación de kernel en Kali Linux.",
        pictures: ["https://i.postimg.cc/zBGtKM8b/Aso1.png", "https://i.postimg.cc/nrs3wDsn/Aso2.png", "https://i.postimg.cc/RFpPRRZP/Aso3.png", "https://i.postimg.cc/1XLvx36w/Aso4.png",
          "https://i.postimg.cc/RC8sJX8h/Aso5.png", "https://i.postimg.cc/m2HdY7fw/Aso6.png"
        ],
        projectlink: "https://drive.google.com/file/d/1F_lRjrg-p40XeJzvgukIchmKBivI2gPJ/view?usp=sharing",
        summary: "Modificación de la pantalla de arranque, creación del prototipo de un driver y configuración de servicios en la red en la distribución de Kali Linux.",
        description: "Proyecto de curso en la clase de \"Arquitectura de sistemas operativos\", en el cual consistía modificar el kernel de una distribución de Linux, en este caso Kali Linux, mostrando la información de los integrantes del equipo en la pantalla de arranque, cambiando la imagen del GRUB por una foto de los integrantes de grupo y creando un prototipo de un driver en esta distribución. Finalizando con la instalación y configuración de los servicios FTP y VoIP, esto con el fin de demostrar la funcionalidad del sistema operativo ya una vez que los cambios se hayan realizado.",
        tags: [Tag.LINUX, Tag.C, Tag.KALILINUX, Tag.WORD, Tag.REDES]
      },
      {
        id: 7,
        name: "Configuración de servicios de red en Kali Linux.",
        pictures: ["https://i.postimg.cc/252Tkwhz/Redes1.png", "https://i.postimg.cc/zfJ0YMLt/Redes2.png", "https://i.postimg.cc/Px74Z5S9/Redes3.png", "https://i.postimg.cc/SsRdJMfc/Redes4.png",
          "https://i.postimg.cc/fknf2gnv/Redes5.png", "https://i.postimg.cc/ZnyLLzgR/Redes6.png", "https://i.postimg.cc/fWt4PtQ3/Redes7.png", "https://i.postimg.cc/05Tg1k9V/Redes8.png", "https://i.postimg.cc/Jz89tpDJ/Redes9.png", "https://i.postimg.cc/9FZ6W6MC/Redes10.png"
        ],
        projectlink: "https://drive.google.com/file/d/1t4vpxbE8hjQscTIXnhx4yltX9BK68ct7/view?usp=sharing",
        summary: "Configuración de servicios en la red de DNS, DHCP, Web, Correo electrónico, FTP, VoIP y Streaming en la distribución de Kali Linux.",
        description: "Proyecto de curso en la clase de \"Redes de computadoras\", en el cual consistía instalar y configurar los servicios de DNS, DHCP, Web, Correo electrónico, FTP, VoIP y Streaming en una distribución de Linux, en este caso Kali Linux. Se realizó los cálculos de red para la cantidad de direcciones que se pueden utilizar en los dispositivos finales, y se usó y configuró un router como dispositivo intermedio, dando como resultado el correcto funcionamiento de los servicios en la red aplicando el modelo cliente-servidor.",
        tags: [Tag.LINUX, Tag.KALILINUX, Tag.WORD, Tag.REDES]
      },
      {
        id: 8,
        name: "Configuración de servicios de red en Windows Server.",
        pictures: ["https://i.postimg.cc/6phFZCnP/Windows1.png", "https://i.postimg.cc/fLVP1Fp4/Windows2.png", "https://i.postimg.cc/HLsR9jtk/Windows3.png", "https://i.postimg.cc/SKT5TqZ7/Windows4.png",
          "https://i.postimg.cc/Fsy6t0WK/Windows5.png", "https://i.postimg.cc/x1gF8nSD/Windows6.png", "https://i.postimg.cc/nLzSQgHs/Windows7.png", "https://i.postimg.cc/Gmb5b9Vx/Windows8.png", "https://i.postimg.cc/ZqM7PHRw/Windows9.png", "https://i.postimg.cc/zBHdxhH8/Windows10.png"
        ],
        projectlink: "https://drive.google.com/drive/folders/17kMaqlKVwRehi3qLJgwuC1NQ5ERrYzGP?usp=sharing",
        summary: "Configuración de servicios en la red virtualizada de DNS, DHCP, Active Directory, Web, y FTP en Windows Server.",
        description: "Laboratorios realizados en la clase de \"Redes de computadoras\", en el cual consistía crear una red virtual con Windows Server como servidor y dos clientes Windows 7. Los servicios que se configuraron fueron: DNS, DHCP, Active Directory, Web y FTP. Se realizó los cálculos de red para la cantidad de direcciones que se pueden utilizar en los dispositivos finales, y se configuró la red virtual entre las máquinas. La documentación de este proyecto se dividió en dos partes, el primer documento explica la configuración de DNS, DHCP y Active Directory, y el segundo explica la configuración del servicio Web y FTP.",
        tags: [Tag.WINDOWSSERVER, Tag.WORD, Tag.REDES, Tag.VIRTUALBOX]
      },
      {
        id: 9,
        name: "Red Convolucional con Cifar10",
        pictures: ["https://i.postimg.cc/8CRh2XCK/IA1.png", "https://i.postimg.cc/3R3gYj4K/IA2.png", "https://i.postimg.cc/d0P2ScJZ/IA3.png"],
        projectlink: "https://colab.research.google.com/drive/1yN0gAC1Qyozqyi_L5Cw93vYpV_BBweGE?usp=sharing",
        summary: "Desarrollo del prototipo de una red neuronal convolucional con la base de datos de imágenes Cifar10.",
        description: "Código del prototipo de una red neuronal convolucional realizado en la clase de \"Inteligencia artificial\", donde se usa una base de datos de imágenes de 32x32 provenientes de la librería de Cifar10. En este código se utiliza dicha base de datos para entrenar la red neuronal con el 70% de las imágenes y probarla con el 30%, generando una matriz de confusión el cual muestra la exactitud del modelo propuesto.",
        tags: [Tag.PYTHON, Tag.GOOGLECOLAB, Tag.IA]
      },
      {
        id: 10,
        name: "Simulador de ensamblador",
        pictures: ["https://i.postimg.cc/bwF3PGXc/Simulador1.png", "https://i.postimg.cc/MK59sPdG/Simulador2.png", "https://i.postimg.cc/y8Nv2mby/Simulador3.png", "https://i.postimg.cc/g0X42Ydw/Simulador4.png",
          "https://i.postimg.cc/PqgyLBrS/Simulador5.png", "https://i.postimg.cc/tTF5F2sp/Simulador6.png", "https://i.postimg.cc/d3v96rCd/Simulador7.png", "https://i.postimg.cc/hvr15v8Y/Simulador8.png", "https://i.postimg.cc/05dnQXgC/Simulador9.png"
        ],
        projectlink: "https://github.com/J2rg3n-B3rm2d3z/Simulador",
        summary: "Aplicación para escritorio de un simulador de una arquitectura ensamblador de registros de 2 direcciones.",
        description: "Aplicación para escritorio de un simulador de una arquitectura ensamblador de registros de 2 direcciones, realizado en la clase de \"Arquitectura de máquinas computadoras II\". En esta aplicación se puso en práctica los conocimientos aprendidos a lo largo del curso, por medio del lenguaje de C#. Se muestra paso a paso el funcionamiento de una arquitectura de registros de 2 direcciones, desde ensamblar el código, hasta ejecutarlo, trayendo las instrucciones desde la memoria, realizando los cálculos en la ALU y pudiendo interactuar con dispositivos de entrada y salida.",
        tags: [Tag.VISUALSTUDIO, Tag.CSHARP, Tag.WPF, Tag.XML]
      },
      {
        id: 11,
        name: "Configuración de servicios de red en Ubuntu.",
        pictures: ["https://i.postimg.cc/QMcz506p/Ubuntu1.png", "https://i.postimg.cc/sXyNJ78b/Ubuntu2.png", "https://i.postimg.cc/pTZ1cyMr/Ubuntu3.png", "https://i.postimg.cc/tJ4vKy95/Ubuntu4.png",
          "https://i.postimg.cc/brVV8MJj/Ubuntu5.png", "https://i.postimg.cc/dtDSnqHQ/Ubuntu6.png", "https://i.postimg.cc/KvVpHdwP/Ubuntu7.png", "https://i.postimg.cc/T2t4rycH/Ubuntu8.png", "https://i.postimg.cc/P5wVsSnB/Ubuntu9.png", "https://i.postimg.cc/5t5Pjj0g/Ubuntu10.png"
        ],
        projectlink: "https://drive.google.com/file/d/1-rYx55FSEEmBQRI_ixSfWlndmYQ3ojPo/view?usp=sharing",
        summary: "Configuración de servicios en la red virtualizada de DNS, Web, Correo electrónico, Samba, FTP y SSH en Ubuntu.",
        description: "Proyecto de curso en la clase de \"Sistemas operativos y redes\", en el cual consistía instalar y configurar los servicios de DNS, Web, Correo electrónico, Samba, FTP y SSH, en una red virtual utilizando una distribución de Linux, en este caso Ubuntu, verificando su correcto funcionamiento tanto en dispositivos móviles como en laptops.",
        tags: [Tag.VMWAREWORKSTATION, Tag.LINUX, Tag.UBUNTU, Tag.WORD, Tag.REDES]
      },
      {
        id: 12,
        name: "Ejercicios de shell en Linux",
        pictures: ["https://i.postimg.cc/jq3973QJ/Debian1.png", "https://i.postimg.cc/3Rnq9nsV/Debian2.png", "https://i.postimg.cc/D00MN1FZ/Debian3.png", "https://i.postimg.cc/cCzbG64c/Debian4.png",
          "https://i.postimg.cc/0264dGcX/Debian5.png", "https://i.postimg.cc/K8BsCGXn/Debian6.png", "https://i.postimg.cc/bNKB6G5y/Debian7.png", "https://i.postimg.cc/CK06g3Y9/Debian8.png", "https://i.postimg.cc/W47Yb51z/Debian9.png", "https://i.postimg.cc/pTXG9KmZ/Debian10.png"
        ],
        projectlink: "https://drive.google.com/drive/folders/1EW86A1rSEm1Hcf2Sfbe8ZXucqz79IMev?usp=sharing",
        summary: "Documentación de ejercicios prácticos de comandos en el shell de Linux utilizando la distribución de Debian.",
        description: "Laboratorios realizados a lo largo del curso de \"Sistemas operativos y redes\", donde se pone en practica el uso del shell de Linux y los diferentes aditamentos de este sistema operativo, siendo Debian la distribución utilizada para completar dichos laboratorios. Desde la creación de usuarios en la línea de comando, hasta la creación de scripts.",
        tags: [Tag.VMWAREWORKSTATION, Tag.LINUX, Tag.DEBIAN, Tag.WORD]
      },
      {
        id: 13,
        name: "Modelados en Blender",
        pictures: ["https://i.postimg.cc/tCLTR5sh/Blender1.png", "https://i.postimg.cc/6qq3qbVh/Blender2.png", "https://i.postimg.cc/T2N1FGGN/Blender3.png", "https://i.postimg.cc/NfyFwVjs/Blender4.png",
          "https://i.postimg.cc/pdBXZMqZ/Blender5.png", "https://i.postimg.cc/qRMBDDFd/Blender6.png", "https://i.postimg.cc/Y0Tp9rCp/Blender7.png"
        ],
        projectlink: "https://drive.google.com/drive/folders/1CMqaVsnJhHRAvootUEAK9nsURiRGOjRr?usp=sharing",
        summary: "Modelados en 3D realizados en el software de blender, aplicando texturas, addons, nodos geométricos, nodos de texturas, etc.",
        description: "Modelos y animaciones realizadas a lo largo de la clase de \"Aplicaciones gráficas\", aplicando los conocimientos adquiridos de texturización, addons, nodos geométricos, nodos de texturas, deformaciones, atajos de teclados, etc.",
        tags: [Tag.BLENDER, Tag.PHOTOSHOP]
      },
      {
        id: 14,
        name: "Ejercicios de matematicas en Python.",
        pictures: ["https://i.postimg.cc/vHTDhr8C/Python1.png", "https://i.postimg.cc/ncWrPXCr/Python2.png", "https://i.postimg.cc/T171Gw0k/Python3.png", "https://i.postimg.cc/3rnd2Shg/Python4.png",
          "https://i.postimg.cc/FK5RhwbQ/Python5.png", "https://i.postimg.cc/s2Y2xKKG/Python6.png", "https://i.postimg.cc/0Q9ywmHW/Python7.png", "https://i.postimg.cc/PxKrzxgt/Python8.png", "https://i.postimg.cc/j25q8TTy/Python9.png"
        ],
        projectlink: "https://github.com/J2rg3n-B3rm2d3z/Programas-en-Python-de-Matematicas-1.git",
        summary: "Ejercicios de matemáticas codificados en Python utilizando el programa de Anaconda, y el IDE de Spyder.",
        description: "Códigos realizados como laboratorios en la clase de \"Matemáticas I para computación\", donde se utiliza el lenguaje de Python, con el IDE de Spyder y la distribución de Anaconda. En estos programas se utiliza la librería de Sympy para la resolución de derivadas e integrales, junto con la librería de Matplotlib y numpy para la representación gráfica.",
        tags: [Tag.PYTHON, Tag.SPIDER]
      },
      {
        id: 15,
        name: "Lotería en Turbo C",
        pictures: ["https://i.postimg.cc/MH3T87GC/Loteria1.png", "https://i.postimg.cc/qRLq1VHM/Loteria2.png", "https://i.postimg.cc/cCLHj9d7/Loteria3.png"],
        projectlink: "https://github.com/J2rg3n-B3rm2d3z/Turboc-2.0",
        summary: "Programación de un juego de lotería en el emulador de DOSBOX utilizando Turbo C.",
        description: "Programa realizado en el emulador de Dosbox utilizando Turbo C en la clase de \"Lenguajes de programación\". En este caso se utilizó el modo texto para realizar un juego de lotería, en el cual se le da al usuario la opción de ver la presentación, escoger un número, comenzar a jugar, volver a jugar o salir del programa.",
        tags: [Tag.C, Tag.TURBOC]
      },
      {
        id: 16,
        name: "Registro académico en Turbo C",
        pictures: ["https://i.postimg.cc/28MBgDM0/Registro-Academico1.png", "https://i.postimg.cc/yNz3YTV9/Registro-Academico2.png", "https://i.postimg.cc/j2j7YdRF/Registro-Academico3.png",
          "https://i.postimg.cc/ryh4CWJX/Registro-Academico4.png", "https://i.postimg.cc/KvRM9zqK/Registro-Academico5.png", "https://i.postimg.cc/7hQTH86Y/Registro-Academico6.png",
          "https://i.postimg.cc/dVCTYfKw/Registro-Academico7.png", "https://i.postimg.cc/7LMGCT6R/Registro-Academico8.png"
        ],
        projectlink: "https://github.com/J2rg3n-B3rm2d3z/Turboc-2.0",
        summary: "Programación de un sistema de registro académico en el emulador de DOSBOX utilizando Turbo C.",
        description: "Programa realizado en el emulador de Dosbox utilizando Turbo C en la clase de \"Lenguajes de programación\". En este caso se utilizó el modo texto para realizar un sistema de registro académico, haciendo uso de ficheros de textos y binarios, permitiendo agregar un alumno, editar su información personal y sus notas, y agregar o dar de baja clases del semestre.",
        tags: [Tag.C, Tag.TURBOC]
      },
      {
        id: 17,
        name: "Pong en Turbo C",
        pictures: [
          "https://i.postimg.cc/SsCYtLvD/Pong1.png", "https://i.postimg.cc/J73BNqJh/Pong2.png", "https://i.postimg.cc/T1cLTdGb/Pong3.png",
          "https://i.postimg.cc/ZnmvkBkZ/Pong4.png", "https://i.postimg.cc/Fs9kDLgV/Pong5.png", "https://i.postimg.cc/9FJRSQL5/Pong6.png",
          "https://i.postimg.cc/HkncC1NJ/Pong7.png", "https://i.postimg.cc/13dgmYxv/Pong8.png"
        ],
        projectlink: "https://github.com/J2rg3n-B3rm2d3z/Turboc-2.0",
        summary: "Programación de un juego de Pong en el emulador de DOSBOX utilizando Turbo C por medio de sus primitivas graficas.",
        description: "Proyecto de fin de curso realizado en el emulador de Dosbox utilizando Turbo C en la clase de \"Lenguajes de programación\". En este caso se utilizó las primitivas graficas para realizar un juego de Pong, teniendo una pantalla principal, una pantalla de presentación, la pantalla de selección de juego, una ayuda, registros de las personas que jugaron y mejores puntuaciones en el juego. ",
        tags: [Tag.C, Tag.TURBOC]
      },
      {
        id: 18,
        name: "Geometría computacional en Turbo C",
        pictures: ["https://i.postimg.cc/ZRYDPhxL/Geometria-Computacional1.png", "https://i.postimg.cc/257KB5h6/Geometria-Computacional2.png", "https://i.postimg.cc/Qd5PhmMc/Geometria-Computacional3.png", "https://i.postimg.cc/mrsnD9cJ/Geometria-Computacional4.png"],
        projectlink: "https://github.com/J2rg3n-B3rm2d3z/Cierre-Convexo-C",
        summary: "Programación de tres algoritmos de cierres convexos y un algoritmo para realizar un diagrama de Voronoi, en el emulador de DOSBOX utilizando Turbo C por medio de sus primitivas graficas.",
        description: "Programas realizados en el emulador de Dosbox utilizando Turbo C en la clase de \"Geometría computacional\". Se realizó 3 algoritmos de cierres convexos en lenguaje C, siendo el primer algoritmo de Gift Wrapping, el segundo de Graham Scan y el tercero de Quick Hull, además se hizo un codigo de barrido para la creación de diagramas de Voronoi.",
        tags: [Tag.C, Tag.TURBOC]
      },
      {
        id: 19,
        name: "Aeropuerto en Turbo C",
        pictures: ["https://i.postimg.cc/cHX1T0y1/Aeropuerto1.png", "https://i.postimg.cc/zvvzc68C/Aeropuerto2.png", "https://i.postimg.cc/KzZvn4Ws/Aeropuerto3.png", "https://i.postimg.cc/fyPznCR6/Aeropuerto4.png",
          "https://i.postimg.cc/7YCP1FBD/Aeropuerto5.png", "https://i.postimg.cc/QNYxT8J0/Aeropuerto6.png", "https://i.postimg.cc/QxR8ffP7/Aeropuerto7.png"
        ],
        projectlink: "https://github.com/J2rg3n-B3rm2d3z/Aeropuerto-Turbo-C",
        summary: "Programación de una simulación de la cabina de un aeropuerto en el emulador de DOSBOX utilizando Turbo C por medio de sus primitivas graficas.",
        description: "Programa realizado en el emulador de Dosbox utilizando Turbo C en la clase de \"Geometría computacional\". Se realizo un simulador de una cabina de un aeropuerto en lenguaje C por medio de las primitivas gráficas. En esta simulación, se ingresa el registro del boleto del avión indicando al país al que va, se simula el despeje del avión y se monitorea el transcurso del viaje hasta llegar a su destino, y por último se da la opción de ver el registro de salida y llegada de los aviones.",
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

      if (foundAll) { //If state true push to de filtered projects.
        filteredProjects.push(project);
      }

    })

    return filteredProjects;

  }


}
