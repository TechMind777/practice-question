/*
<app-child [message]="parentMessage"></app-child>
 @Input() message: string = '';



 <app-child (dataEmitter)="receiveData($event)"></app-child>
 receiveData(data: string) {
    this.receivedMessage = data;  // Handle the data from the child
}



<button (click)="sendData()">Send Data to Parent</button>
export class ChildComponent {
  @Output() dataEmitter: EventEmitter<string> = new EventEmitter<string>();
  sendData() {
    const data = 'Hello from Child!';
    this.dataEmitter.emit(data);  // Emit the data to the parent
  }
}
  */