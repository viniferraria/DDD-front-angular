import { Component, OnInit } from '@angular/core';
import { ZooService } from '../zoo.service';
import IZoo from '../zoo';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.css']
})
export class EditFormComponent implements OnInit {

  constructor(
    private zooService: ZooService,
  ) { }

  ngOnInit(): void {
  }

  saveChanges(formData: IZoo) {
    this.zooService.editAnimal({ id: formData.id, body: formData})
    .subscribe( _ => {
        console.log('saved changes');
    });
  }

}
