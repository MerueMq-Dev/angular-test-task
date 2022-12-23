import { Injectable } from "@angular/core";
import { NavigationStart, Router } from "@angular/router";
import { Subject } from "rxjs";

@Injectable({ providedIn: "root" })
export class StepperService {
    currentStep$ = new Subject<number>();

    currentRoute!: string;
    constructor(private router: Router) {
        this.currentRoute = '';

        this.router.events.subscribe((event) => {
            if (event instanceof NavigationStart) {

                switch (event.url) {
                    case '/':
                        this.currentStep$.next(0);
                        break;
                    case '/load':
                        this.currentStep$.next(0);
                        break;
                    case '/email':
                        this.currentStep$.next(1);
                        break;
                    case '/actualize':
                        this.currentStep$.next(2);
                }

                console.log('Route change detected ', event.url);
            }
        })
    }
}