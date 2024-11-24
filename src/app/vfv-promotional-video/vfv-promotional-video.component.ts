import { Component, OnInit, signal, ViewChild } from '@angular/core';
import { YouTubePlayer } from '@angular/youtube-player';

@Component({
  selector: 'app-vfv-promotional-video',
  imports: [YouTubePlayer],
  template: `
  <div class="video-container">
  <youtube-player #yt videoId="QhV26yyqVrg" disablePlaceholder [width]="this.width()" [height]="this.height()" [playerVars]="playerVars" (stateChange)="onYoutubeVideoStateChange($event)" />

</div>
  `,
  styleUrl: './vfv-promotional-video.component.scss'
})
export class VfvPromotionalVideoComponent implements OnInit {

  @ViewChild('yt') yt?: YouTubePlayer;

  playState = signal("");

  height = signal(390);
  width = signal(640);

  playerVars: any = { autoplay: 1, loop: 1, listType: 'user_uploads' };

  constructor() {
    this.width.set(window.innerWidth);
    this.height.set(window.innerHeight);
  }

  ngOnInit(): void {
      this.yt?.playVideo();
  }

  onYoutubeVideoStateChange(event: YT.OnStateChangeEvent) {

    if(event.data === YT.PlayerState.PLAYING) {
      this.playState.set('PLAYING');
    }
    if(event.data === YT.PlayerState.PAUSED) {
      this.playState.set('PAUSED');
    }

    if(event.data === YT.PlayerState.ENDED) {
      this.playState.set('ENDED');
      setTimeout(() => {
          this.yt?.playVideo();
      }, 500);
    }

    if(event.data === YT.PlayerState.BUFFERING) {
      this.playState.set('BUFFERING');
    }

    if(event.data === YT.PlayerState.CUED) {
      this.playState.set('CUED');
    }

  }
}
