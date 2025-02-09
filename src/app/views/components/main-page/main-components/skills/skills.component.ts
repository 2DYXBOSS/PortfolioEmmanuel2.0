import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {

  projecturl = "https://emmanueldedy.onrender.com/"


  constructor() { }

  recupUrl(url: string) {
    this.projecturl = url
  }


  
}
