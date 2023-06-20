import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ChangeDetectorRef } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css'],
})


export class DemoComponent implements OnInit {

  dataSource: any = [];
  companyList: any = [];
  showData: boolean = false;
  companyName = "";
  countryName = "";

  @ViewChild('paginator') paginator!: MatPaginator;

  columnsToDisplay = ['name', 'username', 'email',];

  constructor(private ApiService: ApiService, private ref: ChangeDetectorRef) {

  }



  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  ngOnInit() {
    this.getApis();
  }

  async getApis() {
    var getapi = "/model";
    (await this.ApiService.getApi(getapi)).subscribe((res) => {
      console.log(res);
      if (res) {
        this.companyList = res.data;

        if (res && res.data.length) {
          this.showData = true;
          console.log('paginator is ', this.paginator);
          this.dataSource = new MatTableDataSource(res.data);
          this.ref.detectChanges();
          this.dataSource.paginator = this.paginator;
        } else {
          this.showData = false;
        }



      }
    })
  }

  selectCompany(event: any) {
    this.companyName = event.value;
 }

  selectCountry(event: any) {
    this.countryName = event.value;
  }

  submitBtn() {

    if(this.companyName !=""){
    
      this.dataSource = this.companyList.reverse().filter((o: any, i: any) => o.company == this.companyName);
    }

    if(  this.countryName !=""){
      this.dataSource = this.companyList.reverse().filter((o: any, i: any) => o.country == this.countryName);
    }



  }






}

