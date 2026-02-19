import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Admin } from "./components/admin/admin";
import { AttributeBinding } from "./components/attribute-binding/attribute-binding";
import { ControlFlow } from "./components/control-flow/control-flow";
import { DataBinding } from "./components/data-binding/data-binding";
import { EventBinding } from "./components/event-binding/event-binding";
import { Interpolation } from "./components/interpolation/interpolation";
import { PropertyBinding } from "./components/property-binding/property-binding";
import { Signal } from "./components/signal/signal";
import { User } from "./components/user/user";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Admin, User, DataBinding, Signal, ControlFlow, Interpolation, PropertyBinding, AttributeBinding, EventBinding],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('myfirst_angular');
}
