import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { LayoutService } from '../../../../core/services/layout.service';

@Component({
  selector: 'sidebar-church',
  imports: [MatIconModule, CommonModule],
  templateUrl: './church.html',
  styleUrl: './church.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Church {

  private layoutService = inject(LayoutService)
  isOpenChurch = input(true);

  public handleSelectNaviationItem(event: Event, navigationItem: string) {
    event.preventDefault();
    this.layoutService.handleSelectNaviationItem(navigationItem);
  }
}
