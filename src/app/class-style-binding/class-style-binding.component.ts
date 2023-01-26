import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-style-binding',
  templateUrl: './class-style-binding.component.html',
  styleUrls: ['./class-style-binding.component.scss']
})


export class ClassStyleBindingComponent implements OnInit {

  public colorClass = "text-success"
  public green = true;

  constructor() { }

  ngOnInit(): void {
  }

  cambiarColor() {
    if (this.green) {
      this.colorClass = "text-alert"
    } else {
      this.colorClass = "text-success"
    }
    this.green = !this.green;
  }

}
