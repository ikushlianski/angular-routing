import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute } from '@angular/router';
import { AlbumService } from './album.service';

@Component({
  selector: 'album-detail',
  templateUrl: 'album-detail.component.html'
})
export class AlbumDetailComponent implements OnInit, OnDestroy {

  album;
  paramsSubscription: Subscription;

  constructor(private albumService: AlbumService,
              private route:ActivatedRoute) { }

  ngOnInit(){
    this.paramsSubscription = this.route.params.subscribe(params => {
      this.album = this.albumService.getAlbum(params['albumId']);
    });
  }

  ngOnDestroy(){
    this.paramsSubscription.unsubscribe();
  }

}
