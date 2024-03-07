import { Component, inject } from '@angular/core';
import { ConfigItem } from '../../services/config-item';
import { ConfigService } from '../../services/config.service';
@Component({
  selector: 'app-cta',
  standalone: true,
  imports: [],
  templateUrl: './cta.component.html',
  styleUrl: './cta.component.css'
})
export class CtaComponent {

  header!: ConfigItem| undefined;
  configService: ConfigService = inject(ConfigService);

  constructor() {
    //this.header=this.configService.getPageByName("cta");
    this.configService.getPageById(1).subscribe(
      (response) =>this.header=response

    );
  }
 
}
