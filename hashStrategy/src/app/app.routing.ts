import { RouterModule } from '@angular/router';
import { ArtistListComponent } from './artist/artist-list.component';
import { ArtistDetailComponent } from './artist/artist-detail.component';
import { AlbumListComponent } from './album/album-list.component';
import {LoginFormComponent} from './login/login-form.component';
import { AlbumDetailComponent } from './album/album-detail.component';
import {LoggedInGuard} from './login/logged-in.guard';

export const routing = RouterModule.forRoot([
  {
    path: 'artists',
    component: ArtistListComponent
  },
  {
    path: 'albums',
    component: AlbumListComponent
  },
  {
    path: 'artists/:artistId',
    component: ArtistDetailComponent
  },
  {
    path: 'albums/:albumId',
    component: AlbumDetailComponent,
    canActivate: [LoggedInGuard]
  },
  {
    path: 'login',
    component: LoginFormComponent
  },
  {
    path: '',
    redirectTo: '/artists',
    pathMatch: 'full'
  }
]);
