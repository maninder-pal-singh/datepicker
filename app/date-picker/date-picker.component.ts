import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnDestroy,
  OnInit,
  ViewChild
} from "@angular/core";
import { FormControl } from "@angular/forms";
import {
  DatePickerComponent,
  PopupObjectArgs,
  PreventableEventArgs,
  RenderDayCellEventArgs
} from "@syncfusion/ej2-angular-calendars";

@Component({
  selector: "app-date-picker",
  templateUrl: "./date-picker.component.html",
  styleUrls: ["./date-picker.component.css"]
})
export class MyDatePickerComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() data: string;
  @Input() allowEdit = false;
  @Input() format = "yyyy-MM-dd";
  @Input() placeholder = "";
  @Input() openCalendarOnFocus = false;
  @Input() control: FormControl;
  date;

  @ViewChild("picker") picker: DatePickerComponent;
  @ViewChild("datepickerFooter", { static: false })
  datepickerFooter: ElementRef;

  hide = false;
  Obj: PopupObjectArgs = {
    cancel: true
  };

  constructor() {}
  ngOnDestroy(): void {
    console.log("datepicker destroyed");
  }

  ngAfterViewInit() {
    if (this.openCalendarOnFocus) {
      this.picker.focusIn();
      this.picker.show();
    }
  }

  ngOnInit() {
    this.control = new FormControl(this.date);
  }

  onOpen(e) {
    e.popup.element.appendChild(this.datepickerFooter.nativeElement);
    this.hide = true;
    this.picker.focusIn();
  }

  onClose(args?: PreventableEventArgs | PopupObjectArgs): void {
    if (this.hide) {
      args.preventDefault();
    }
  }

  onChange(e) {
    this.hide = true;
    this.picker.focusIn();
    this.date = e.value;

    this.data = this.date;
  }

  onSet() {
    this.hide = false;
    this.picker.hide();
  }

  onLoad(args: RenderDayCellEventArgs) {
    if (
      this.date &&
      args.date.toISOString() === new Date(this.date).toISOString()
    ) {
      const span = document.createElement("span");
      span.className = "icomoon MilestoneDiamond";
      span.style.cssText = `margin-top: -27px;position: absolute;margin-left: 17px;font-size: 5px;`;
      span.style.color = "#FFFFFF";
      args.element.appendChild(span);
    }
  }
}
