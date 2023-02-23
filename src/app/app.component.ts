import { Component, ViewChild } from '@angular/core';
import { DxTextBoxComponent } from 'devextreme-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public show: boolean = false;
  public content: string;
  @ViewChild(DxTextBoxComponent, { static: false }) textBox: DxTextBoxComponent;

  toggle() {
    let value = this.textBox.value;
    this.show = true;
    this.content = value;
  }
}
