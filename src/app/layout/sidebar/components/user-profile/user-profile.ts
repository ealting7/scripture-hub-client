import { Component, inject, input } from '@angular/core';
import { LayoutService } from '../../../../core/services/layout.service';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'sidebar-user-profile',
  imports: [MatButtonModule],
  templateUrl: './user-profile.html',
  styleUrl: './user-profile.scss',
})
export class UserProfile {

  private layoutService = inject(LayoutService);
  isOpenProfile = input(true);

  public handleSelectNaviationItem(event: Event, navigationItem: string) {
    event.preventDefault();
    this.layoutService.handleSelectNaviationItem(navigationItem);
  }
}
