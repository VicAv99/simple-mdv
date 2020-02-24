import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { ProjectsService, Project } from '@workspace/core-data';

@Component({
  selector: 'workspace-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects$: Observable<Project[]> = this.projectsService.all();

  constructor(private projectsService: ProjectsService) { }

  ngOnInit(): void {
  }

}
