import { Component, OnInit } from '@angular/core';
import { WashingService } from 'src/app/service/washing.service';

@Component({
  selector: 'app-washtest',
  templateUrl: './washtest.component.html',
  styleUrls: ['./washtest.component.scss']
})
export class WashtestComponent implements OnInit {

  washes: any[] = ['LAVAÇÃO SIMPLES', 'LAVAÇÃO PREMIUM'];
  vehicles: any[] = ['CARRO', 'SUV', 'CAMIONETE', 'MOTO'];
  prices: any = {};
  datas: any[] = [];

  selectedWashing: any = null;
  selectedVehicle: any = null;
  selectedPrice: any = null;

  constructor(private washingService: WashingService) {}

  ngOnInit(): void {
    this.getAllPrices();
  }

  getAllPrices() {
    this.washingService.getAllItems().subscribe((data: any) => {
      this.datas = data;
      this.populatePrices();
      console.log("Preços :", data);
    });
  }

  populatePrices() {
    this.prices = {};

    for (const entry of this.datas) {
      if (!this.prices[entry.formattedWashingType]) {
        this.prices[entry.formattedWashingType] = {};
      }
      this.prices[entry.formattedWashingType][entry.formattedVehicleType] = entry.formattedPrice;
    }
  }

  onWashingTypeChange() {
    this.selectedVehicle = null;
    this.selectedPrice = null;
    console.log('Tipo de Lavação selecionado:', this.selectedWashing);
  }
  
  onVehicleTypeChange() {
    if (this.selectedWashing && this.selectedVehicle) {
      this.selectedPrice = this.prices[this.selectedWashing][this.selectedVehicle];
    } else {
      this.selectedPrice = null;
    }
    console.log('Tipo de Veículo selecionado:', this.selectedVehicle);
    console.log('Preço selecionado:', this.selectedPrice);
  }
}
