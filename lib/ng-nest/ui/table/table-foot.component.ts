import {
  Component,
  OnInit,
  ViewEncapsulation,
  Renderer2,
  ElementRef,
  ChangeDetectorRef,
  ChangeDetectionStrategy,
  Host,
  Optional,
  ViewChild
} from '@angular/core';
import { XTableFootPrefix, XTableFootProperty } from './table.property';
import { removeNgTag } from '@ng-nest/ui/core';
import { XTableComponent } from './table.component';

@Component({
  selector: `${XTableFootPrefix}`,
  templateUrl: './table-foot.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class XTableFootComponent extends XTableFootProperty implements OnInit {
  @ViewChild('tfoot') tfoot: ElementRef;
  constructor(
    @Host() @Optional() public table: XTableComponent,
    public renderer: Renderer2,
    public elementRef: ElementRef,
    public cdr: ChangeDetectorRef
  ) {
    super();
  }

  ngOnInit() {
    removeNgTag(this.elementRef.nativeElement);
    this.setClassMap();
  }

  ngAfterViewInit() {
    this.table.tfoot = this.tfoot;
    console.log(this.tfoot);
  }

  setClassMap() {}
}
