import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HelloWorldService } from '../hello-world.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent implements OnInit {
  welcomeMessage = '';
  subscription = new Subscription();

  constructor(private route: ActivatedRoute, private router: Router, private helloWorldService: HelloWorldService) { }

  ngOnInit(): void {
    this.subscription = this.helloWorldService.executeHelloWorldService().subscribe((res) => {
      this.welcomeMessage = res.content;
    });
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
