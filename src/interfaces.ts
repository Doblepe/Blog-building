interface address {
    street: string,
    number: number
  }
  // Do not nest objects on interfaces
 export  interface User {
      name: string,
      age: number,
      address: address,
      admin: boolean
  }