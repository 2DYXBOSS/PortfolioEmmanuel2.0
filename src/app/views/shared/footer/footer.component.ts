
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  contactForm: FormGroup;



  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      const formData = this.contactForm.value;
      console.log('Form Data:', formData);
      alert('Message envoyé avec succès !');
      this.contactForm.reset();
    }
  }


 

  

  // ngOnInit() {
  //   this.getRecommendation();
  // }

  // getRecommendation() {
  //   this.recommendationService.getRecommendation().subscribe(
  //     (data) => {
  //       this.testimonials = data;
  //       console.log("Recommendations:", this.testimonials);
        
  //     },
  //     (error) => {
  //       console.error('Error fetching recommendations:', error);
  //     }
  //   );
  // }
}


