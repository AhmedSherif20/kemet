import { Component, HostListener, OnInit } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { SwalAlertService } from 'src/app/services/swal-alert.service';
import { CrewApiService } from '../../services/crew-api.service';
import { IAgent } from 'src/app/interfaces';
import { getRandomNum } from 'src/app/utils/functions';
import { MatDialog } from '@angular/material/dialog';
import { AgentComponent } from '../agent/agent.component';
import { ResponsiveService } from 'src/app/services/responsive.service';

@Component({
  selector: 'app-all-crew',
  templateUrl: './all-crew.component.html',
  styleUrls: ['./all-crew.component.scss'],
})
export class AllCrewComponent implements OnInit {
  allCrew: IAgent[] = [];
  loading: boolean = false;
  displayedCrew: IAgent[];
  p: number = 1;
  itemPerPage: number = 1;
  constructor(
    private _crewApiService: CrewApiService,
    private _SwalAlertService: SwalAlertService,
    private _responsiveService: ResponsiveService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.getCrew();
  }

  async getCrew(): Promise<void> {
    this.loading = true;
    try {
      let crewApi = await firstValueFrom(this._crewApiService.getAllCrew());

      if (crewApi['crew'] && crewApi['crew'].length) {
        this.allCrew = crewApi['crew'];

        this.allCrew = await this.addImageUrlsToAgents(this.allCrew);

        this.displayCrew();
        this.loading = false;
      } else {
        this.loading = false;
      }
    } catch (error: any) {
      this._SwalAlertService.fireAlert(
        'error',
        error.error.message ?? 'something happen wrong',
        'please try again later'
      );
      this.loading = false;
      this.displayedCrew.length = 0;
    }
  }

  async getAgentImage(): Promise<string> {
    try {
      const imageApi: { url: string } = await firstValueFrom(
        this._crewApiService.getRandomAIPhoto()
      );

      return imageApi.url;
    } catch (error) {
      console.error('Error fetching image:', error);

      return 'default-image-url.jpg';
    }
  }

  async addImageUrlsToAgents(crew: any[]): Promise<IAgent[]> {
    const updatedJobs = await Promise.all(
      crew.map(async (crewData: IAgent) => {
        const imageUrl = await this.getAgentImage();
        return { ...crewData, imageUrl };
      })
    );

    return updatedJobs;
  }

  searchCrew(e: KeyboardEvent) {
    let searchQuery = (e.target as HTMLInputElement).value ?? '';
    this.p = 1;
    if (searchQuery.length) {
      this.displayedCrew = this.allCrew.filter((member) => {
        const lowerCaseMember = member.person_name.toLowerCase();
        const lowerCaseSearchValue = searchQuery.toLowerCase();
        return (
          lowerCaseMember.startsWith(lowerCaseSearchValue) ||
          lowerCaseMember.includes(lowerCaseSearchValue) ||
          member.job_title.startsWith(searchQuery) ||
          member.job_title.includes(searchQuery)
        );
      });
    } else {
      this.displayedCrew = this.allCrew;
    }
  }

  displayCrew(): void {
    this.itemPerPage = this._responsiveService.getItemPerPage();
    this.displayedCrew = this.allCrew;
  }

  @HostListener('window:resize')
  setItemPerPage() {
    this.itemPerPage = this._responsiveService.getItemPerPage();
  }

  NgxPagination(e: any): void {
    window.scrollTo({
      top: document.getElementById('crew')?.offsetTop! - 100,
      behavior: 'smooth',
    });
    this.p = e;
  }

  getRandomNum(max: number, min: number): number {
    return getRandomNum(max, min);
  }

  openDialog(id: number): void {
    const agentData =
      this.allCrew.find((agent: IAgent) => agent.job_id === id) ?? undefined;

    if (!agentData) {
      this._SwalAlertService.fireAlert(
        'error',
        `can't find agent data`,
        'please try again later'
      );
      return;
    }

    this.dialog.open(AgentComponent, {
      data: {
        agentData: agentData,
      },
      width: '400px',
      height: '600px',
    });
  }
}
