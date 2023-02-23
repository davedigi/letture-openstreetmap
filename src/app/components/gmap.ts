import { Component, Input, AfterViewInit } from "@angular/core";
import * as L from "leaflet";

@Component({
  selector: "gmap",
  template: 'lat={{lat}} lng={{lng}}<br />  <div id="{{divName}}"></div><br/>'
  // inputs: ["lat", "lng"]
})
// export class MapComponent implements OnInit {
export class MapComponent implements AfterViewInit {
  @Input() lat: number;
  @Input() lng: number;
  @Input() divName: string;

  private map;

  private initMap(): void {
    console.log(this.divName, this.lat, this.lng);
    this.map = L.map(this.divName, {
      center: [this.lat, this.lng],
      zoom: 7
    });
    const tiles = L.tileLayer(
      "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      {
        maxZoom: 18,
        minZoom: 3,
        attribution:
          '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      }
    );

    tiles.addTo(this.map);
  }

  ngAfterViewInit(): void {
    this.initMap();
  }

  // ngOnInit() {
  //   // var map = L.map("mapid").setView([51.505, -0.09], 13);
  //   console.log(this.divName);
  //   const map = L.map(this.divName).setView([this.lat, this.lng], 7);
  //   L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  //     maxZoom: 18
  //   }).addTo(map);
  //   // L.marker([51.5, -0.09])
  //   //   .addTo(map)
  //   //   .bindPopup("A sample location in London.")
  //   //   .openPopup();

  //   // // initialize the map
  //   // const map = L.map("map").setView([51.505, -0.09], 13);

  //   // // add the OpenStreetMap tile layer
  //   // const osmUrl = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
  //   // const osmAttrib =
  //   //   'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors';
  //   // const osmLayer = L.tileLayer(osmUrl, {
  //   //   maxZoom: 18,
  //   //   attribution: osmAttrib
  //   // });
  //   // osmLayer.addTo(map);

  //   // // add a marker to the map
  //   // // const marker = L.marker([51.5, -0.09]).addTo(map);
  // }
}
