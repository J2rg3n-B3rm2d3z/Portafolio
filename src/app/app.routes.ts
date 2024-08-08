import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { EducationComponent } from './education/education.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { TechnologyComponent } from './technology/technology.component';

export const routes: Routes = [
    {path: 'inicio', component:HomeComponent},
    {path: 'contactos', component:ContactComponent},
    {path: 'educacion', component:EducationComponent},
    {path: 'portafolio', component:PortfolioComponent},
    {path: 'tecnologias', component:TechnologyComponent},
    { path: '', redirectTo: '/inicio', pathMatch: 'full' },
    { path: '**', redirectTo: '/inicio', pathMatch: 'full' }
];
