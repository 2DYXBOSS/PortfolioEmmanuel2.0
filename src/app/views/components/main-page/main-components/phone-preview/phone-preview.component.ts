import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-phone-preview',
  templateUrl: './phone-preview.component.html',
  styleUrls: ['./phone-preview.component.css']
})
export class PhonePreviewComponent {

  @Input() siteUrl: string = ''; 
}




