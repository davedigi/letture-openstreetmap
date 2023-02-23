import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "Letture";
  myLat: number = 42;
  myLng: number = 12;

  updateMap() {}
}
