import {faker} from '@faker-js/faker'
import { Mappable } from './Mappable';

export class Company implements Mappable {
  companyName : string;
  catchPhrase : string;
  location : {
    latitude : number,
    longitude : number
  }

  constructor () {
    this.companyName = faker.company.name();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      latitude : faker.location.latitude(),
      longitude : faker.location.longitude()
    }
  }

  markerInfo = () : string => {
    return `
    <div>
    <h3>Company Name : ${this.companyName} </h3>
    <h5> Catch phrase : ${this.catchPhrase}</h5>
    </div>
    `
  }
}