import { Component } from '@angular/core';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.scss'],
})
export class ChatbotComponent {
  currentTime: Date = new Date();
  intervalId: any;

  showChat: boolean = false;

  constructor() {}
  ngOnInit() {
    this.updateTime();
    this.intervalId = setInterval(() => this.updateTime(), 1000);
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }

  updateTime() {
    this.currentTime = new Date();
  }

  toggleChatbot(): void {
    this.showChat = !this.showChat;
  }
}
