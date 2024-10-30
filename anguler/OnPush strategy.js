/**
 * 11. How to optimize Angular application using OnPush change detection strategy ?
The OnPush change detection strategy in Angular is designed to optimize performance by reducing the number of change detection cycles. It is based on the concept of immutability and relies on input properties and explicit change detection triggering.


To optimize an Angular application using the OnPush strategy, follow these steps:

Let’s assume we have a parent component called ParentComponent and a child component called ChildComponent. The child component receives an array of items as an input property and displays them in a list. We’ll optimize this scenario using the OnPush strategy.
Use the OnPush change detection strategy in components:


Use the OnPush change detection strategy in components:
 // parent.component.ts
import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-parent',
  template: `
    <app-child [items]="items"></app-child>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ParentComponent {
  items: string[] = ['Item 1', 'Item 2', 'Item 3'];

  addItem() {
    this.items.push('New Item'); // Incorrect way to update the array
  }
}
 // child.component.ts
import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
    <ul>
      <li *ngfor="let item of items">{{ item }}</li>
    </ul>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildComponent {
  @Input() items: string[];
}type
In the above code, both the ParentComponent and ChildComponent are using the OnPush change detection strategy.
2. Use immutable data for input properties:
 // parent.component.ts
import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-parent',
  template: `
    <app-child [items]="items"></app-child>
    <button (click)="addItem()">Add Item</button>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ParentComponent {
  items: string[] = ['Item 1', 'Item 2', 'Item 3'];

  addItem() {
    this.items = [...this.items, 'New Item']; // Correct way to update the array using spread operator
  }
}
In the ParentComponent, when adding a new item to the items array, we create a new array using the spread operator […this.items] and then add the new item. This ensures that a new reference is created, which triggers change detection in the ChildComponent when the input property changes.
Conclusion :
By applying these optimization techniques, you can enhance the performance of your Angular application with the OnPush change detection strategy. Immutable data help minimize unnecessary change detection cycles, resulting in improved efficiency and responsiveness.

* 
 * 
 */