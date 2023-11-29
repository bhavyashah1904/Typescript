import { faker } from '@faker-js/faker';
import { Mappable } from './Mappable';

export class User implements Mappable {
  firstName: string;
  lastName: string;
  location: {
    latitude: number;
    longitude: number;
  };

  constructor() {
    // this.name = faker.name.firstName();
    this.firstName = faker.person.firstName();
    this.lastName = faker.person.lastName();
    this.location = {
      latitude: faker.location.latitude(),
      longitude: faker.location.longitude(),
    };
  }
  markerInfo = (): string => {
    return `
      <h3>User Name : ${this.firstName} ${this.lastName} </h3>
      `;
  };
}
