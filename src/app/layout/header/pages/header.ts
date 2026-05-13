import { Component } from '@angular/core';
import { Title } from '../components/title/title';

@Component({
  selector: 'app-header',
  imports: [Title],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header { }
