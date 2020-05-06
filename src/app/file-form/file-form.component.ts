import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ZooService } from '../zoo.service';

@Component({
  selector: 'app-file-form',
  templateUrl: './file-form.component.html',
  styleUrls: ['./file-form.component.css']
})
export class FileFormComponent implements OnInit {
   finished: boolean;
   file;
   @ViewChild('fileUpload', {static: false}) fileUpload: ElementRef;
  constructor(
    private zooService: ZooService,
  ) { }

  ngOnInit(): void {
  }

  private uploadFile(file) {
    const formData = new FormData();
    formData.append('file', file);
    this.zooService.sendFile({ formData })
    .subscribe( _ =>  {
      this.finished = true;
    });
  }

  onChange() {
    const fileUpload = this.fileUpload.nativeElement;
    if (fileUpload.files.length > 0) {
      this.file = fileUpload.files[0];
      this.uploadFile(this.file);
      alert('Uploaded');
      this.file = null;
    } else {
      console.log('Missing file');
    }
  }


  onClick() {
    this.fileUpload.nativeElement.click();
  }
}
