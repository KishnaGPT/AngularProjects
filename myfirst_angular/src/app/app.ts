import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLinkActive, RouterLinkWithHref } from '@angular/router';
import { Admin } from "./components/admin/admin";
import { AttributeBinding } from "./components/attribute-binding/attribute-binding";
import { ControlFlow } from "./components/control-flow/control-flow";
import { DataBinding } from "./components/data-binding/data-binding";
import { EventBinding } from "./components/event-binding/event-binding";
import { Interpolation } from "./components/interpolation/interpolation";
import { PropertyBinding } from "./components/property-binding/property-binding";
import { Signal } from "./components/signal/signal";
import { User } from "./components/user/user";
import {  KeyboardEventComponent } from "./components/keyboard-event/keyboard-event";
import { MouseEventComponent } from "./components/mouse-event/mouse-event";
import { TwoWayBinding } from "./components/two-way-binding/two-way-binding";
import { StudentList } from "./studentDashboard/student-list/student-list";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Admin, User, DataBinding, Signal, ControlFlow, Interpolation, PropertyBinding, AttributeBinding, EventBinding, KeyboardEventComponent, MouseEventComponent, TwoWayBinding, StudentList, RouterLinkActive, RouterLinkWithHref],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('myfirst_angular');
}
