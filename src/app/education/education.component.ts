import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Education, Phase_education } from '../_models/Education';
import { NgFor } from '@angular/common';
import { EducationService } from '../_services/education.service';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [NgFor],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent implements OnInit {
  phases = {} as Phase_education[]

  constructor(private tittleService: Title, private educationService: EducationService) {
    this.tittleService.setTitle('Jurgen Bermúdez - Educación');
  }

  ngOnInit(): void {
    this.phases = this.educationService.GetPhase_education();
  }

}
