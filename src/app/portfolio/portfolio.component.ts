import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProjectCardComponent } from "../project-card/project-card.component";
import { Project } from '../_models/Project';
import { NgFor } from '@angular/common';
import { ProjectsService } from '../_services/projects.service';
import { FormsModule } from '@angular/forms';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { Tag } from '../_models/Tag';
import bootstrap from '../../main.server';
@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [ProjectCardComponent, NgFor, FormsModule, CollapseModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent implements OnInit {

  projects = {} as Project[];

  isCollapse: boolean = true;

  typescript: boolean = false;
  python: boolean = false;
  javascript: boolean = false;
  csharp: boolean = false;
  java: boolean = false;
  kotlin: boolean = false;
  c: boolean = false;
  cplusplus: boolean = false;
  visualbasic: boolean = false;
  css: boolean = false;
  html: boolean = false;
  xml: boolean = false;

  angular: boolean = false;
  nodejs: boolean = false;
  aspnet: boolean = false;
  react: boolean = false;
  bootstrap: boolean = false;

  androidstudio: boolean = false;
  turboc: boolean = false;
  sqlservermanagement: boolean = false;
  visualstudiocode: boolean = false;
  visualstudiocommunity: boolean = false;
  spyder: boolean = false;

  sqlite: boolean = false;
  sqlserver: boolean = false;
  firebase: boolean = false;

  jwt: boolean = false;
  redux: boolean = false;
  figma: boolean = false;
  drawio: boolean = false;
  wpf: boolean = false;
  blender: boolean = false;
  photoshop: boolean = false;
  illustrator: boolean = false;
  word: boolean = false;
  project: boolean = false;
  excel: boolean = false;
  redes: boolean = false;
  virtualbox: boolean = false;
  vmware: boolean = false;
  googlecolab: boolean = false;
  ia: boolean = false;

  windowsserver: boolean = false;
  linux: boolean = false;
  ubuntu: boolean = false;
  debian: boolean = false;
  kalilinux: boolean = false;

  filtering: boolean = false;

  constructor(private tittleService: Title, private projectService: ProjectsService) {
    this.tittleService.setTitle('Jurgen Bermúdez - Portafolio');

  }

  ngOnInit(): void {
    this.projects = this.projectService.GetProjects(); //Get all the projects from services.
  }


  /*
    When select or change a tag throught the chechbox, it's call this function that call a function from service,
    giving it as parameters, the array of Tags, and return the projects whith the tags that checkbox is true.
    For each change this always array start empty, the Tags that is true push in the array of tags when execute the code.
    */

  Filter() {
    let filterTags: Tag[] = [];

    if (this.typescript) {
      filterTags.push(Tag.TYPESCRIPT)
    }
    if (this.javascript) {
      filterTags.push(Tag.JAVASCRIPT)
    }
    if (this.python) {
      filterTags.push(Tag.PYTHON)
    }
    if (this.csharp) {
      filterTags.push(Tag.CSHARP)
    }
    if (this.java) {
      filterTags.push(Tag.JAVA)
    }
    if (this.kotlin) {
      filterTags.push(Tag.KOTLIN)
    }
    if (this.c) {
      filterTags.push(Tag.C)
    }
    if (this.cplusplus) {
      filterTags.push(Tag.CPLUSPLUS)
    }
    if (this.visualbasic) {
      filterTags.push(Tag.VISUALBASIC)
    }
    if (this.css) {
      filterTags.push(Tag.CSS)
    }
    if (this.html) {
      filterTags.push(Tag.HTML)
    }


    if (this.angular) {
      filterTags.push(Tag.ANGULAR)
    }
    if (this.nodejs) {
      filterTags.push(Tag.NODEJS)
    }
    if (this.aspnet) {
      filterTags.push(Tag.ASPNET)
    }
    if (this.react) {
      filterTags.push(Tag.REACT)
    }
    if (this.bootstrap) {
      filterTags.push(Tag.BOOTSTRAP)
    }

    if (this.androidstudio) {
      filterTags.push(Tag.ANDROIDSTUDIO)
    }
    if (this.turboc) {
      filterTags.push(Tag.TURBOC)
    }
    if (this.sqlservermanagement) {
      filterTags.push(Tag.SQLSERVERMANAGEMENT)
    }
    if (this.visualstudiocode) {
      filterTags.push(Tag.VISUALSTUDIOCODE)
    }
    if (this.visualstudiocommunity) {
      filterTags.push(Tag.VISUALSTUDIO)
    }
    if(this.spyder){
      filterTags.push(Tag.SPIDER)
    }

    if (this.sqlite) {
      filterTags.push(Tag.SQLITE)
    }
    if (this.sqlserver) {
      filterTags.push(Tag.SQLSERVER)
    }
    if (this.firebase) {
      filterTags.push(Tag.FIREBASE)
    }

    if (this.jwt) {
      filterTags.push(Tag.JWT)
    }
    if (this.redux) {
      filterTags.push(Tag.REDUX)
    }
    if (this.figma) {
      filterTags.push(Tag.FIGMA)
    }
    if (this.drawio) {
      filterTags.push(Tag.DRAWIO)
    }
    if (this.wpf) {
      filterTags.push(Tag.WPF)
    }
    if (this.blender) {
      filterTags.push(Tag.BLENDER)
    }
    if (this.photoshop) {
      filterTags.push(Tag.PHOTOSHOP)
    }
    if (this.illustrator) {
      filterTags.push(Tag.ILLUSTRADOR)
    }
    if (this.word) {
      filterTags.push(Tag.WORD)
    }
    if (this.project) {
      filterTags.push(Tag.PROJECT)
    }
    if (this.excel) {
      filterTags.push(Tag.EXCEL)
    }

    if (this.windowsserver) {
      filterTags.push(Tag.WINDOWSSERVER)
    }
    if (this.linux) {
      filterTags.push(Tag.LINUX)
    }
    if (this.ubuntu) {
      filterTags.push(Tag.UBUNTU)
    }
    if (this.debian) {
      filterTags.push(Tag.DEBIAN)
    }
    if (this.kalilinux) {
      filterTags.push(Tag.KALILINUX)
    }


    if (this.redes) {
      filterTags.push(Tag.REDES)
    }
    if (this.virtualbox) {
      filterTags.push(Tag.VIRTUALBOX)
    }
    if(this.vmware){
      filterTags.push(Tag.VMWAREWORKSTATION)
    }
    if (this.googlecolab) {
      filterTags.push(Tag.GOOGLECOLAB)
    }
    if (this.ia) {
      filterTags.push(Tag.IA)
    }
    if (this.xml) {
      filterTags.push(Tag.XML)
    }

    if (
      this.typescript ||
      this.javascript ||
      this.python ||
      this.csharp ||
      this.java ||
      this.kotlin ||
      this.c ||
      this.cplusplus ||
      this.visualbasic ||
      this.css ||
      this.html ||

      this.angular ||
      this.nodejs ||
      this.aspnet ||
      this.react ||
      this.bootstrap ||

      this.androidstudio ||
      this.sqlservermanagement ||
      this.visualstudiocode ||
      this.visualstudiocommunity ||
      this.turboc ||
      this.spyder ||

      this.sqlite ||
      this.sqlserver ||
      this.firebase ||

      this.jwt ||
      this.redux ||
      this.figma ||
      this.drawio ||
      this.wpf ||
      this.blender ||
      this.photoshop ||
      this.illustrator ||
      this.word ||
      this.project ||
      this.excel ||

      this.windowsserver ||
      this.linux ||
      this.ubuntu ||
      this.debian ||
      this.kalilinux ||

      this.redes ||
      this.xml ||
      this.virtualbox ||
      this.vmware ||
      this.googlecolab ||
      this.ia

    ) {
      this.filtering = true;
    } else {
      this.filtering = false; //This variable is for show reset button.
    }

    this.projects = this.projectService.GetProjectByFilter(filterTags); //Get the list of projects.
  }

  //Reset all.

  ResetFilters() {
    this.typescript = false;//
    this.python = false;//
    this.javascript = false;//
    this.csharp = false;//
    this.java = false;//
    this.kotlin = false;//
    this.c = false;//
    this.cplusplus = false;//
    this.visualbasic = false;//
    this.css = false;//
    this.html = false;


    this.angular = false;
    this.nodejs = false;
    this.aspnet = false;
    this.react = false;
    this.bootstrap = false;

    this.androidstudio = false;
    this.turboc = false;
    this.sqlservermanagement = false;
    this.visualstudiocode = false;
    this.visualstudiocommunity = false;
    this.spyder = false;

    this.sqlite = false;
    this.sqlserver = false;
    this.firebase = false;

    this.jwt = false;
    this.redux = false;

    this.figma = false;
    this.drawio = false;
    this.wpf = false;
    this.blender = false;
    this.photoshop = false;
    this.illustrator = false;
    this.word = false;
    this.project = false;
    this.excel = false

    this.windowsserver = false;
    this.linux = false;
    this.ubuntu = false;
    this.debian = false;
    this.kalilinux = false;

    this.redes = false;
    this.xml = false;
    this.virtualbox = false;
    this.vmware = false;
    this.googlecolab = false;
    this.ia = false;

    this.filtering = false;

    this.projects = this.projectService.GetProjects();
  }
}

//Probably, optimize the code.