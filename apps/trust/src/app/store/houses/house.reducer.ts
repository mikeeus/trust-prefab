import { Action } from '@ngrx/store';
import { House } from '@trust/models';

export interface State {
  ids: string[];
  entities: { [key: string]: House };
  models: string[];
  modelsMap: any;
}

export const getHouses = (state: State) => state.ids.reduce((e, b) => [...e, state.entities[b]], []);

// tslint:disable:cyclomatic-complexity
/** Order state reducer. */
export function reducer<T>(state = initialState, action: Action): State {
  return state;
}
// tslint:disable:max-line-length
const initialState: State = {
  ids: ["KEMER", "ALANYA", "SİDE", "BELEK", "MARMARİS", "BODRUM", "FETHİYE", "KUŞADASI", "DİDİM", "ASSOS", "AYVALIK", "BERGAMA", "EDREMİT", "GÖREME", "KAPADOKYA", "KÜÇÜKYALI","MANAVGAT", "OLİMPOS", "ABANT", "ÜRGÜP", "ASPENDOS", "DATÇA", "ÇEŞME", "SAKLIKENT", "KARTALKAYA", "ALAÇATI", "AVŞA", "BOZCAADA", "KAŞ", "ILICA", "ALTINOLUK", "AKÇAY", "AMASRA", "URLA", "KALKAN", "GÜMÜŞLÜK", "YALIKAVAK", "MİLAS", "BORNOVA", "DİKİLİ", "CUNDA", "ERDEK", "HALİKARNAS"],
  models: ["VP 511", "VP 512", "VP 513", "VP 514", "VP 515", "VP 516", "VP 517", "VP 518", "VP 538", "VP 519", "VP 520", "VP 521", "VP 522", "VP 523", "VP 524", "VP 525", "VP 526", "VP 527", "VP 528", "VP 529", "VP 530", "VP 531", "VP 534", "VP 532", "VP 533", "VP 535", "VP 536", "VP 537", "VP 711", "VP 712", "VP 713", "VP 714", "VP 715", "VP 716", "VP 717", "VP 718", "VP 719", "VP 720", "VP 721", "VP 722", "VP 723", "VP 724", "VP 725"
  ],
  modelsMap: {
    "VP 511": "KEMER",
    "VP 512": "ALANYA",
    "VP 513": "SİDE",
    "VP 514": "BELEK",
    "VP 515": "MARMARİS",
    "VP 516": "BODRUM",
    "VP 517": "FETHİYE",
    "VP 518": "KUŞADASI",
    "VP 538": "DİDİM",
    "VP 519": "ASSOS",
    "VP 520": "AYVALIK",
    "VP 521": "BERGAMA",
    "VP 522": "EDREMİT",
    "VP 523": "GÖREME",
    "VP 524": "KAPADOKYA",
    "VP 525": "KÜÇÜKYALI",
    "VP 526": "MANAVGAT",
    "VP 527": "OLİMPOS",
    "VP 528": "ABANT",
    "VP 529": "ÜRGÜP",
    "VP 530": "ASPENDOS",
    "VP 531": "DATÇA",
    "VP 534": "ÇEŞME",
    "VP 532": "SAKLIKENT",
    "VP 533": "KARTALKAYA",
    "VP 535": "ALAÇATI",
    "VP 536": "AVŞA",
    "VP 537": "BOZCAADA",
    "VP 711": "KAŞ",
    "VP 712": "ILICA",
    "VP 713": "ALTINOLUK",
    "VP 714": "AKÇAY",
    "VP 715": "AMASRA",
    "VP 716": "URLA",
    "VP 717": "KALKAN",
    "VP 718": "GÜMÜŞLÜK",
    "VP 719": "YALIKAVAK",
    "VP 720": "MİLAS",
    "VP 721": "BORNOVA",
    "VP 722": "DİKİLİ",
    "VP 723": "CUNDA",
    "VP 724": "ERDEK",
    "VP 725": "HALİKARNAS",
  },
  entities: {
    KEMER: new House({
      name: "KEMER",
      images: { main: 'KEMER.png', sub: 'KEMER_sub.png', plan: 'KEMER.jpg' },
      area: 40,
      model: "VP 511",
      short_desc: "35 + 5 m2 veranda tek katlı prefabrik konut",
      classification: "Single storey prefabricated house",
      description: "A  garden  where  your  children  are  raised  and  your flowers  are grown is priceless."
    }),
    ALANYA: new House({
      name: "ALANYA",
      images: { main: 'ALANYA.png', sub: 'ALANYA_sub.png', plan: 'ALANYA.jpg' },
      area: 45,
      model: "VP 512",
      short_desc: "40 + 5 m2 veranda tek katlı prefabrik konut",
      classification: "Single storey prefabricated house",
      description: "Enjoy the moment when our professional team assembles your building in quick and complete way."
    }),
    SİDE: new House({
      name: "SİDE",
      images: { main: 'SİDE.png', sub: 'SİDE_sub.png', plan: 'SİDE.jpg' },
      area: 49,
      model: "VP 513",
      short_desc: "49 m2 tek katlı prefabrik konut",
      classification: "Single storey prefabricated house",
      description: "Live where you want to be; For example, in a garden decorated with wildflowers."
    }),
    BELEK: new House({
      name: "BELEK",
      images: { main: 'BELEK.png', sub: 'BELEK_sub.png', plan: 'BELEK.jpg' },
      area: 49,
      model: "VP 514",
      short_desc: "42 + 7 m2 veranda tek katlı prefabrik konut",
      classification: "Single storey prefabricated house",
      description: "Living is to share the best moments with your beloved ones under a peaceful roof"
    }),
    MARMARİS: new House({
      name: "MARMARİS",
      images: { main: 'MARMARİS.png', sub: 'MARMARİS_sub.png', plan: 'MARMARİS.jpg' },
      area: 53,
      model: "VP 515",
      short_desc: "47 + 6  m2 veranda tek katlı prefabrik konut",
      classification: "Single storey prefabricated house",
      description: "Starting a new day with the smell of spring flowers... It is what quality live is all about."
    }),
    BODRUM: new House({
      name: "BODRUM",
      images: { main: 'BODRUM.png', sub: 'BODRUM_sub.png', plan: 'BODRUM.jpg' },
      area: 62,
      model: "VP 516",
      short_desc: "55 + 7 m2 veranda tek katlı prefabrik konut",
      classification: "Single storey prefabricated house",
      description: "Life is the sum of a home surrounding you and the moments you enjoy in your lifetime."
    }),
    FETHİYE: new House({
      name: "FETHİYE",
      images: { main: 'FETHİYE.png', sub: 'FETHİYE_sub.png', plan: 'FETHİYE.jpg' },
      area: 68,
      model: "VP 517",
      short_desc: "61 + 7 m2 veranda tek katlı prefabrik konut",
      classification: "Single storey prefabricated house",
      description: "We took inspiration from nature’s beauties and designed every detail of your home considering your wishes."
    }),
    KUŞADASI: new House({
      name: "KUŞADASI",
      images: { main: 'KUŞADASI.png', sub: 'KUŞADASI_sub.png', plan: 'KUŞADASI.jpg' },
      area: 73,
      model: "VP 518",
      short_desc: "73 m2 tek katlı prefabrik konut",
      classification: "Single storey prefabricated house",
      description: "Life’s biggest prize is waking up to a brand new morning in a place you dream of."
    }),
    DİDİM: new House({
      name: "DİDİM",
      images: { main: 'DİDİM.png', sub: 'DİDİM_sub.png', plan: 'DİDİM.jpg' },
      area: 72,
      model: "VP 538",
      short_desc: "68 + 4 m2 veranda tek katlı prefabrik konut",
      classification: "Single storey prefabricated house",
      description: "Every  square  of  it  is  designed  for  your  needs  and  hobbies. Therefore, only thing you need is to experience this privilege"
    }),
    ASSOS: new House({
      name: "ASSOS",
      images: { main: 'ASSOS.png', sub: 'ASSOS_sub.png', plan: 'ASSOS.jpg' },
      area: 75,
      model: "VP 519",
      short_desc: "75 m2 tek katlı prefabrik konut",
      classification: "Single storey prefabricated house",
      description: "Stay away from crowds, live your own nature and happiness."
      }),
    AYVALIK: new House({
      name: "AYVALIK",
      images: { main: 'AYVALIK.png', sub: 'AYVALIK_sub.png', plan: 'AYVALIK.jpg' },
      area: 77,
      model: "VP 520",
      short_desc: "69 + 8 m2 tek katlı prefabrik konut",
      classification: "Single storey prefabricated house",
      description: "Things  that  make  home  a  home  are  beautiful  feelings  and unforgettable moments."
    }),
    BERGAMA: new House({
      name: "BERGAMA",
      images: { main: 'BERGAMA.png', sub: 'BERGAMA_sub.png', plan: 'BERGAMA.jpg' },
      area: 78,
      model: "VP 521",
      short_desc: "70 + 8 m2 veranda tek katlı prefabrik konut",
      classification: "Single storey prefabricated house",
      description: "Every  moment  is  special.  Therefore,  do  not  hesitate  to  touch upon  beauties  and  reward  yourself  and  your  beloved  ones  a beautiful life."
    }),
    EDREMİT: new House({
      name: "EDREMİT",
      images: { main: 'EDREMİT.png', sub: 'EDREMİT_sub.png', plan: 'EDREMİT.jpg' },
      area: 81,
      model: "VP 522",
      short_desc: "70 + 11 m2 veranda tek katlı prefabrik konut",
      classification: "Single storey prefabricated house",
      description: "Energy and happiness surrounding you start once you get your home. Beautiful moments you share are not forgot but live for years."
    }),
    GÖREME: new House({
      name: "GÖREME",
      images: { main: 'GÖREME.png', sub: 'GÖREME_sub.png', plan: 'GÖREME.jpg' },
      area: 82,
      model: "VP 523",
      short_desc: "79 + 3 m2 veranda tek katlı prefabrik konut",
      classification: "Single storey prefabricated house",
      description: "Feeling  where  you  belong,  a  living  space  reflecting  on  you completely...This is what freedom is."
    }),
    KAPADOKYA: new House({
      name: "KAPADOKYA",
      images: { main: "KAPADOKYA.png", sub: "KAPADOKYA_sub.png", plan: "KAPADOKYA.png" },
      area: 84,
      model: "VP 524",
      short_desc: "70 + 14 m2 veranda tek katlı prefabrik konut",
      classification: "Single storey prefabricated house",
      description: "We  took  inspiration  from  life  when  we  designed  your  home. Details inside from life and city’s dynamism which can be seen only by epicures aroused on our lines."
      }),
    KÜÇÜKYALI: new House({
      name: "KÜÇÜKYALI",
      images: { main: "KÜÇÜKYALI.png", sub: "KÜÇÜKYALI_sub.png", plan: "KÜÇÜKYALI.png" },
      area: 86,
      model: "VP 525",
      short_desc: "86 m2 tek katlı prefabrik konut",
      classification: "Single storey prefabricated house",
      description: "We build environmentally friendly homes; because we know that what we give to nature will be given back."
    }),
    MANAVGAT: new House({
      name: "MANAVGAT",
      images: { main: 'MANAVGAT.png', sub: 'MANAVGAT_sub.png', plan: 'MANAVGAT.jpg' },
      area: 93,
      model: "VP 526",
      short_desc: "83 + 10 m2 veranda tek katlı prefabrik konut",
      classification: "Single storey prefabricated house",
      description: "Live  everyday  like  going  on  a  relaxing,  exciting  journey  in  the heart of nature."
    }),
    OLİMPOS: new House({
      name: "OLİMPOS",
      images: { main: 'OLİMPOS.png', sub: 'OLİMPOS_sub.png', plan: 'OLİMPOS.jpg' },
      area: 96,
      model: "VP 527",
      short_desc: "89 + 7 m2 veranda tek katlı prefabrik konut",
      classification: "Single storey prefabricated house",
      description: "Like painted by a surreal, escapist painter... Colourful, vivacious and comfortable..."
    }),
    ABANT: new House({
      name: "ABANT",
      images: { main: 'ABANT.png', sub: 'ABANT_sub.png', plan: 'ABANT.jpg' },
      area: 98,
      model: "VP 528",
      short_desc: "94 + 4 m2 veranda tek katlı prefabrik konut",
      classification: "Single storey prefabricated house",
      description: "Was  it  a tiresome  day?  Extend  your feet,  let  your  self  into the arms of your home and start living again."
    }),
    ÜRGÜP: new House({
      name: "ÜRGÜP",
      images: { main: 'ÜRGÜP.png', sub: 'ÜRGÜP_sub.png', plan: 'ÜRGÜP.jpg' },
      area: 110,
      model: "VP 529",
      short_desc: "108 + 2 m2 veranda tek katlı prefabrik konut",
      classification: "Single storey prefabricated house",
      description: "Moments  you  enjoy  mostly  are  the  ones  that  you  share  your home with your beloved."
    }),
    ASPENDOS: new House({
      name: "ASPENDOS",
      images: { main: 'ASPENDOS.png', sub: 'ASPENDOS_sub.png', plan: 'ASPENDOS.jpg' },
      area: 113,
      model: "VP 530",
      short_desc: "108 + 5 m2 veranda tek katlı prefabrik konut",
      classification: "Single storey prefabricated house",
      description: "Everything is set to step new beauties and everything is like in your dreams."
    }),
    DATÇA: new House({
      name: "DATÇA",
      images: { main: 'DATÇA.png', sub: 'DATÇA_sub.png', plan: 'DATÇA.jpg' },
      area: 117,
      model: "VP 531",
      short_desc: "104 + 13 m2 veranda tek katlı prefabrik konut",
      classification: "Single storey prefabricated house",
      description: "There are some things that have not lost their meanings yet... So, we keep them alive at your home with love."
    }),
    ÇEŞME: new House({
      name: "ÇEŞME",
      images: { main: 'ÇEŞME.png', sub: 'ÇEŞME_sub.png', plan: 'ÇEŞME.jpg' },
      area: 121,
      model: "VP 534",
      short_desc: "113 + 8 m2 veranda tek katlı prefabrik konut",
      classification: "Single storey prefabricated house",
      description: "Bells’  laughs  surround  your  living  space  like  an  impressive melody. Being mesmerized has not been that beautiful before."
    }),
    SAKLIKENT: new House({
      name: "SAKLIKENT",
      images: { main: "SAKLIKENT.png", sub: "SAKLIKENT_sub.png", plan: "SAKLIKENT.png" },
      area: 122,
      model: "VP 532",
      short_desc: "111 + 11 m2 veranda tek katlı prefabrik konut",
      classification: "Single storey prefabricated house",
      description: "Happiness and beautiful moments are not to be delayed. Because future for your beloved ones starts from today."
    }),
    KARTALKAYA: new House({
      name: "KARTALKAYA",
      images: { main: "KARTALKAYA.png", sub: "KARTALKAYA_sub.png", plan: "KARTALKAYA.png" },
      area: 123,
      model: "VP 533",
      short_desc: "109 + 14 m2 veranda tek katlı prefabrik konut",
      classification: "Single storey prefabricated house",
      description: "Every single house that gives a privilege on your live was designed by professionals."
    }),
    ALAÇATI: new House({
      name: "ALAÇATI",
      images: { main: 'ALAÇATI.png', sub: 'ALAÇATI_sub.png', plan: 'ALAÇATI.jpg' },
      area: 126,
      model: "VP 535",
      short_desc: "113 + 13 m2 veranda tek katlı prefabrik konut",
      classification: "Single storey prefabricated house",
      description: "Beauty is in the eye of the beholder. It is time to live your dreams in houses suitable to everyone’s taste."
    }),
    AVŞA: new House({
      name: "AVŞA",
      images: { main: 'AVŞA.png', sub: 'AVŞA_sub.png', plan: 'AVŞA.jpg' },
      area: 129,
      model: "VP 536",
      short_desc: "129 m2 tek katlı prefabrik konut",
      classification: "Single storey prefabricated house",
      description: "What is more valuable than raising your child in a life with full of love and trust?"
    }),
    BOZCAADA: new House({
      name: "BOZCAADA",
      images: { main: 'BOZCAADA.png', sub: 'BOZCAADA_sub.png', plan: 'BOZCAADA.jpg' },
      area: 166,
      model: "VP 537",
      short_desc: "147 + 19 m2 veranda tek katlı prefabrik konut",
      classification: "Single storey prefabricated house",
      description: "If you plan to go outside to eat, do not forget that you have a wonderful garden."
    }),
    KAŞ: new House({
      name: "KAŞ",
      images: { main: 'KAŞ.png', sub: 'KAŞ_sub.png', plan: 'KAŞ.jpg' },
      area: 82,
      model: "VP 711",
      short_desc: "76 + 6 m2 veranda iki katlı prefabrik konut",
      classification: "Double storey prefabricated house",
      description: "We thought everything at your home to enjoy life.",
      floors: 2
    }),
    ILICA: new House({
      name: "ILICA",
      images: { main: 'ILICA.png', sub: 'ILICA_sub.png', plan: 'ILICA.jpg' },
      area: 92,
      model: "VP 712",
      short_desc: "82 + 10 m2 veranda iki katlı prefabrik konut",
      classification: "Double storey prefabricated house",
      description: "We  gathered  happiness  under the  same  roof for  you  and  your beloved ones.",
      floors: 2
    }),
    ALTINOLUK: new House({
      name: "ALTINOLUK",
      images: { main: "ALTINOLUK.png", sub: "ALTINOLUK_sub.png", plan: "ALTINOLUK.png" },
      area: 100,
      model: "VP 713",
      short_desc: "84 + 16 m2 veranda iki katlı prefabrik konut",
      classification: "Double storey prefabricated house",
      description: "Have a laugh, have fun and share the happiness. All good things",
      floors: 2
    }),
    AKÇAY: new House({
      name: "AKÇAY",
      images: { main: 'AKÇAY.png', sub: 'AKÇAY_sub.png', plan: 'AKÇAY.jpg' },
      area: 100,
      model: "VP 714",
      short_desc: "90 + 10 m2 veranda iki katlı prefabrik konut",
      classification: "Double storey prefabricated house",
      description: "The most beautiful things that warm your home are your laughs and unforgettable memories you shared",
      floors: 2
    }),
    AMASRA: new House({
      name: "AMASRA",
      images: { main: 'AMASRA.png', sub: 'AMASRA_sub.png', plan: 'AMASRA.jpg' },
      area: 105,
      model: "VP 715",
      short_desc: "95 + 10 m2 veranda iki katlı prefabrik konut",
      classification: "Double storey prefabricated house",
      description: "Your home is ready whereever you want to be. It is your choice. Maybe a wind coming from see greets you or you start the day with the amazing smell of pine trees.",
      floors: 2
    }),
    URLA: new House({
      name: "URLA",
      images: { main: 'URLA.png', sub: 'URLA_sub.png', plan: 'URLA.jpg' },
      area: 114,
      model: "VP 716",
      short_desc: "98 + 16 m2 veranda iki katlı prefabrik konut",
      classification: "Double storey prefabricated house",
      description: "You find  peace  and  coziness  at  your  home,  you  will  be  part  of happiness each day.",
      floors: 2
    }),
    KALKAN: new House({
      name: "KALKAN",
      images: { main: 'KALKAN.png', sub: 'KALKAN_sub.png', plan: 'KALKAN.jpg' },
      area: 118,
      model: "VP 717",
      short_desc: "102 + 16 m2 veranda iki katlı prefabrik konut",
      classification: "Double storey prefabricated house",
      description: "Imagine you wake up to an unique morning with birds’ songs. It is what life is.",
      floors: 2
    }),
    GÜMÜŞLÜK: new House({
      name: "GÜMÜŞLÜK",
      images: { main: 'GÜMÜŞLÜK.png', sub: 'GÜMÜŞLÜK_sub.png', plan: 'GÜMÜŞLÜK.jpg' },
      area: 122,
      model: "VP 718",
      short_desc: "98 + 21 m2 veranda iki katlı prefabrik konut",
      classification: "Double storey prefabricated house",
      description: "Those who want to realize their dreams know that details matter.",
      floors: 2
    }),
    YALIKAVAK: new House({
      name: "YALIKAVAK",
      images: { main: "YALIKAVAK.png", sub: "YALIKAVAK_sub.png", plan: "YALIKAVAK.png" },
      area: 131,
      model: "VP 719",
      short_desc: "110 + 21 m2 veranda iki katlı prefabrik konut",
      classification: "Double storey prefabricated house",
      description: "It is not only the sun scattering through curtain that lights your home... it is also the smiles of your beloved ones.",
      floors: 2
    }),
    MİLAS: new House({
      name: "MİLAS",
      images: { main: 'MİLAS.png', sub: 'MİLAS_sub.png', plan: 'MİLAS.jpg' },
      area: 134,
      model: "VP 720",
      short_desc: "124 + 10 m2 veranda iki katlı prefabrik konut",
      classification: "Double storey prefabricated house",
      description: "Take a deep breath, go on a journey in the heart of nature between untouched beauties.",
      floors: 2
    }),
    BORNOVA: new House({
      name: "BORNOVA",
      images: { main: 'BORNOVA.png', sub: 'BORNOVA_sub.png', plan: 'BORNOVA.jpg' },
      area: 142,
      model: "VP 721",
      short_desc: "128 + 14 m2 veranda iki katlı prefabrik konut",
      classification: "Double storey prefabricated house",
      description: "For us, every moment you live is unique. We considered everything to enjoy these moments.",
      floors: 2
    }),
    DİKİLİ: new House({
      name: "DİKİLİ",
      images: { main: 'DİKİLİ.png', sub: 'DİKİLİ_sub.png', plan: 'DİKİLİ.jpg' },
      area: 149,
      model: "VP 722",
      short_desc: "116 + 33 m2 veranda iki katlı prefabrik konut",
      classification: "Double storey prefabricated house",
      description: `Your new motto will be silence and peace. At your new home, in the
        heart of nature you will go on fairytale like journey and find yourself in a new world.`,
      floors: 2
    }),
    CUNDA: new House({
      name: "CUNDA",
      images: { main: 'CUNDA.png', sub: 'CUNDA_sub.png', plan: 'CUNDA.jpg' },
      area: 150,
      model: "VP 723",
      short_desc: "132 + 18 m2 veranda iki katlı prefabrik konut",
      classification: "Double storey prefabricated house",
      description: "We thought of everything that creates a value for your life. It has only been left to you to live them.",
      floors: 2
    }),
    ERDEK: new House({
      name: "ERDEK",
      images: { main: 'ERDEK.png', sub: 'ERDEK_sub.png', plan: 'ERDEK.jpg' },
      area: 155,
      model: "VP 724",
      short_desc: "139 + 16 m2 veranda iki katlı prefabrik konut",
      classification: "Double storey prefabricated house",
      description: "With large, practical areas and aesthetic architecture, everyone’s place is ready.",
      floors: 2
    }),
    HALİKARNAS: new House({
      name: "HALİKARNAS",
      images: { main: "HALİKARNAS.png", sub: "HALİKARNAS_sub.png", plan: "HALİKARNAS.png" },
      area: 158,
      model: "VP 725",
      short_desc: "132 + 26 m2 veranda iki katlı prefabrik konut",
      classification: "Double storey prefabricated house",
      description: "Smile, the most beautiful decoration of your home is the moments in which you are with beloved ones and have fun with them.",
      floors: 2
    })
  }
};
