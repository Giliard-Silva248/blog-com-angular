import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit{

  @Input()
  photoCoverContent:string = "https://www.unfe.org/wp-content/uploads/2019/04/SM-placeholder.png"
  @Input()
  titleContent:string = "MY ARTICLE"
  @Input()
  descriptionContent:string = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam, incidunt distinctio? Voluptatibus culpa iusto laudantium explicabo ipsum, totam, id placeat esse vel corporis incidunt consectetur! Veniam animi eum nostrum deleniti."

  constructor(){}
  ngOnInit(): void {}

}
