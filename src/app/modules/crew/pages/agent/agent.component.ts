import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IAgent } from 'src/app/interfaces';
import { redirectToWhatsAppLink } from 'src/app/utils/functions';

@Component({
  selector: 'app-agent',
  templateUrl: './agent.component.html',
  styleUrls: ['./agent.component.scss'],
})
export class AgentComponent implements OnInit {
  agentData: IAgent | undefined = undefined;
  whatsappLink: string;
  itemPerPage: number;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit(): void {
    console.log(this.data);

    this.agentData = this.data['agentData'];

    const whatsappMsg: string = `Hello I saw your profile on the Kemet website and I am interested in working with you if you are free contact me please , thank you`;
    this.whatsappLink = redirectToWhatsAppLink(
      this.agentData.contact_phone,
      whatsappMsg
    );
  }
}
