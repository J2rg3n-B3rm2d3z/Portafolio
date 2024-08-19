import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Education, Phase_education } from '../_models/Education';
import { NgFor, NgIf } from '@angular/common';
import { EducationService } from '../_services/education.service';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent implements OnInit {
  isLoading = false;
  phases = {} as Phase_education[]

  constructor(private tittleService: Title, private educationService: EducationService) {
    this.tittleService.setTitle('Jurgen Bermúdez - Educación');
  }

  ngOnInit(): void {
    this.isLoading = true;
    this.educationService.GetPhase_education().subscribe(
      phases => {
        this.phases = phases;
        this.phases.sort((a, b) => { return a.id - b.id });
        this.phases.forEach(element => {
          element.education.sort((a, b) => { return a.id - b.id });
        });
        this.isLoading = false;
      },
      error => {
        console.error('Error al cargar los datos', error);
        this.isLoading = true;
      }
    )
  }

}
