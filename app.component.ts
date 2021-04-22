import {
  Component,
  OnInit,
  ViewChild,
  TemplateRef,
  ViewContainerRef,
  Inject,
  AfterViewInit,
  ElementRef
} from "@angular/core";
import { orderDatas, employeeData } from "./data";
import {
  EditSettingsModel,
  GridComponent
} from "@syncfusion/ej2-angular-grids";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html"
})
export class AppComponent implements OnInit, AfterViewInit {
  rootData: Object[] = [
    {
      EmployeeID: 5,
      Name: "BUNNY",
      OrderDate: "1996-07-04T00:00:00Z"
    },
    {
      EmployeeID: 6,
      Name: "GILL",
      OrderDate: "1996-07-04T00:00:00Z"
    },
    {
      EmployeeID: 7,
      Name: "GILL",
      OrderDate: "1996-07-04T00:00:00Z"
    },
    {
      EmployeeID: 8,
      Name: "GILL",
      OrderDate: "1996-07-04T00:00:00Z"
    },
    {
      EmployeeID: 9,
      Name: "GILL",
      OrderDate: "1996-07-04T00:00:00Z"
    },
    {
      EmployeeID: 10,
      Name: "GILL",
      OrderDate: "1996-07-04T00:00:00Z"
    },
    {
      EmployeeID: 11,
      Name: "GILL",
      OrderDate: "1996-07-04T00:00:00Z"
    },
    {
      EmployeeID: 12,
      Name: "GILL",
      OrderDate: "1996-07-04T00:00:00Z"
    },
    {
      EmployeeID: 18,
      Name: "GILL",
      OrderDate: "1996-07-04T00:00:00Z"
    },
    {
      EmployeeID: 19,
      Name: "GILL",
      OrderDate: "1996-07-04T00:00:00Z"
    },
    {
      EmployeeID: 110,
      Name: "GILL",
      OrderDate: "1996-07-04T00:00:00Z"
    },
    {
      EmployeeID: 111,
      Name: "GILL",
      OrderDate: "1996-07-04T00:00:00Z"
    },
    {
      EmployeeID: 112,
      Name: "GILL",
      OrderDate: "1996-07-04T00:00:00Z"
    },
    {
      EmployeeID: 118,
      Name: "GILL",
      OrderDate: "1996-07-04T00:00:00Z"
    },
    {
      EmployeeID: 119,
      Name: "GILL",
      OrderDate: "1996-07-04T00:00:00Z"
    },
    {
      EmployeeID: 1110,
      Name: "GILL",
      OrderDate: "1996-07-04T00:00:00Z"
    },
    {
      EmployeeID: 111,
      Name: "GILL",
      OrderDate: "1996-07-04T00:00:00Z"
    },
    {
      EmployeeID: 1112,
      Name: "GILL",
      OrderDate: "1996-07-04T00:00:00Z"
    }
  ];

  childData: Object[] = [
    {
      OrderID: 10248,
      Name: "VINET",
      EmployeeID: 5,
      OrderDate: "1996-07-04T00:00:00Z"
    },
    {
      OrderID: 10249,
      Name: "MONEY",
      EmployeeID: 5,
      OrderDate: "1996-07-04T00:00:00Z"
    }
  ];

  public data: Object[];
  editSettings: EditSettingsModel;
  @ViewChild("grid") gridObj: GridComponent;

  @ViewChild("childTemplate", { static: true })
  public template: TemplateRef<{}>;

  @ViewChild("childEditTemplate", { static: true })
  public editTemplate: TemplateRef<{}>;

  @ViewChild("dateTemplate", { static: true })
  public dateTemplate: TemplateRef<{}>;

  @ViewChild("dateEditTemplate", { static: true })
  public dateEditTemplate: TemplateRef<{}>;
  columns;
  public childGrid: any;

  constructor(
    @Inject(ViewContainerRef) private viewContainerRef?: ViewContainerRef
  ) {}

  ngAfterViewInit() {
    this.gridObj.childGrid = this.childGrid;
  }

  ngOnInit(): void {
    this.editSettings = {
      allowEditing: true,
      allowAdding: true,
      allowDeleting: true,
      newRowPosition: "Bottom",
      mode: "Normal",
      showConfirmDialog: false,
      allowEditOnDblClick: true
    };

    this.template.elementRef.nativeElement._viewContainerRef = this.viewContainerRef;
    this.template.elementRef.nativeElement.propName = "template";

    this.editTemplate.elementRef.nativeElement._viewContainerRef = this.viewContainerRef;
    this.editTemplate.elementRef.nativeElement.propName = "editTemplate";

    this.dateTemplate.elementRef.nativeElement._viewContainerRef = this.viewContainerRef;
    this.dateTemplate.elementRef.nativeElement.propName = "template";

    this.dateEditTemplate.elementRef.nativeElement._viewContainerRef = this.viewContainerRef;
    this.dateEditTemplate.elementRef.nativeElement.propName = "editTemplate";

    this.columns = [
      {
        headerText: "Name",
        template: this.template,
        editTemplate: this.editTemplate,
        width: 150
      },
      {
        headerText: "Date",
        template: this.dateTemplate,
        editTemplate: this.dateEditTemplate,
        width: 150
      }
    ];

    this.data = this.rootData;
    this.childGrid = {
      dataSource: this.childData,
      queryString: "EmployeeID",
      load() {
        this.registeredTemplate = {};
        this.registeredEditTemplate = {};
      },
      editSettings: this.editSettings,
      columns: this.columns
    };
    this.childGrid["allowResizing"] = true;
  }
}
