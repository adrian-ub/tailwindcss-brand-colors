import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Brand } from '@ublabs/util-brand';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { Example, exampleArray } from './example-array';

@Component({
  selector: 'ublabs-ui-list-colors',
  templateUrl: './ui-list-colors.component.html',
  styles: [],
})
export class UiListColorsComponent implements OnInit {
  @Input() brands!: Brand[];

  exampleTextArray!: Example[];

  selectExample = new FormControl();

  searchControl = new FormControl();
  filteredOptions$!: Observable<Brand[]>;

  ngOnInit(): void {
    this.exampleTextArray = exampleArray.sort((a, b) => {
      if (a.title < b.title) return -1;

      if (a.title > b.title) return 1;

      return 0;
    });

    this.selectExample.patchValue(this.exampleTextArray[0].value);

    this.filteredOptions$ = this.searchControl.valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(value))
    );
  }

  private _filter(value: string): Brand[] {
    const filterValue = value.toLowerCase();

    return this.brands.filter((option) =>
      option.title.toLowerCase().includes(filterValue)
    );
  }
}
