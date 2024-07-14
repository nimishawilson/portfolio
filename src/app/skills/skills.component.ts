import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ChipComponent } from '../components/chip/chip.component';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, ChipComponent],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {
  skills = [
    'Angular',
    'NestJS',
    'Html',
    'Css',
    'Javascript',
    'Typescript',
    'Tailwind',
    'Bootstrap',
    'Angular material',
    'PrimeNG',
    'RxJs',
    'NgRx',
    'git',
  ];
}
