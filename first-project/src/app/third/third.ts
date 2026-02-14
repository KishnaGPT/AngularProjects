import { Component } from "@angular/core";

@Component({
    selector:'app-third',
    template: `<h2>This is an Inline Component</h2>`,
    styles:[
        `
        h2{
            color: blue;
        }
        `
    ]
})

export class Third{
}