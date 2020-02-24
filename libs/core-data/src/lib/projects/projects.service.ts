import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Project } from './project.model';
import { Observable } from 'rxjs';

const BASE_URL = 'https://bb-base-server.herokuapp.com';
const model    = 'projects';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor(private httpClient: HttpClient) { }

  all(): Observable<Project[]> {
    return this.httpClient.get<Project[]>(this.getUrl());
  }

  findOne(projectId: string): Observable<Project> {
    return this.httpClient.get<Project>(this.getUrlWithId(+projectId));
  }

  create(project: Project): Observable<Project> {
    return this.httpClient.post<Project>(this.getUrl(), project);
  }

  update(project: Project): Observable<Project> {
    return this.httpClient.patch<Project>(this.getUrlWithId(project.id), project);
  }

  delete(project: Project): Observable<{}> {
    return this.httpClient.delete<{}>(this.getUrlWithId(project.id));
  }

  private getUrl() {
    return `${BASE_URL}/${model}`;
  }

  private getUrlWithId(id: number) {
    return `${this.getUrl()}/${id}`;
  }
}
