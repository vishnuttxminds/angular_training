import { AfterViewChecked, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements AfterViewChecked {

    @ViewChild('chatContainer') private chatContainer!: ElementRef;

  messages: string[] = [
    'Hi!',
    'Hello!',
    'How are you?'
  ];

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  scrollToBottom() {
    try {
      const element = this.chatContainer.nativeElement;
      element.scrollTop = element.scrollHeight;
    } catch (err) {}
  }

  sendMessage() {
    this.messages.push('New message at ' + new Date().toLocaleTimeString());
  }

}
