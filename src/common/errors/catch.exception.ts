import { MonoTypeOperatorFunction, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

export function catchException<T>(exec?: (error?: any) => any): MonoTypeOperatorFunction<T> {
  return (stream) =>
    stream.pipe(
      catchError((error: unknown) => {
        if (typeof exec === 'function') {
          exec(error);
        }

        return throwError(() => error);
      }),
    );
}
