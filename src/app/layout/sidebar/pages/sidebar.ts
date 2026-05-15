import { Component, input, ChangeDetectionStrategy, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { Dashboard } from '../components/dashboard/dashboard';
import { Study } from '../components/study/study';
import { Community } from '../components/community/community';
import { Church } from '../components/church/church';
import { UserProfile } from '../components/user-profile/user-profile';

@Component({
  selector: 'app-sidebar',
  imports: [MatButtonModule, MatIconModule, CommonModule, Dashboard, Study, Community, Church, UserProfile],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Sidebar {

  toggleSidebar = input<() => void>(() => { });
  isOpenSidebar = input(true);
  incomingSidebarNavigationItem = signal('');

  onToggle() {
    this.toggleSidebar()();
  }
}
