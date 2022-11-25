import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from 'src/app/data/dataFake'

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit{

  @Input()
  photoCoverContent:string = ""
  @Input()
  titleContent:string = ""
  @Input()
  descriptionContent:string = ""
  @Input()
  creditoBCard:string = ""

  private id:string | null= "0"

  constructor( private route:ActivatedRoute){

  }
  ngOnInit(): void {
    this.route.paramMap.subscribe( value => this.id = value.get("id"))

    this.setValuesToComponent(this.id)
  }

  setValuesToComponent(id:string | null){
    const result = dataFake.filter(article => article.id == id)[0]

      this.creditoBCard = result.creditoCard
      
      this.titleContent = result.title
      this.descriptionContent = result.description
      this.photoCoverContent = result.photoCover

  }


}
