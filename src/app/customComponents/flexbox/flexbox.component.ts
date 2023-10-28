import { Component, Input } from '@angular/core';

@Component({
  selector: 'flexbox',
  templateUrl: './flexbox.component.html',
  styleUrls: ['./flexbox.component.scss'],
})
export class FlexboxComponent {
  @Input() justifyContent: JustifyContent = 'center';
  @Input() alignItems: AlignItems = 'stretch';
  @Input() gap: string = '0';
  @Input() flexDirection: 'column' | 'row' = 'row';
}
type JustifyContent =
  | 'center'
  | 'start'
  | 'end'
  | ' space-between'
  | 'space-around';

type AlignItems = 'center' | 'start' | 'stretch' | 'end';
