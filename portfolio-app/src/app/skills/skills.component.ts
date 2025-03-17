import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  standalone: false
})
export class SkillsComponent implements AfterViewInit {
  @ViewChild('section') section!: ElementRef;
  skills: string[] = [];

  async ngAfterViewInit() {
    const response = await fetch('./assets/skills.json');
    this.skills = await response.json();

    this.section.nativeElement.animate(
      [
        { opacity: 0, transform: 'translateY(20px)' },
        { opacity: 1, transform: 'translateY(0)' }
      ],
      {
        duration: 500,
        easing: 'ease-in-out',
        fill: 'forwards'
      }
    );
  }
}