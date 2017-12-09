export class House {
  name: string;
  images: { main: string; sub: string; plan: string };
  area: number;
  model: string;
  short_desc: string;
  classification: string;
  description: string;
  floors: number;

  constructor(house: {
    name: string;
    images: { main: string; sub: string; plan: string };
    area: number;
    model: string;
    short_desc: string;
    classification: string;
    description: string;
    floors?: 2;
  }) {
    this.name = house.name;
    this.images = house.images;
    this.area = house.area;
    this.model = house.model;
    this.short_desc = house.short_desc;
    this.classification = house.classification;
    this.description = house.description;
    this.floors = house.floors || 1;
  }

  get floorplans() {
    if (this.floors === 1) {
      return [`${this.name}.jpg`];
    } else {
      return [`${this.name}_0.jpg`, `${this.name}_1.jpg`];
    }
  }
}
