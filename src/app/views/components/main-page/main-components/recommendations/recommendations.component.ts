import { Component } from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';


@Component({
  selector: 'app-recommendations',
  templateUrl: './recommendations.component.html',
  styleUrls: ['./recommendations.component.css'],
  animations: [
    trigger('fadeIn', [
      state('void', style({ opacity: 0, transform: 'translateY(20px)' })),
      transition('void => *', [
        animate('600ms ease-out')
      ]),
    ]),
  ],
})
export class RecommendationsComponent {
  testimonials = [
    {
      name: 'John Doe',
      title: 'CEOExampleCorp@gmail.com',
      message: 'This product is fantastic! It has changed the way we work.This product is fantastic! It has changed the way we work.',
      image: 'imageb.png',
    },
    {
      name: 'Jane Smith',
      title: 'CEOExampleCorp@gmail.com',
      message: 'A game-changer for our company. Highly recommend it!This product is fantastic! It has changed the way we work.',
      image: 'imageb.png',
    },
    {
      name: 'Sarah Connor',
      title: 'CEOExampleCorp@gmail.com',
       message: 'A game-changer for our company. Highly recommend it!This product is fantastic! It has changed the way we work.',
      image: 'imageb.png',
    },
    {
      name: 'John Doe',
      title: 'CEOExampleCorp@gmail.com',
      message: 'This product is fantastic! It has changed the way we work.This product is fantastic! It has changed the way we work.',
      image: 'imageb.png',
    },
    {
      name: 'Jane Smith',
      title: 'CEOExampleCorp@gmail.com',
       message: 'A game-changer for our company. Highly recommend it!This product is fantastic! It has changed the way we work.',
      image: 'imageb.png',
    },
    {
      name: 'Sarah Connor',
      title: 'CEOExampleCorp@gmail.com',
       message: 'A game-changer for our company. Highly recommend it!This product is fantastic! It has changed the way we work.',
      image: 'imageb.png',
    },
  ];
}
