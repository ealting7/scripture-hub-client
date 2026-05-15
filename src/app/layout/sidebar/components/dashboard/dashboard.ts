import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { LayoutService } from '../../../../core/services/layout.service';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'sidebar-dashboard',
  imports: [CommonModule, MatIconModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Dashboard {

  private layoutService = inject(LayoutService);
  isOpenDashboard = input(true);

  public handleSelectNaviationItem(event: Event, navigationItem: string) {
    event.preventDefault();
    this.layoutService.handleSelectNaviationItem(navigationItem);
  }
}
