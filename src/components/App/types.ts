export interface Community {
  id: string;
  name: string;
  imgUrl: string;
  group: string;
}

export interface Home {
  id: string;
  communityId: string;
  price: number;
  area: number;
  type: string;
}
