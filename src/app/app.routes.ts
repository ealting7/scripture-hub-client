import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./core/features/dashboard/pages/dashboard').then(m => m.Dashboard),
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        loadComponent: () => import('./core/features/dashboard/pages/dashboard').then(m => m.Dashboard),
        pathMatch: 'full'
    }
];
