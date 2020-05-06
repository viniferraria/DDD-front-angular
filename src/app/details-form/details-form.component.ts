import { Component, OnInit } from '@angular/core';
import { ZooService } from '../zoo.service';
import IZoo from '../zoo';

@Component({
  selector: 'app-details-form',
  templateUrl: './details-form.component.html',
  styleUrls: ['./details-form.component.css']
})
export class DetailsFormComponent implements OnInit {
  canEdit = false;
  constructor(
    private zooService: ZooService,
  ) { }

  ngOnInit(): void {
  }

  enableEdit() {
    this.canEdit = !this.canEdit;
  }

  saveChanges(formData: IZoo) {
    this.zooService.editAnimal({ id: formData.id, body: formData})
    .subscribe( _ => {
        alert('Animal updated');
    });
  }
}
