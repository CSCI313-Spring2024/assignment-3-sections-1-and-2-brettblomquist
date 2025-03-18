import { Component, inject } from '@angular/core';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocation } from '../housing-location';
import { HousingService } from '../housing.service';

@Component({
  selector: 'app-home',
  imports: [HousingLocationComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  //readonly baseUrl = 'https://angular.dev/assets/images/tutorials/common'; 
  housingLocationList: HousingLocation[] = [];
  housingService: HousingService = inject(HousingService);
  filteredLocationList: HousingLocation[]=[];

  constructor(){
    this.housingLocationList = this.housingService.getAllHousingLocations();
    this.filteredLocationList = this.housingLocationList;
  }

  filterResults(text:string){ 
    if (!text) { 
      this.filteredLocationList = this.housingLocationList; 
      return; 
    } 
    this.filteredLocationList = this.housingLocationList.filter((housingLocation) => 
      housingLocation?.city.toLowerCase().includes(text.toLowerCase()), 
    ); 
  } 
}

