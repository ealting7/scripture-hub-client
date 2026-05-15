import { Component, input, signal } from '@angular/core';
import { Title } from '../components/title/title';
import { SelectedNavigation } from '../components/selected-navigation/selected-navigation';

@Component({
  selector: 'app-header',
  imports: [Title, SelectedNavigation],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {

}
