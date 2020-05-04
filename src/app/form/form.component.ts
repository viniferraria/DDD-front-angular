import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ZooService } from '../zoo.service';
import IZoo from '../zoo';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  animal = {
    id: null,
    name: null,
    specie: null
  };
  animalForm;

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private zooService: ZooService,
  ) {
    }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.zooService.getById({id: params.get('id')})
      .subscribe((data: IZoo) => {
        this.animal = data;
        this.animalForm = this.formBuilder.group({
          name: this.animal.name,
          specie: this.animal.specie,
        });
      });
    });
  }

  onSubmit(formData) {

  }
}
