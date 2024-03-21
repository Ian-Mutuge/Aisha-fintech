import { Routes, mapToResolve } from '@angular/router';
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
import { MpesaComponent } from './mutuge/mpesa/mpesa.component';


export const routes: Routes = [
    { path: '',   redirectTo: '/hero', pathMatch: 'full' }, // redirect to `hero`,
    {title: "Ian's Template |About",path: 'about', component: AboutComponent },
    {title: "Ian's Template |Home",path: 'hero', component: HeroComponent },
    {title: "Ian's Template |Services",path: 'services', component: ServicesComponent },
    {title: "Ian's Template |Contact",path: 'contact', component: ContactComponent },
    {title: "Ian's Template |Portfolio",path: 'portfolio', component: PortfolioComponent },
    {title: "Ian's Template |Team",path: 'team', component: TeamComponent },
    {title: "Ian's Template |Footer",path: 'footer', component: FooterComponent },
    {title: "Ian's Template |Pricing",path: 'pricing', component: PricingComponent },
    {title: "Ian's Template |Mpesa",path: 'mpesa', component: MpesaComponent },
    //{title: "Ian's Template |Mpesa success",path: 'stk_initiate.php', component: MpesaComponent },
];
