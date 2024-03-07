import { Component } from '@angular/core';
import { WhyUsComponent } from '../why-us/why-us.component';
import { SkillsComponent } from '../skills/skills.component';
import { CtaComponent } from '../cta/cta.component';
import { PricingComponent } from '../pricing/pricing.component';
import { FaqComponent } from '../faq/faq.component';


@Component({
  selector: 'app-about',
  standalone: true,
  imports: [WhyUsComponent,SkillsComponent,CtaComponent,PricingComponent,FaqComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
