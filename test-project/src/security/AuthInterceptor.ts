import { Injectable } from '@angular/core';

import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    intercept(
        request: HttpRequest<any>,
        next: HttpHandler): Observable<HttpEvent<any>> {

        console.log("Request: ", request);

        request = request.clone({
            setHeaders: {
                Authorization: `Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6ImF0K2p3dCIsImtpZCI6IjFCVEY0cEtnaXJUQk51aTRWT201bF82LXhMSHVBR01obnNqQW04aXA1WUkifQ.eyJzdWIiOiJxSzJNamNtSVhhSTRRRGhSNy1GT08iLCJhbXIiOlsiZWlkIl0sImdsb2JhbF9pZCI6ImUxOWI2YWExLWFkZjYtNGExYy04MGZjLWJhOTQ1NWNmNThjMSIsInNpZCI6InFLMk1qY21JWGFJNFFEaFI3LUZPTyIsImFjY291bnRzIjpbIjE5ODAwMTI0OTI4NiJdLCJwZXJzb25hbF9pZGVudGl0eV9udW1iZXIxMCI6IjgwMDEyNDkyODYiLCJyZWdpb25faWQiOjk5LCJjdXN0b21lcl9pZCI6MjU3MCwicm9sZXMiOlsiOTk6MjU3MDoxMDQ6MDowIl0sInJvbGVfdHlwZSI6IjA6MCIsImVudGl0bGVtZW50cyI6WyI5OTo6OjkiLCI5OTo6OjgyIiwiOTk6Ojo4NCIsIjk5Ojo6ODUiLCI5OTo6OjEwMSJdLCJwcm92aWRlciI6ImVpZCIsIm5hbWUiOiJPbGl2aWEgVCBGcmVkcmlrc3NvbiIsImdpdmVuX25hbWUiOiJPbGl2aWEiLCJmYW1pbHlfbmFtZSI6IlQgRnJlZHJpa3Nzb24iLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiIxOTgwMDEyNDkyODYiLCJqdGkiOiJoYzZKWDBNUVdyVnRZUHZ6M3lDeVkiLCJpYXQiOjE1OTIzODAyNTQsImV4cCI6MTU5MjM4Mzg1NCwic2NvcGUiOiJvcGVuaWQgcHJvZmlsZSByb2xlcyBhY2NvdW50cyBwZXJzb25hbF9pZGVudGl0eV9udW1iZXIxMCBlbnRpdGxlbWVudHMgcHJvdmlkZXIgY3VzdG9tZXJzIGN1c3RvbWVyX2lkIHJlZ2lvbl9pZCIsImNsaWVudF9pZCI6InJwLXZlcmlmaWVyIiwiaXNzIjoiaHR0cHM6Ly9pZHAuZGV2LmhzYi5zZS9pZHAvdjEiLCJhdWQiOiJycC12ZXJpZmllciJ9.mT5LfIEUQ7GhSQDPp4ACVHS928tj4zLCWcJUticQPHPm4ti2oztNeg1Txl6Wa4VZ9lHD1VwabgDBV19Mt99BoVij5Gv0qTjhYj1VGPoaDt2e9dgXfWJMNSgaDF21cGw7jUCvmItmabGV2kJCQJTWmGNBXNwDIBgqaLY9bNhO6hodVeDsRj7roUkU6qK4cldgagtx2PAqan_0l4ayzj6rlrDvHfD75BOXbXRrBIQgfqibQnZrGffDJCve4ljfRUmV9G7Gaj3U0sxA4LmkVcrDpFtiQG00BblBjpc0WC96xMP1YVlJPK0RquVNWOssMFA-6GHlyE9-KTg3BwCjEV5zdw`
            }
        });

        const modified = request.clone({
            setHeaders: { "X-Man": "Wolverine" }
        });

        console.log("Headers: ", request.headers);

        return next.handle(modified);
    }
}