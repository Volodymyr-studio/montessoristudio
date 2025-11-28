import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { MmHeadComponent } from './mm-head/mm-head.component';
import { MmFooterComponent } from './mm-footer/mm-footer.component';
import { MmBodyComponent } from './mm-body/mm-body.component';

@Component({
  selector: 'app-root',
  imports: [MmHeadComponent, MmBodyComponent, MmFooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor(private titleService: Title, private metaService: Meta) {
    this.titleService.setTitle('Світ у кожній дитині | Montessori studio');
    this.metaService.updateTag({
      name: 'description',
      content: 'Висококваліфіковані та ліцензійовані фахівці'
    });
  }
}
