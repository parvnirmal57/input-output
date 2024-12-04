import { Component,EventEmitter,Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input() parentMessage!: string; // Input property to receive data from the parent
  @Output() messageToParent = new EventEmitter<string>(); // Output property to emit events to the parent

  sendMessageToParent() {
    this.messageToParent.emit('Hello Parent!'); // Emitting the event with a message
  }
}
