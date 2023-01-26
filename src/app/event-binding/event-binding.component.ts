import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.scss']
})
export class EventBindingComponent implements OnInit{
  ngOnInit(): void {
  }

  onClick(event: any){
    console.log("Hola que tal jeje")
    console.log(event)
    console.log("tipo de evento: "+ event.type)
  }
}
