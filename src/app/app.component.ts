import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { StepperService } from './stepper.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  constructor(private stepperService: StepperService, private router: Router) { }
  currentPageIndex!: number;

  sub!: Subscription;

  ngOnInit(): void {
    this.sub = this.stepperService.currentStep$.subscribe(idx => {
      this.currentPageIndex = idx;
    })
  }
  onNivagate(url: string) {
    this.router.navigate([url]);
  }

  ngOnDestroy(): void {
    // this.sub.unsubscribe();
  }
}
