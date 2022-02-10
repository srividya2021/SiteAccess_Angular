import { Component, OnInit } from '@angular/core';
import { RouterService } from '../../services/router.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private routerService: RouterService) { }

  ngOnInit(): void {
	this.routerService.routeToHomePage();
  }

}
