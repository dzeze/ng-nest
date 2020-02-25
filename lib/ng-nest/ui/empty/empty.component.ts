import {
  Component,
  OnInit,
  ViewEncapsulation,
  Renderer2,
  ElementRef,
  ChangeDetectorRef,
  ChangeDetectionStrategy,
  ViewChild,
  SimpleChanges,
  OnChanges,
  Input,
  TemplateRef
} from "@angular/core";
import { XEmptyPrefix } from "./empty.type";
import { XIsString } from "@ng-nest/ui/core";

@Component({
  selector: `${XEmptyPrefix}`,
  templateUrl: "./empty.component.html",
  styleUrls: ["./empty.component.scss"],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class XEmptyComponent implements OnInit, OnChanges {
  @Input() img?: string | TemplateRef<void>;
  @Input() content?: string | TemplateRef<void>;
  @ViewChild("empty", { static: true }) empty: ElementRef;
  isImageTemp: boolean = false;
  isContentTemp: boolean = false;
  constructor(public renderer: Renderer2, public elementRef: ElementRef, public cdr: ChangeDetectorRef) {}

  ngOnInit() {}

  ngOnChanges(simple: SimpleChanges) {}
}