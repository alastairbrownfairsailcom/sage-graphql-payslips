import { Component } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sage-graphql-payslips';
  
  constructor(apollo: Apollo) {
    apollo.query({query: gql`{query{doc (employeeId:"fred") {employeeName}}}`}).subscribe(console.log);
  }
}
