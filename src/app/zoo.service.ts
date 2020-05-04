import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import IZoo from './zoo';

import {
  fetchTableUrl,
// bulkUrl,
  createUrl,
  deleteUrl,
  editUrl,
  getByIdUrl
} from './constants';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ZooService {
// items = [];
  constructor(
    private http: HttpClient
  ) { }

  fetchTable(): Observable<IZoo[]> {
    return this.http.get<IZoo[]>(fetchTableUrl);
  }

//   sendFile() {
// 	return this.http.post());
//   }

  createAnimal({ body }) {
    return this.http.post(createUrl, body);
  }

  deleteAnimal({ id }) {
    return this.http.delete(deleteUrl({ id }));
  }

  editAnimal({ id, body }) {
    return this.http.put(editUrl({ id }), body);
  }

  getById({ id }) {
    return this.http.get<IZoo>(getByIdUrl({ id }));
  }

}
