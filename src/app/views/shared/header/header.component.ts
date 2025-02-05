import { Component , HostListener } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {


  single: any[] = [];

  constructor() { }





  isScrolled = false; // Indique si la page est défilée
  activeLink: string = 'home'; // Le lien actif par défaut

  // Écoute les événements de défilement
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollPosition =
      window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;

    // Ajoute ou supprime la classe en fonction du défilement
    this.isScrolled = scrollPosition > 50;

    // Gère l'activation dynamique des liens
    this.updateActiveLink();
  }

  // Met à jour le lien actif en fonction de la position de défilement
  // updateActiveLink() {
  //   const sections = document.querySelectorAll('section');
  //   const scrollPosition = window.scrollY + 100; // Ajuste selon la hauteur de la navbar

  //   sections.forEach((section) => {
  //     const id = section.getAttribute('id');
  //     if (
  //       id &&
  //       scrollPosition >= section.offsetTop &&
  //       scrollPosition < section.offsetTop + section.offsetHeight
  //     ) {
  //       this.activeLink = id;
  //     }
  //   });
  // }

  updateActiveLink() {
    const sections = document.querySelectorAll('section');
    const scrollPosition = window.scrollY + 100; // Ajuste selon la hauteur de la navbar
  
    let activeId = 'home'; // Par défaut, reste sur "home"
  
    sections.forEach((section) => {
      const id = section.getAttribute('id');
      if (
        id &&
        scrollPosition >= section.offsetTop &&
        scrollPosition < section.offsetTop + section.offsetHeight
      ) {
        activeId = id; // Change l'ID actif seulement si on est sur une autre section
      }
    });
  
    this.activeLink = activeId;
  }
  
}
