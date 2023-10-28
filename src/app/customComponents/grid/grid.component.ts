import { Component, Input } from '@angular/core';

@Component({
  selector: 'grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
})
export class GridComponent {
  @Input() gap: string = '0';
  @Input() gridTemplateColumns = '1fr';
}
