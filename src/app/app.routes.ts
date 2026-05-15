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
    },
    {
        path: 'bible-reader',
        loadComponent: () => import('./core/features/bible-reader/pages/bible-reader').then(m => m.BibleReader),
        pathMatch: 'full'
    },
    {
        path: 'my-journal',
        loadComponent: () => import('./core/features/my-journal/pages/my-journal').then(m => m.MyJournal),
        pathMatch: 'full'
    },
    {
        path: 'sermon-study',
        loadComponent: () => import('./core/features/sermon-study/pages/sermon-study').then(m => m.SermonStudy),
        pathMatch: 'full'
    },
    {
        path: 'prayer-tracker',
        loadComponent: () => import('./core/features/prayer-tracker/pages/prayer-tracker').then(m => m.PrayerTracker),
        pathMatch: 'full'
    },
    {
        path: 'my-groups',
        loadComponent: () => import('./core/features/my-groups/pages/my-groups').then(m => m.MyGroups),
        pathMatch: 'full'
    },
    {
        path: 'giving-portal',
        loadComponent: () => import('./core/features/giving-portal/pages/giving-portal').then(m => m.GivingPortal),
        pathMatch: 'full'
    },
    {
        path: 'marketplace',
        loadComponent: () => import('./core/features/marketplace/pages/marketplace').then(m => m.Marketplace),
        pathMatch: 'full'
    },
    {
        path: 'user-profile',
        loadComponent: () => import('./core/features/user-profile/pages/user-profile').then(m => m.UserProfile),
        pathMatch: 'full'
    }
];
