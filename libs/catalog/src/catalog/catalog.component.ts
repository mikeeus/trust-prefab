import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'trust-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {
  houses = houses;

  constructor() {}

  ngOnInit() {}
}

const houses = [
  {
    name: "KEMER",
    images: { main: 'KEMER.png', sub: 'KEMER_sub.png', plan: 'KEMER_plan.png' },
    area: 40,
    model: "VP 511",
    short_desc: "35 + 5 m2 veranda tek katlı prefabrik konut",
    classification: "Single storey prefabricated house",
    description: "A  garden  where  your  children  are  raised  and  your flowers  are grown is priceless."
  },
  {
    name: "ALANYA",
    images: { main: 'ALANYA.png', sub: 'ALANYA_sub.png', plan: 'ALANYA_plan.png' },
    area: 45,
    model: "VP 512",
    short_desc: "40 + 5 m2 veranda tek katlı prefabrik konut",
    classification: "Single storey prefabricated house",
    description: "Enjoy the moment when our professional team assembles your building in quick and complete way."
  },
  {
    name: "SİDE",
    images: { main: 'SİDE.png', sub: 'SİDE_sub.png', plan: 'SİDE_plan.png' },
    area: 49,
    model: "VP 513",
    short_desc: "49 m2 tek katlı prefabrik konut",
    classification: "Single storey prefabricated house",
    description: "Live where you want to be; For example, in a garden decorated with wildflowers."
  },
  {
    name: "BELEK",
    images: { main: 'BELEK.png', sub: 'BELEK_sub.png', plan: 'BELEK_plan.png' },
    area: 49,
    model: "VP 514",
    short_desc: "42 + 7 m2 veranda tek katlı prefabrik konut",
    classification: "Single storey prefabricated house",
    description: "Living is to share the best moments with your beloved ones under a peaceful roof"
  },
  {
    name: "MARMARİS",
    images: { main: 'MARMARİS.png', sub: 'MARMARİS_sub.png', plan: 'MARMARİS_plan.png' },
    area: 53,
    model: "VP 515",
    short_desc: "47 + 6  m2 veranda tek katlı prefabrik konut",
    classification: "Single storey prefabricated house",
    description: "Starting a new day with the smell of spring flowers... It is what quality live is all about."
  },
  {
    name: "BODRUM",
    images: { main: 'BODRUM.png', sub: 'BODRUM_sub.png', plan: 'BODRUM_plan.png' },
    area: 62,
    model: "VP 516",
    short_desc: "55 + 7 m2 veranda tek katlı prefabrik konut",
    classification: "Single storey prefabricated house",
    description: "Life is the sum of a home surrounding you and the moments you enjoy in your lifetime."
  },
  {
    name: "FETHİYE",
    images: { main: 'FETHİYE.png', sub: 'FETHİYE_sub.png', plan: 'FETHİYE_plan.png' },
    area: 68,
    model: "VP 517",
    short_desc: "61 + 7 m2 veranda tek katlı prefabrik konut",
    classification: "Single storey prefabricated house",
    description: "We took inspiration from nature’s beauties and designed every detail of your home considering your wishes."
  },
  {
    name: "KUŞADASI",
    images: { main: 'KUŞADASI.png', sub: 'KUŞADASI_sub.png', plan: 'KUŞADASI_plan.png' },
    area: 73,
    model: "VP 518",
    short_desc: "73 m2 tek katlı prefabrik konut",
    classification: "Single storey prefabricated house",
    description: "Life’s biggest prize is waking up to a brand new morning in a place you dream of."
  }
]