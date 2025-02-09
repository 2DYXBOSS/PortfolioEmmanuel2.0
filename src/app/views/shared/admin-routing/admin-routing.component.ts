import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
@Component({
  selector: 'app-admin-routing',
  templateUrl: './admin-routing.component.html',
  styleUrls: ['./admin-routing.component.css']
})
export class AdminRoutingComponent implements OnInit{
  pageTitle: string = '';  // Pour stocker le titre dynamique
  breadcrumbs: string[] = []; 
  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  // Si la route actuelle est admin/ je la redirige directement sur admin/home
  // je veux une fonction qui sera declancher automatique 
  // Cette méthode sera appelée lors de l'initialisation du composant
  ngOnInit(): void {
    // Vérifie si l'URL actuelle est "admin/"
    if (this.router.url === '/admin') {
      // Si c'est le cas, redirige vers "admin/home"
      this.router.navigate(['/admin/home']);
    }


     // Écoute du changement de route
     this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      // Mise à jour du titre et des breadcrumbs
      this.updateBreadcrumbsAndTitle();
    });

    // Initialiser dès le début
    this.updateBreadcrumbsAndTitle();
  }

  // Fonction pour naviguer vers une route
  navigateTo(route: string) {
    this.router.navigate([route]);
  }



  // Fonction pour mettre à jour le titre et les breadcrumbs en fonction de la route
  private updateBreadcrumbsAndTitle() {
    const routeData = this.activatedRoute.snapshot.firstChild?.data;
    if (routeData) {
      this.pageTitle = routeData['title'] || 'Dashboard';
      this.breadcrumbs = routeData['breadcrumbs'] || ['Home', 'Dashboard'];
    }
  }
}
