import { Pipe, PipeTransform } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Pipe({
    name: 'secure'
})
export class SecurePipe implements PipeTransform {

    constructor(private http: HttpClient, private sanitizer: DomSanitizer) { }

    transform(url): Observable<any> {
        console.log("Url: ", url);
        let newurl = "https://gateway-api.dev.hsb.se/fileservice/v1/File/image?imageName=" + url + "&width=200&height=200"
        return this.http
            .get(newurl, { responseType: 'blob' })
            .pipe(map(val => this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(val))));
    }
}