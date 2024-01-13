import { Routes } from '@angular/router';
import { OrganizationsListComponent } from './pages/organizations-list/organizations-list.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { LayoutComponent } from './pages/base/layout/layout.component';
import { IdentityLayoutComponent } from './pages/base/identity-layout/identity-layout.component';

export const routes: Routes = [
    {
        path: "",
        component: LayoutComponent,
        children: [
            {
                path: '',
                redirectTo: 'organizations-list',
                pathMatch: 'full',
            },
            {
                path: 'organizations-list',
                component: OrganizationsListComponent,
                data: { title: 'Organizations list' }
            }
        ]
    },
    {
        path: "account",
        component: IdentityLayoutComponent,
        children: [
            {
                path: "sign-up",
                component: SignUpComponent
            },
            {
                path: "sign-in",
                component: SignInComponent
            },
        ]
    }
];
