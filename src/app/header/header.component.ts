import { Component } from '@angular/core';
import { DateTime } from 'luxon';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  time = DateTime.now().toFormat('HH\'h\'mm');
}
