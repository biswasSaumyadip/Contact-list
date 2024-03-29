import { OnInit, Component, Input } from '@angular/core';

@Component({
  selector: 'invalid-message',
  template: `
    <div class="message">
      {{ message }}
    </div>
  `,
  styles: [
    '.message{ border: 1px solid red; background-color:#e54d4de6; color: white; padding: 10px 15px; color: white; border-radius: 6px;}',
  ],
})
export class Message implements OnInit {
  @Input() message: string;
  ngOnInit(): void {}
}
