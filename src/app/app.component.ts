import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'gold-logistics';

  constructor(private http: HttpClient) {

  }

  onSubmit(form): void {
    console.log(form.value);

    this.http.post('http://localhost:3000/login', form.value).subscribe(
      () => {
        console.log('Request has been sent');
      }
    );
  }

}
