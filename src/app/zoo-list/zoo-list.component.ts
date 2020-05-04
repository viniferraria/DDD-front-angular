import { Component, OnInit } from '@angular/core';
import { ZooService } from '../zoo.service';

@Component({
  selector: 'app-zoo-list',
  templateUrl: './zoo-list.component.html',
  styleUrls: ['./zoo-list.component.css']
})
export class ZooListComponent implements OnInit {
  animals;
  isLoading;

  constructor(
    private zooService: ZooService,
  ) { }

  remove({ id: outerId }) {
    this.zooService.deleteAnimal({ id: outerId })
    .subscribe( _ => {
      this.animals = this.animals.filter(({ id }) => id !== outerId );
    });
  }

  edit({ id }) {
    console.log(this.animals[0].id++);
  }

  details(animal) {
    console.log(animal);
  }

  ngOnInit(): void {
    this.isLoading = true;
    this.zooService.fetchTable()
    .subscribe(data => {
      this.animals = data;
      this.isLoading = false;
    });
  }

}
