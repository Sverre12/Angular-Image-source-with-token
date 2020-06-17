import { Component } from '@angular/core';
// import { SecurePipe } from './../security/SecurePipe'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test-project';
  images = [
    { name: "image1", refName: '907f813b-9dd5-45dd-8b93-84d49b8833cb.jpg' },
    { name: "image2", refName: 'ef062728-2e92-4c70-835e-748836c0fee5.jpg' },
    { name: "image3", refName: '7160bf95-36ff-4602-92e7-2b5c066e8fbf.jpg' }
  ];

}

