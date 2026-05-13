import { Component, input, ChangeDetectionStrategy } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { Study } from '../components/study/study';
import { Community } from '../components/community/community';
import { Church } from '../components/church/church';

@Component({
  selector: 'app-sidebar',
  imports: [MatButtonModule, MatIconModule, CommonModule, Study, Community, Church],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Sidebar {
  toggleSidebar = input<() => void>(() => { });
  isOpen = input(true);

  onToggle() {
    this.toggleSidebar()();
  }
}
