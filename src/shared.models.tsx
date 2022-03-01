export type User = {
  id: number;
  name: string;
};

export class Country {
  constructor(
    public id: string,
    public name: string,
    public position: number[]
  ) {}
}

export class Building {
  id: number;
  name: string;
  userId: number;
  country?: Country;
  constructor(id: number, name: string, userId: number, country: Country) {
    this.id = id;
    this.name = name;
    this.userId = userId;
    this.country = country;
  }
}

export type BuildingsReducerAction =
  | { type: 'POPULATE_BUILDINGS'; items: Building[] }
  | { type: 'ADD_BUILDING'; building: Building }
  | { type: 'REMOVE_BUILDING'; id: number };

export type BuildingContextType = {
  buildings: Building[];
  buildingsDispatch: (value: BuildingsReducerAction) => void;
};
