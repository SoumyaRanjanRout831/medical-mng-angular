import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../../api.service';
import { CommonModule } from '@angular/common';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { Medicine } from '../../models/medicine';


@Component({
  selector: 'app-all-medicine',
  standalone: true,
  imports: [ CommonModule, MatTableModule, MatPaginatorModule, ],
  templateUrl: './all-medicine.component.html',
  styleUrl: './all-medicine.component.scss',
})
export class AllMedicineComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['name', 'manufacturer', 'expt', 'price'];
  allMedicine = new MatTableDataSource<Medicine>();
  constructor(private apiService: ApiService) {}


  @ViewChild(MatPaginator) paginator!: MatPaginator;


  ngOnInit(): void {
    this.apiService.getAllMedicine().subscribe((res: any) => {
      console.log(res);
      this.allMedicine = res.medicines;
    });
  }

  ngAfterViewInit() {
    this.allMedicine.paginator = this.paginator;
  }
}




