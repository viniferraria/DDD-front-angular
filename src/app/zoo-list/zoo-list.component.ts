import { Component, OnInit } from '@angular/core';
import { ZooService } from '../zoo.service';

@Component({
  selector: 'app-zoo-list',
  templateUrl: './zoo-list.component.html',
  styleUrls: ['./zoo-list.component.css']
})
export class ZooListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'specie', 'actions'];
  animals;
  isLoading = true;

  constructor(
    private zooService: ZooService,
  ) { }

  ngOnInit(): void {
    this.zooService.fetchTable()
    .subscribe(data => {
      this.animals = data;
      this.isLoading = false;
    });
  }

  remove({ id: outerId }) {
    this.zooService.deleteAnimal({ id: outerId })
    .subscribe( _ => {
      this.animals = this.animals.filter(({ id }) => id !== outerId );
    });
  }
}
