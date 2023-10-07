import { Component, OnInit } from '@angular/core';
import { GitHubAPIEndpointsService, Repository } from 'src/query';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  data: Repository = {};

  constructor(private http: GitHubAPIEndpointsService) { }

  ngOnInit(): void {
    this.http.getAxiosAxios().subscribe((data) => {
      this.data = data;
    });
  }
}
