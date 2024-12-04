import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  messageToChild = 'Hello Child!'; // Data sent to the child
  childMessage = ''; // Stores the message received from the child

  receiveMessageFromChild(message: string) {
    this.childMessage = message; // Updating the message from the child
  }
}
