import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { LayoutService } from '../../../../core/services/layout.service';

@Component({
  selector: 'sidebar-community',
  imports: [MatIconModule, CommonModule],
  templateUrl: './community.html',
  styleUrl: './community.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Community {

  private layoutService = inject(LayoutService);
  isOpenCommunity = input(true);

  public handleSelectNaviationItem(event: Event, navigationItem: string) {
    event.preventDefault();
    this.layoutService.handleSelectNaviationItem(navigationItem);
  }
}
