import { Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ClientsComponent } from './components/clients/clients.component';
import { ContactComponent } from './components/contact/contact.component';
import { CtaComponent } from './components/cta/cta.component';
import { FaqComponent } from './components/faq/faq.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { ServicesComponent } from './components/services/services.component';
import { SkillsComponent } from './components/skills/skills.component';
import { TeamComponent } from './components/team/team.component';
import { WhyUsComponent } from './components/why-us/why-us.component';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { MutugeModule } from './mutuge/mutuge.module';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,RouterOutlet,RouterLink, MutugeModule, RouterLinkActive,AboutComponent,ClientsComponent,ContactComponent,CtaComponent,FaqComponent,FooterComponent,HeaderComponent,
  HeroComponent,PortfolioComponent,PricingComponent,ServicesComponent,SkillsComponent,TeamComponent,WhyUsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  ngOnInit() {
    AOS.init();
  }
  title = 'Ian ';
}
