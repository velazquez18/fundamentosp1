import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent implements OnInit {

  //PRIPIEDAD QUE GUARDA LOS DATOS LEIDOS (POSTS)
  data:any[] = [];

  //CONSTRUCTOR
  constructor(private dataService:DataService){}

  //METODO ngOnInit
  ngOnInit(): void {
    this.dataService.getPosts().subscribe((posts:any[''])=>{
      this.data = posts;
    });
  }
  
}
