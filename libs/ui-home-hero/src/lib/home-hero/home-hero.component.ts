import { Clipboard } from '@angular/cdk/clipboard';
import { Component } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'ublabs-home-hero',
  templateUrl: './home-hero.component.html',
  styles: [],
})
export class HomeHeroComponent {
  private textNpm = 'npm install @ublabs/tailwindcss-brand-colors';
  isCopied: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private clipboard: Clipboard) {}

  copyClipboard() {
    this.clipboard.copy(this.textNpm);
    this.isCopied.next(true);

    of(true)
      .pipe(delay(3000))
      .subscribe(() => this.closeNotification());
  }

  closeNotification() {
    this.isCopied.next(false);
  }
}
