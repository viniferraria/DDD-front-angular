import { Component, OnInit } from '@angular/core';
import { ZooService } from '../zoo.service';

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.css']
})
export class CreateFormComponent implements OnInit {

  constructor(
    private zooService: ZooService,
  ) { }

  ngOnInit(): void {
  }

  createAnimal({ name, specie }) {
    this.zooService.createAnimal({body: { name, specie }})
    .subscribe( _ => console.log('created'));
  }

}
