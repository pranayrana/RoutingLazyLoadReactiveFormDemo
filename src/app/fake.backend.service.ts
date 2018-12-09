import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable()
export class FakeBackendService implements InMemoryDbService {

  createDb() {
    // tslint:disable-next-line:prefer-const
    let employees = [{
      id: 1,
      Name: 'Xyz',
      Email: 'xyz@gmail.com',
      Phone: '998765333',
      Addresses: [{ Type: 'Home', Street: 'OABC street', City: 'ABC', PinCode: '12567' }]
    },
    {
      id: 2,
      Name: 'Xyz2',
      Email: 'xyz2@gmail.com',
      Phone: '998765333',
      Addresses: [{ Type: 'Home', Street: 'OABC street', City: 'ABC', PinCode: '12567' }]
    }];

    const heroes = [
      { id: 0, name: 'Zero' },
      { id: 11, name: 'Mr. Nice' },
      { id: 12, name: 'Narco' },
      { id: 13, name: 'Bombasto' },
      { id: 14, name: 'Celeritas' },
      { id: 15, name: 'Magneta' },
      { id: 16, name: 'RubberMan' },
      { id: 17, name: 'Dynama' },
      { id: 18, name: 'Dr IQ' },
      { id: 19, name: 'Magma' },
      { id: 20, name: 'Tornado' }
    ];

    return {
      employees, heroes
    };
  }
}