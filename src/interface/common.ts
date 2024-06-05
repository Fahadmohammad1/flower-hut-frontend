export interface IFlower {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
}

export interface IProfile {
  avatar?: string;
  name?: string;
  email?: string;
  password?: string;
}
