import { Routes } from '@angular/router';
import { Admin } from './components/admin/admin';
import { AttributeBinding } from './components/attribute-binding/attribute-binding';
import { ControlFlow } from './components/control-flow/control-flow';
import { DataBinding } from './components/data-binding/data-binding';
import { EventBinding } from './components/event-binding/event-binding';
import { Interpolation } from './components/interpolation/interpolation';
import { PropertyBinding } from './components/property-binding/property-binding';
import { Signal } from './components/signal/signal';
import { TwoWayBinding } from './components/two-way-binding/two-way-binding';
import { User } from './components/user/user';
import { KeyboardEventComponent } from './components/keyboard-event/keyboard-event';
import { MouseEventComponent } from './components/mouse-event/mouse-event';


export const routes: Routes = [
    {
        path: '',
        redirectTo: "admin",
        pathMatch: "full"
    },
    {
        path:"admin",
        component: Admin
    },
    {
        path: "attributebinding",
        component: AttributeBinding
    },
    {
        path: "controlflow",
        component: ControlFlow,
    },
    {
        path: "databinding",
        component: DataBinding
    },
    {
        path: "eventbinding",
        component: EventBinding
    },
    {
        path: "interpolation",
        component: Interpolation
    },
    {
        path: "keyboardevent",
        component: KeyboardEventComponent
    },
    {
        path: "mouseevent",
        component: MouseEventComponent
    },
    {
        path: "propertybinding",
        component: PropertyBinding
    },
    {
        path: "signal",
        component: Signal
    },
    {
        path: "twowaybinding",
        component: TwoWayBinding
    },
    {
        path: "user",
        component: User
    }
    
    


];
