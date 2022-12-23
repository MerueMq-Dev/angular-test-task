import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { TuiFileLike } from '@taiga-ui/kit';
import { finalize, map, Observable, of, Subject, switchMap, timer } from 'rxjs';

@Component({
  selector: 'app-inputs-files',
  templateUrl: './inputs-files.component.html',
  styleUrls: ['./inputs-files.component.css']
})
export class InputsFilesComponent {

  constructor(private router: Router) { }

  @Input('label') link!: string;

  readonly control = new FormControl();


  readonly rejectedFiles$ = new Subject<TuiFileLike | null>();
  readonly loadingFiles$ = new Subject<TuiFileLike | null>();
  readonly loadedFiles$ = this.control.valueChanges.pipe(
    switchMap(file => (file ? this.makeRequest(file) : of(null))),
  );


  onReject(file: TuiFileLike | readonly TuiFileLike[]): void {
    this.rejectedFiles$.next(file as TuiFileLike);
  }

  removeFile(): void {
    this.control.setValue(null);
  }

  clearRejected(): void {
    this.removeFile();
    this.rejectedFiles$.next(null);
  }

  makeRequest(file: TuiFileLike): Observable<TuiFileLike | null> {
    this.loadingFiles$.next(file);

    return timer(2000).pipe(
      map(() => {
        this.rejectedFiles$.next(file);
        this.router.navigate(['/load']);
        return file;
      }),
      finalize(() => this.loadingFiles$.next(null)),
    );
  }
}