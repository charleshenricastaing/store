export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
}

export const products = [
  {
    id: 'phone-xl',
    name: 'Phone XL',
    price: 799,
    description: 'A large phone with one of the best screens',
  },
  {
    id: 'phone-mini',
    name: 'Phone Mini',
    price: 699,
    description: 'A great phone with one of the best cameras',
  },
  {
    id: 'phone-standard',
    name: 'Phone Standard',
    price: 299,
    description: '',
  },
];

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
