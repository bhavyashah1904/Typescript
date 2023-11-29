/// <reference types="@types/google.maps" />

import { CustomMap } from './CustomMap';

import { User } from './User';
import { Company } from './Company';

const user = new User();
const company = new Company();

// console.log(user);
// console.log(company);

const newMap = new CustomMap('map');

newMap.addMapper(user);
newMap.addMapper(company);
