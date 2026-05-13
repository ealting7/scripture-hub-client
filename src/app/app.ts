import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Sidebar } from './layout/sidebar/pages/sidebar';
import { Header } from './layout/header/pages/header';
import { MatSidenavModule } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Sidebar, Header, MatSidenavModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {

  protected readonly title = signal('scripture-hub-client');
  sidebarCollapsed = signal(false);

  toggleSidebar() {
    this.sidebarCollapsed.update(collapsed => !collapsed);
  }
}
