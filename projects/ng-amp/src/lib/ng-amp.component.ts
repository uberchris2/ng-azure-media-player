import { Component, OnInit, ViewChild, Input } from '@angular/core';

declare var amp: any // todo: use the amp d.ts

@Component({
  selector: 'ng-amp',
  template: `
    <video #video class="azuremediaplayer amp-default-skin" controls>
      <p class="amp-no-js">
          To view this video please enable JavaScript, and consider upgrading to a web browser that supports HTML5 video.
      </p>
    </video>
  `,
  styles: [
  ]
})
export class NgAmpComponent implements OnInit {
  @ViewChild('video') videoPlayer;
  @Input() src: string;
  @Input() controls: string;
  @Input() autoplay: string;
  @Input() poster: string;
  @Input() width: number;
  @Input() height: number;
  @Input() fluid: string;

  constructor() { }

  ngOnInit(): void {
    if (document.querySelector('#ng-amp')) return;
    const scriptTag = document.createElement('script');
    scriptTag.id = 'ng-amp';
    scriptTag.src = '//amp.azure.net/libs/amp/2.3.5/azuremediaplayer.min.js';
    scriptTag.onload = () => this.onLoadInit();
    const linkTag = document.createElement('link');
    linkTag.rel = 'stylesheet';
    linkTag.href = '//amp.azure.net/libs/amp/2.3.5/skins/amp-default/azuremediaplayer.min.css';
    document.body.appendChild(scriptTag);
    document.head.insertBefore(linkTag, document.head.firstChild);
  }

  private onLoadInit() {
    const config = {
      controls: this.controls === 'true',
      autoplay: this.autoplay === 'true',
      poster: this.poster,
      width: this.width,
      height: this.height,
      fluid: this.fluid === 'true',
      logo: { enabled: false },
    };
    const component = amp(this.videoPlayer.nativeElement, config);
    component.src([{
      src: this.src,
      type: 'application/vnd.ms-sstr+xml'
    }]);
    this.videoPlayer.ngComponent = component;
  }
}
