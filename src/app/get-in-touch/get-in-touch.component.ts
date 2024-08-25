import { Component } from '@angular/core';
import { ContactCardComponent } from '../components/contact-card/contact-card.component';

@Component({
  selector: 'app-get-in-touch',
  standalone: true,
  imports: [ContactCardComponent],
  templateUrl: './get-in-touch.component.html',
  styleUrl: './get-in-touch.component.scss'
})
export class GetInTouchComponent {

}
