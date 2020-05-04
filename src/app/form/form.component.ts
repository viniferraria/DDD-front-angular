import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ZooService } from '../zoo.service';
import IZoo from '../zoo';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  animalForm: FormGroup;
  // slug param
  id: number;
  // html slot
  @Input() canEdit: boolean;
  // emit event to parent
  @Output() emittedForm = new EventEmitter<IZoo>();

  constructor(
    private route: ActivatedRoute,
    private zooService: ZooService,
    private formBuilder: FormBuilder,
  ) {
    }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      params => this.id = Number(params.get('id'))
    );
    if (this.id) {
      this.zooService.getById({id: this.id})
      .subscribe((data: IZoo) => {
        this.createForm(data);
      });
    } else {
      this.createForm({});
    }
  }

  createForm({name= '' , specie = ''}) {
    this.animalForm = this.formBuilder.group({
      name,
      specie,
    });
  }

  onSubmit(formData) {
    this.emittedForm.emit({
      id: this.id,
      ...formData
    });
  }
}
