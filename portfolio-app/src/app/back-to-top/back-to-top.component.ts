import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-back-to-top',
  templateUrl: './back-to-top.component.html',
  styleUrls: ['./back-to-top.component.scss'],
  standalone: false
})
export class BackToTopComponent {
  showBackToTop = false;

  // Sprawdzamy pozycję przewijania, aby pokazać/ukryć przycisk
  @HostListener('window:scroll')
  onScroll() {
    this.showBackToTop = window.scrollY > 200; // Pokazuje się po przewinięciu 200px
  }

  // Przewija na górę strony
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}