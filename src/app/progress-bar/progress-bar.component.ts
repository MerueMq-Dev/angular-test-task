import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { finalize, map, startWith, tap, timer } from 'rxjs';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent {
  constructor(private router: Router) { }

  readonly value$ = timer(30, 30).pipe(
    map(i => i ),
    tap((i) => {
      if (i === 100) {
        this.router.navigate(['/email']);
      }
    })
  )
}
