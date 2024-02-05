import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrl: './photos.component.css'
})
export class PhotosComponent {

  //PRIPIEDAD QUE GUARDA LOS DATOS LEIDOS (PHOTOS)
  data:any[] = [];

  //CONSTRUCTOR
  constructor(private dataService:DataService){}

  //METODO ngOnInit
  ngOnInit(): void {
    this.dataService.getPhotos().subscribe((posts:any[''])=>{
      this.data = posts;
    });
  }
  
}
