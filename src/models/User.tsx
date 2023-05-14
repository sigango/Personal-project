interface User {
    id: number;
    entityCode: number;
    fullname: string;
    username: string;
    password: string;
    mail: string;
    phone: string;
    gender: 'male' | 'female' | 'others';
  }
  
  export type { User };
  