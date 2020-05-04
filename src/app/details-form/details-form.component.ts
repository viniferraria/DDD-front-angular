import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details-form',
  templateUrl: './details-form.component.html',
  styleUrls: ['./details-form.component.css']
})
export class DetailsFormComponent implements OnInit {
id: string;

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(param => {
      this.id = param.get('id');
    });
  }

}
