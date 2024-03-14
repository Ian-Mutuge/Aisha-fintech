import { Component} from '@angular/core';
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

  constructor(private cnf : ConfigService) {
    //this.header=this.configService.getPageByName("cta");
    this.cnf.getPageById(1).subscribe(
      (response) =>this.header=response

    );
  }
 
}
