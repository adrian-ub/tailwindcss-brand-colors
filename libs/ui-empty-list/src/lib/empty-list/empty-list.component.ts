import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'ublabs-empty-list',
  templateUrl: './empty-list.component.html',
  styles: [],
})
export class EmptyListComponent {
  @Input() brand!: string;

  colorForm: FormControl = new FormControl('#111827');
}
