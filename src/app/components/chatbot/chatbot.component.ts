import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { IMessage } from 'src/app/interfaces';
import { SecureLsService } from 'src/app/services/secure-ls.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.scss'],
})
export class ChatbotComponent {
  showChat: boolean = false;

  defaultMsg: IMessage = {
    from: 'bot',
    time: new Date(),
    message: `Welcome to Kemet Chatbot, We're here to assist you. How can we help you today?`,
  };

  messages: IMessage[] = [];

  messageControl = new FormControl('');

  constructor(private _secureLsService: SecureLsService) {}
  ngOnInit() {}

  ngOnDestroy() {}

  initializeMessages(): void {
    const oldMessages: IMessage[] =
      this._secureLsService.decryptData('chatbot') ?? [];

    if (oldMessages.length) {
      this.messages = oldMessages;
    } else {
      this.messages = [this.defaultMsg];
    }
  }

  toggleChatbot(): void {
    this.showChat = !this.showChat;

    if (this.showChat) this.initializeMessages();

    if (!this.showChat) {
      if (this.messages.length > 1) {
        this.saveChatHistory();
      }
    }
  }

  sendMessage(from: 'bot' | 'user', message: string = ''): void {
    if (message.trim().length == 0) {
      console.log('no message');
      return;
    }

    const newMessage: IMessage = {
      from,
      message: message.trim(),
      time: new Date(),
    };

    this.messages.push(newMessage);
    this.messageControl.setValue(null);
    this.scrollDown();

    setTimeout(() => {
      this.messages.push(this.defaultMsg);
      this.scrollDown();
    }, 1500);
  }

  scrollDown(): void {
    const container = document.getElementById('messages');

    if (container) {
      setTimeout(() => {
        container.scrollTo({
          top: container.scrollHeight,
          behavior: 'smooth',
        });
      }, 0);
    }
  }

  saveChatHistory(): void {
    Swal.fire({
      title: 'Do you want to save the chat?',
      showDenyButton: true,
      confirmButtonText: 'Save',
      denyButtonText: `Don't save`,
    }).then((result) => {
      if (result.isConfirmed) {
        this._secureLsService.encryptData('chatbot', this.messages);
        Swal.fire('Chat Saved Successfully', '', 'success');
      } else if (result.isDenied) {
        this._secureLsService.removeData('chatbot');
        this.messages = [];
      }
    });
  }
}
