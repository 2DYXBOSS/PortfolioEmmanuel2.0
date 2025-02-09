

import { Component, Input } from '@angular/core';
import { Color, ScaleType } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-site-visits-chart',
  templateUrl: './site-visits-chart.component.html',
  styleUrls: ['./site-visits-chart.component.css'],
})
export class SiteVisitsChartComponent {
  @Input() data: any[] = []; // Données à afficher
  @Input() colorScheme: Color = {
    name: 'custom',
    selectable: true,
    group: ScaleType.Ordinal,
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA'], // Couleurs personnalisées
  };
}