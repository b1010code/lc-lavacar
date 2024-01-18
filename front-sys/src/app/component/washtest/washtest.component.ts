import { Component, OnInit } from '@angular/core';
import { WashingService } from 'src/app/service/washing.service';

@Component({
  selector: 'app-washtest',
  templateUrl: './washtest.component.html',
  styleUrls: ['./washtest.component.scss']
})
export class WashtestComponent implements OnInit {

  autos: any[] = [];

  selectedService: any = null;

  constructor( private washingServive: WashingService){}  
  
  ngOnInit(): void {
    this.getAllPrices();
  }

  getAllPrices() {
    this.washingServive.getAllItems().subscribe((data: any) => {
      this.autos = data;
      console.log("Preços :", data)
    });
  }
}
