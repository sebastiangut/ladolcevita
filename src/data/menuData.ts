// Import pizza images
import pizza01 from '/images/pizza/01. Pizza Salami ( sos roșii, mozzarella, salam, măsline )_web.png';
import pizza02 from '/images/pizza/02. Pizza Funghi ( sos roșii, mozzarella, ciuperci )_web.png';
import pizza03 from '/images/pizza/03. Pizza Capriciosa ( sos roșii, oregano, mozzarella, șuncă, salam )_web.png';
import pizza04 from '/images/pizza/04. Pizza Tărănească ( sos roșii, mozzarella, bacon, ceapă, porumb )_web.png';
import pizza05 from '/images/pizza/05. Pizza Salame Piccante ( sos roșii, mozzarella, salam picant )_web.png';
import pizza06 from '/images/pizza/06. Pizza Diavola ( sos roșii, oregano, peperoncini, mozzarella, salam picant )_web.png';
import pizza07 from '/images/pizza/07. Pizza Prosciutto Salami Funghi ( sos roșii, mozzarella, șuncă, salam, ciuperci )_web.png';
import pizza08 from '/images/pizza/08. Pizza Prosciutto e Salami ( sos roșii, mozzarella, șuncă, salam )_web.png';
import pizza09 from '/images/pizza/09. Pizza Prosciutto ( sos roșii, mozzarella, șuncă, măsline )_web.png';
import pizza10 from '/images/pizza/10. Pizza Montana ( sos roșii, mozzarella, șuncă, bacon, ciuperci )_web.png';
import pizza11 from '/images/pizza/11. Pizza Prosciutto e Funghi ( sos roșii, mozzarella, șuncă, ciuperci, măsline )_web.png';
import pizza12 from '/images/pizza/12. Pizza Funghi con Porcini ( sos roșii, mozzarella, șuncă, funghi con porcini, măsline )_web.png';
import pizza13 from '/images/pizza/13. Pizza California ( sos roșii, mozzarella, piept de pui, ardei, porumb )_web.png';
import pizza14 from '/images/pizza/14. Pizza Quattro Stagioni ( sos de roșii, mozzarella, șuncă, ciuperci, anghinare, măsline felii )_web.png';
import pizza15 from '/images/pizza/15. Pizza Quattro Formaggi ( sos roșii, mozzarella, cașcaval afumat, brie, gorgonzola )_web.png';
import pizza16 from '/images/pizza/16. Pizza Prosciutto Crudo ( sos roșii, mozzarella, crudo )_web.png';
import pizza17 from '/images/pizza/17. Pizza Gorgo e Crudo ( sos roșii, mozzarella, gorgonzola, crudo )_web.png';
import pizza18 from '/images/pizza/18. Pizza Crudo e Rucola ( sos roșii, mozzarella, crudo, rucola )_web.png';
import pizza19 from '/images/pizza/19. Pizza Crudo e Brie ( sos roșii, mozzarella, brie, crudo )_web.png';
import pizza20 from '/images/pizza/20. Pizza Speck ( sos roșii, mozzarella, speck )_web.png';
import pizza21 from '/images/pizza/21. Pizza Calabrese ( sos roșii, mozzarella, salam picant, gorgonzola, anghinare )_web.png';
import pizza22 from '/images/pizza/22. Pizza Canibale ( sos roșii, mozzarella, șuncă, bacon, salam, carnați )_web.png';
import pizza23 from '/images/pizza/23. Pizza La Dolce Vita ( sos roșii, mozzarella, șuncă, salam, gorgonzola )_web.png';
import pizza24 from '/images/pizza/24. Pizza Carbonara ( sos alb smantană cu ou, mozzarella, bacon, branză dură )_web.png';
import pizza25 from '/images/pizza/25. Pizza Tartufata ( sos roșii, cremă de ciuperci cu trufe, mozzarella, speck, roșii proaspete )_web.png';
import pizza26 from '/images/pizza/26. Pizza Mascarpone ( sos roșii, mozzarella, mascarpone, carnați, ardei, roșii )_web.png';
import pizza27 from '/images/pizza/27. Pizza Sfiziosa (sos roșii, mozzarella, bacon, ceapă, parmezan )_web.png';
import pizza28 from '/images/pizza/28. Pizza Tonno ( sos roșii, oregano, mozzarella, ton )_web.png';
import pizza29 from '/images/pizza/29. Pizza Palermo ( sos roșii, mozzarella, ton, ceapă, masline )_web.png';
import pizza30 from '/images/pizza/30. Pizza Romană ( sos roșii, busuioc, mozzarella, anșoa, capere )_web.png';
import pizza31 from '/images/pizza/31. Pizza Albă - Pizza Brie e Bacon ( mozzarella, brie, bacon, roșii proaspete )_web.png';
import pizza32 from '/images/pizza/32. Pizza Roșie - Pizza Siciliană ( sos roșii, busuioc, anșoa, roșii proaspete )_web.png';
import pizza33 from '/images/pizza/33. Pizza Margherita ( sos roșii, busuioc, mozzarella, roșii proaspete )_web.png';
import pizza34 from '/images/pizza/34. Pizza de Post - Vegetală ( sos roșii, ciuperci, ardei, porumb, măsline )_web.png';

export interface MenuItem {
  name: string;
  description: string;
  weight: string;
  price: string;
  image?: string;
}

export interface MenuSection {
  title: string;
  items: MenuItem[];
  subsections?: MenuSubsection[];
}

export interface MenuSubsection {
  title: string;
  items: MenuItem[];
}

export const menuData: MenuSection[] = [
  {
    title: "STARTERE",
    items: [
      {
        name: "Focaccia",
        description: "cascaval, sunca, rosie, maioneza, oregano",
        weight: "150g",
        price: "14,90 lei"
      },
      {
        name: "Panini",
        description: "branza telemea, salam uscat, rosie, oregano, busuioc",
        weight: "150g",
        price: "14,90 lei"
      },
      {
        name: "Burger de vita cu cartofi (pai/wedges)",
        description: "carne tocata vita, branza cheddar, bacon, salata iceberg, rosie, ceapa, castraveti, sos hamburger, inele de ceapa, cartofi",
        weight: "350g",
        price: "29,90 lei"
      },
      {
        name: "Burger de vita",
        description: "carne tocata vita, branza cheddar, bacon, salata iceberg, rosie, ceapa, castraveti, sos hamburger, inele de ceapa",
        weight: "200g",
        price: "19,90 lei"
      },
      {
        name: "Crispy strips cu cartofi prajiti si sos",
        description: "piept de pui, fulgi de porumb, oua, faina, sare, piper, cartofi pai, sos de usturoi",
        weight: "300g",
        price: "24,90 lei"
      },
      {
        name: "Platou mixt Italian",
        description: "3 feluri de branza, 3 feluri de mezeluri, rosii cherry, dulceata (ghimbir/smochine), masline, paine prajita",
        weight: "200g (1 pers.) 39,90 lei, 400g (2 pers.)",
        price: "79,90 lei"
      },
      {
        name: "Chipsuri din creveti cu sos sweet chilli",
        description: "",
        weight: "100g",
        price: "14,90 lei"
      },
      {
        name: "Piadina Deliciosa",
        description: "lipie, piept de pui, crema de branza, rosii proaspete",
        weight: "300g",
        price: "24,90 lei"
      },
      {
        name: "Piadina Salame Picante",
        description: "lipie, sos rosii, mozzarella, salam picant, rosii proaspete",
        weight: "300g",
        price: "24,90 lei"
      },
      {
        name: "Piadina Prosciutto",
        description: "lipie, sos rosii, gorgonzola, sunca, rosii proaspete",
        weight: "300g",
        price: "24,90 lei"
      },
      {
        name: "Piadina Tonno",
        description: "lipie, sos rosii, ton, rosii proaspete",
        weight: "300g",
        price: "24,90 lei"
      },
      {
        name: "Cascaval pane cu cartofi prajiti si sos",
        description: "cascaval, pesmet, oua, faina, cartofi, sare, sos usturoi",
        weight: "300g",
        price: "29,90 lei"
      }
    ]
  },
  {
    title: "SALATE",
    items: [
      {
        name: "Caprese",
        description: "mozzarella, rosii, busuioc proaspat, ulei de masline, paine prajita",
        weight: "250g",
        price: "29,90 lei"
      },
      {
        name: "Salata de pui",
        description: "piept de pui, salata iceberg, rosii, castraveti, porumb, masline, branza telemea, sos tartar",
        weight: "300g",
        price: "29,90 lei"
      },
      {
        name: "Salata Tonno",
        description: "ton, rosii, castraveti, salata iceberg, porumb, ulei de masline, sare, piper, ou",
        weight: "400g",
        price: "32,90 lei"
      },
      {
        name: "Salata Bulgareasca",
        description: "rosii, castraveti, ardei, sunca, branza telemea, ou, ulei de masline, sare, piper",
        weight: "450g",
        price: "29,90 lei"
      }
    ]
  },
  {
    title: "PASTE & RISOTTO",
    items: [
      {
        name: "Penne cu piept de pui si gorgonzola",
        description: "paste, piept de pui, gorgonzola, smantana lichida, sare, piper, parmezan",
        weight: "350g",
        price: "34,90 lei"
      },
      {
        name: "Spaghete Bolognese",
        description: "paste, carne tocata vita, sos rosii, ceapa, morcov, sare, piper, rozmarin, branza dura",
        weight: "450g",
        price: "34,90 lei"
      },
      {
        name: "Spaghete Milanese",
        description: "paste, sunca, ciuperci, sos rosii, mozzarella, piper, sare, busuioc",
        weight: "450g",
        price: "34,90 lei"
      },
      {
        name: "Spaghete Tonno",
        description: "paste, sos rosii, ton, piper, sare",
        weight: "450g",
        price: "34,90 lei"
      },
      {
        name: "Penne Siciliene",
        description: "paste, piept de pui, ciuperci, mozzarella, smantana, sos rosii, oregano, busuioc, usturoi, sare",
        weight: "500g",
        price: "34,90 lei"
      },
      {
        name: "Penne Carbonara",
        description: "paste, ou, kaizer, branza dura, smantana, sare, piper",
        weight: "450g",
        price: "34,90 lei"
      },
      {
        name: "Penne al Arrabiata",
        description: "paste, usturoi, sos rosii, chilli, sare, piper",
        weight: "400g",
        price: "29,90 lei"
      },
      {
        name: "Spaghete cu fructe de mare",
        description: "paste, calamari, creveti, creveti tiger, midii, rosii cherry, ulei masline, unt, sare, piper, patrunjel, vin alb, sos rosii",
        weight: "350g",
        price: "39,90 lei"
      },
      {
        name: "Tagliatelle cu creveti si dovlecel",
        description: "paste, creveti, dovlecel, smantana lichida, rosii cherry, sos rosii, usturoi, ceapa, vin alb, sare, piper",
        weight: "350g",
        price: "39,90 lei"
      },
      {
        name: "Risotto cu fructe de mare",
        description: "orez, calamari, creveti, creveti tiger, midii, rosii cherry, ulei masline, unt, vin alb, sos rosii, usturoi, ceapa, sare, piper",
        weight: "350g",
        price: "39,90 lei"
      },
      {
        name: "Risotto funghi porcini",
        description: "orez, porcini, branza dura, unt, ulei masline, ceapa, patrunjel, usturoi, vin alb, sare, piper",
        weight: "350g",
        price: "29,90 lei"
      }
    ]
  },
  {
    title: "GARNITURI",
    items: [
      {
        name: "Cartofi pai",
        description: "",
        weight: "200g",
        price: "9,90 lei"
      },
      {
        name: "Cartofi wedges",
        description: "",
        weight: "200g",
        price: "9,90 lei"
      },
      {
        name: "Risotto",
        description: "orez, branza dura, ceapa, unt, sare, piper",
        weight: "200g",
        price: "9,90 lei"
      },
      {
        name: "Inele de ceapa",
        description: "",
        weight: "4 bucati",
        price: "5 lei"
      },
      {
        name: "Legume de sezon la tigaie",
        description: "vinete, dovlecel, ardei, ceapa, rosii cherry, ciuperci, ulei masline",
        weight: "200g",
        price: "14,90 lei"
      },
      {
        name: "Salata de rosii",
        description: "rosii, branza telemea, castraveti, ceapa, ulei masline, piper, sare",
        weight: "150g",
        price: "9,90 lei"
      },
      {
        name: "Paine prajita",
        description: "",
        weight: "150g",
        price: "4,90 lei"
      }
    ]
  },
  {
    title: "PREPARATE DIN CARNE",
    items: [
      {
        name: "Ceafa la gratar cu cartofi (pai/gratinati) cu sos tiganesc",
        description: "ceafa de porc, cartofi, sare, piper, usturoi, sos rosii",
        weight: "350g",
        price: "39,90 lei"
      },
      {
        name: "Piept de pui cu gorgonzola",
        description: "",
        weight: "250g",
        price: "29,90 lei"
      },
      {
        name: "Scaricica de porc cu cartofi wedges si sos barbeque",
        description: "scaricica, cartofi, cimbru, rozmarin, sare, piper, boia, ulei masline, porumb, unt",
        weight: "500g",
        price: "39,90 lei"
      },
      {
        name: "Ciolan cu fasole",
        description: "ciolan, fasole alba, ceapa, ardei, foi de dafin, sos rosii, sare, piper",
        weight: "400g",
        price: "39,90 lei"
      },
      {
        name: "Piept de pui la gratar cu cartofi pai si sos tartar",
        description: "piept de pui, sare, piper, rozmarin, cimbru, cartofi",
        weight: "500g",
        price: "34,90 lei"
      },
      {
        name: "Mici la cuptor cu cartofi wedges si mustar",
        description: "mici 4 bucati, cartofi, ceapa, mustar",
        weight: "400g",
        price: "29,90 lei"
      },
      {
        name: "Snitel urias cu cartofi prajiti si sos",
        description: "cotlet porc, ou, faina, pesmet, sare, piper, cartofi, sos la alegere",
        weight: "450g",
        price: "34,90 lei"
      }
    ]
  },
  {
    title: "PESTE & FRUCTE DE MARE",
    items: [
      {
        name: "Midii in sos de vin alb si unt",
        description: "midii, unt, patrunjel, sare, vin alb, usturoi, piper, paine prajita",
        weight: "400g",
        price: "39,90 lei"
      },
      {
        name: "Dorada grill cu legume de sezon",
        description: "dorada, legume de sezon, unt, lamaie, ulei masline, sare, piper",
        weight: "400g",
        price: "39,90 lei"
      }
    ]
  },
  {
    title: "SOSURI",
    items: [
      {
        name: "Sos rosii (dulce, picant)",
        description: "",
        weight: "75g",
        price: "2,90 lei"
      },
      {
        name: "Maioneza",
        description: "",
        weight: "75g",
        price: "2,90 lei"
      },
      {
        name: "Tartar",
        description: "",
        weight: "75g",
        price: "2,90 lei"
      },
      {
        name: "Usturoi",
        description: "",
        weight: "75g",
        price: "2,90 lei"
      },
      {
        name: "Burger sos",
        description: "",
        weight: "75g",
        price: "2,90 lei"
      },
      {
        name: "Sweet Chilli",
        description: "",
        weight: "75g",
        price: "2,90 lei"
      },
      {
        name: "Barbeque",
        description: "",
        weight: "75g",
        price: "2,90 lei"
      },
      {
        name: "Mustar",
        description: "",
        weight: "75g",
        price: "2,90 lei"
      }
    ]
  },
  {
    title: "EXTRA",
    items: [
      {
        name: "Crispy",
        description: "",
        weight: "100g",
        price: "7,90 lei"
      },
      {
        name: "Parmezan",
        description: "",
        weight: "80g",
        price: "5,90 lei"
      },
      {
        name: "Castraveti murati",
        description: "",
        weight: "50g",
        price: "2,90 lei"
      },
      {
        name: "Dulceata afine",
        description: "",
        weight: "50g",
        price: "2,90 lei"
      },
      {
        name: "Caserola ambalaj",
        description: "",
        weight: "1 bucata",
        price: "1,90 lei"
      },
      {
        name: "Mici",
        description: "",
        weight: "1 bucata 60g",
        price: "4,90 lei"
      },
      {
        name: "Telemea razuita",
        description: "",
        weight: "50g",
        price: "2,90 lei"
      },
      {
        name: "Ardei iute murat",
        description: "",
        weight: "50g",
        price: "2,90 lei"
      },
      {
        name: "Ciocolata fineti",
        description: "",
        weight: "50g",
        price: "2,90 lei"
      }
    ]
  },
  {
    title: "DESERT",
    items: [
      {
        name: "Papanasi dulceata de afine / ciocolata finetti",
        description: "branza de vaci, faina, ou, smantana, vanilie",
        weight: "120g",
        price: "14,90 lei"
      },
      {
        name: "Lava Cake",
        description: "ciocolata menaj, zahar, ou, faina, inghetata vanilie",
        weight: "80g",
        price: "14,90 lei"
      },
      {
        name: "Croissant fistic, ciocolata, vanilie",
        description: "",
        weight: "100g",
        price: "8,90 lei"
      },
      {
        name: "Croissant cu unt",
        description: "",
        weight: "80g",
        price: "6,90 lei"
      }
    ]
  },
  {
    title: "DRINKS",
    items: [],
    subsections: [
      {
        title: "CAFEA & SPECIALITATI",
        items: [
          {
            name: "Espresso Scurt",
            description: "",
            weight: "40 ml",
            price: "5,90 lei"
          },
          {
            name: "Espresso Lung",
            description: "",
            weight: "60 ml",
            price: "5,90 lei"
          },
          {
            name: "Espresso Dopio",
            description: "Espresso scurt dublu",
            weight: "80 ml",
            price: "11,80 lei"
          },
          {
            name: "Espresso Ristretto",
            description: "",
            weight: "20 ml",
            price: "5,90 lei"
          },
          {
            name: "Espresso American",
            description: "Espresso lung, apa calda",
            weight: "100 ml",
            price: "5,90 lei"
          },
          {
            name: "Espresso Decofeinizat",
            description: "",
            weight: "40 ml",
            price: "6,90 lei"
          },
          {
            name: "Café To Go",
            description: "Espresso scurt/lung, pahar unica folosinta",
            weight: "40/80 ml",
            price: "6,90 lei"
          },
          {
            name: "Café Latte",
            description: "Espresso lung, lapte",
            weight: "180 ml",
            price: "6,90 lei"
          },
          {
            name: "Café Latte Machiatto",
            description: "Espresso scurt, lapte, spuma lapte",
            weight: "140 ml",
            price: "8,90 lei"
          },
          {
            name: "Café Bombon",
            description: "Espresso scurt, lapte condensat",
            weight: "40 ml",
            price: "6,90 lei"
          },
          {
            name: "Café Ice",
            description: "Espresso lung, gheata, lapte, sirop de ciocolata",
            weight: "200 ml",
            price: "9,90 lei"
          },
          {
            name: "Frappe",
            description: "Ness, lapte, gheata, topping",
            weight: "200 ml",
            price: "9,90 lei"
          },
          {
            name: "Frappe Vanilie",
            description: "Ness, lapte, gheata, vanilie",
            weight: "200 ml",
            price: "9,90 lei"
          },
          {
            name: "Cappuccino Vienez",
            description: "Espresso scurt, crema lapte, frisca",
            weight: "120 ml",
            price: "8,90 lei"
          },
          {
            name: "Cappuccino Italian",
            description: "Espresso scurt, crema lapte",
            weight: "120 ml",
            price: "8,90 lei"
          },
          {
            name: "Cappuccino cu Arome",
            description: "Espresso scurt, crema lapte, arome la alegere: alune, cocos, vanilie, ciocolata, fistic, caramel, scortisoara",
            weight: "120 ml",
            price: "8,90 lei"
          }
        ]
      },
      {
        title: "CIOCOLATA & CAPPUCCINO",
        items: [
          {
            name: "Ciocolata Calda",
            description: "Clasica, alba",
            weight: "150 ml",
            price: "5,90 lei"
          },
          {
            name: "Ciocolata cu lapte",
            description: "Clasica, alba, alune, rum",
            weight: "150 ml",
            price: "7,90 lei"
          },
          {
            name: "Cappuccino Solubil",
            description: "Clasic, alune, vanilie, rum",
            weight: "150 ml",
            price: "5,90 lei"
          }
        ]
      },
      {
        title: "CEAI & ICE TEA",
        items: [
          {
            name: "Ceai",
            description: "Fructe de padure, menta, musetel, verde, negru, ghimbir, portocale, fructe tropicale",
            weight: "200 ml",
            price: "5,90 lei"
          },
          {
            name: "Ice Tea",
            description: "Menta, fructe de padure, verde, fructe tropicale",
            weight: "300 ml",
            price: "6,90 lei"
          }
        ]
      },
      {
        title: "MILKSHAKES",
        items: [
          {
            name: "Milkshake",
            description: "Vanilie, banane, capsuni, ciocolata, passion fruit",
            weight: "200 ml",
            price: "8,90 lei"
          }
        ]
      },
      {
        title: "SMOOTHIE",
        items: [
          {
            name: "Smoothie cu pulpa de fructe",
            description: "Litchi, fructul pasiunii, mar verde, cirese",
            weight: "250 ml",
            price: "9,90 lei"
          },
          {
            name: "Royal Strawberry",
            description: "",
            weight: "200 ml",
            price: "12,90 lei"
          },
          {
            name: "Blueberry Energy",
            description: "",
            weight: "200 ml",
            price: "12,90 lei"
          },
          {
            name: "Passion IT",
            description: "",
            weight: "200 ml",
            price: "12,90 lei"
          },
          {
            name: "Green Detox",
            description: "",
            weight: "200 ml",
            price: "12,90 lei"
          },
          {
            name: "Coconut Breeze",
            description: "",
            weight: "200 ml",
            price: "12,90 lei"
          },
          {
            name: "Super Berries",
            description: "",
            weight: "200 ml",
            price: "12,90 lei"
          }
        ]
      },
      {
        title: "RACORITOARE",
        items: [
          {
            name: "Coca Cola",
            description: "",
            weight: "250 ml",
            price: "7,90 lei"
          },
          {
            name: "Coca Cola Zero",
            description: "",
            weight: "250 ml",
            price: "7,90 lei"
          },
          {
            name: "Fanta",
            description: "Portocale, struguri",
            weight: "250 ml",
            price: "7,90 lei"
          },
          {
            name: "Sprite",
            description: "",
            weight: "250 ml",
            price: "7,90 lei"
          },
          {
            name: "Schweppes",
            description: "Tonic, bitter lemon, mandarin, pink",
            weight: "250 ml",
            price: "8,90 lei"
          },
          {
            name: "Mountain Dew",
            description: "",
            weight: "330 ml",
            price: "7,90 lei"
          },
          {
            name: "Santal",
            description: "Mere, portocale, ananas, fructe de padure, rodie",
            weight: "200 ml",
            price: "9,90 lei"
          },
          {
            name: "Cappy Nectar",
            description: "Portocale, piersici, pere, portocale rosii, visine",
            weight: "250 ml",
            price: "9,90 lei"
          },
          {
            name: "Fuze Tea",
            description: "Lamaie, piersici",
            weight: "250 ml",
            price: "9,90 lei"
          },
          {
            name: "Apa Dorna minerala, plata",
            description: "",
            weight: "330 ml",
            price: "7,90 lei"
          },
          {
            name: "Apa Dorna minerala, plata",
            description: "",
            weight: "750 ml",
            price: "13,90 lei"
          }
        ]
      },
      {
        title: "SUCURI NATURALE",
        items: [
          {
            name: "Fresh",
            description: "Portocale, grapefruit, mere, morcovi",
            weight: "200 ml",
            price: "11,90 lei"
          },
          {
            name: "Limonada de lamaie",
            description: "",
            weight: "500 ml",
            price: "14,90 lei"
          },
          {
            name: "Limonada de grapefruit",
            description: "",
            weight: "500 ml",
            price: "14,90 lei"
          },
          {
            name: "Limonada de portocale",
            description: "",
            weight: "500 ml",
            price: "14,90 lei"
          },
          {
            name: "Limonada cu pulpa de fructe",
            description: "Fructe de padure, capsuni, zmeura, piersici, kiwi",
            weight: "500 ml",
            price: "14,90 lei"
          }
        ]
      },
      {
        title: "ENERGIZANT",
        items: [
          {
            name: "Red Bull",
            description: "",
            weight: "250 ml",
            price: "9,90 lei"
          },
          {
            name: "Red Bull Sugarfree",
            description: "",
            weight: "250 ml",
            price: "9,90 lei"
          }
        ]
      }
    ]
  },
  {
    title: "WINES",
    items: [],
    subsections: [
      {
        title: "PROSECCO, ȘAMPANIE, LAMBRUSCO",
        items: [
          {
            name: "Mionetto Prosecco DOC Brut",
            description: "Prosecco, Alcool: 11%",
            weight: "750 ml",
            price: "74,90 lei"
          },
          {
            name: "Foss Marai Prosecco Superiore Di Cartizze DOCG",
            description: "Prosecco, Alcool: 11,5%",
            weight: "750 ml",
            price: "149,90 lei"
          },
          {
            name: "Martini - Prosecco DOC",
            description: "Prosecco, Alcool: 11,5%",
            weight: "750 ml",
            price: "79,90 lei"
          },
          {
            name: "Moet & Chandon Brut Imperial",
            description: "Șampanie, Alcool: 12%",
            weight: "750 ml",
            price: "349,90 lei"
          },
          {
            name: "Spumant Angelli Blanc de Blancs",
            description: "Spumant, Alcool: 12%",
            weight: "750 ml",
            price: "64,90 lei"
          },
          {
            name: "Spumant Angelli Rose",
            description: "Spumant, Alcool: 12%",
            weight: "750 ml",
            price: "64,90 lei"
          },
          {
            name: "Lambrusco Chiarli Rose di Bacco IGT",
            description: "Lambrusco, Alcool: 7,5%",
            weight: "750 ml",
            price: "69,90 lei"
          }
        ]
      },
      {
        title: "VINURI ALBE",
        items: [
          {
            name: "Caloian Alb - Cramele Oprișor",
            description: "Sauvignon Blanc, Sec, Alcool: 14%. Acid și plin de viață, parfumat și înviorător",
            weight: "750 ml",
            price: "59,90 lei"
          },
          {
            name: "Sauvignon Blanc de Purcari",
            description: "Sauvignon Blanc, Sec, Alcool: 13%. Plin de viață și prospețime, galben pal strălucitoare",
            weight: "750 ml",
            price: "69,90 lei"
          },
          {
            name: "Nec Plus Ultra Sauvignon Blanc - Jidvei",
            description: "Sauvignon Blanc, Demisec, Alcool: 12%. Cristalin, galben verzui, fin și delicat",
            weight: "750 ml",
            price: "64,90 lei"
          },
          {
            name: "Traminer + Sauvignon Blanc - Mysterium",
            description: "Traminer, Sauvignon Blanc, Sec, Alcool: 12,5%. Arome cu nuanțe de trandafir alb, pepene",
            weight: "750 ml",
            price: "89,90 lei"
          },
          {
            name: "Alb de Petro Vaselo",
            description: "75% Chardonnay, 25% Riesling Italian, Sec, Alcool: 12,5%. Arome florale și tropicale",
            weight: "750 ml",
            price: "79,90 lei"
          },
          {
            name: "Regno Sauvignon Blanc - Recaș",
            description: "Sauvignon Blanc, Sec, Alcool: 12,5%. Note de fructe tropicale și accente de miere",
            weight: "750 ml",
            price: "69,90 lei"
          },
          {
            name: "Castel Huniade Riesling - Recaș",
            description: "Riesling, Sec, Alcool: 11,5%. Arome de flori albe de soc, mușețel și mere verzi",
            weight: "750 ml",
            price: "59,90 lei"
          },
          {
            name: "Castel Huniade Fetească Regală - Recaș",
            description: "Fetească Regală, Demisec, Alcool: 11,5%. Galben pur cu reflexii aurii",
            weight: "750 ml",
            price: "59,90 lei"
          },
          {
            name: "Milenium Alb - S.E.R.V.E.",
            description: "Sauvignon Blanc, Riesling, Tămăioasă, Sec, Alcool: 12,5%. Parfum delicat floral",
            weight: "750 ml",
            price: "89,90 lei"
          },
          {
            name: "Pinot Gris - Liliac",
            description: "Pinot Gris, Sec, Alcool: 13%. Arome de banană și note florale",
            weight: "750 ml",
            price: "79,90 lei"
          },
          {
            name: "Muscat Ottonel & Feteasca Regala - Jelna",
            description: "Muscat Ottonel, Feteasca Regala, Sec, Alcool: 12,4%. Aromă de muscat, miere, flori de tei",
            weight: "750 ml",
            price: "79,90 lei"
          },
          {
            name: "Autograf Chardonnay - Gitana",
            description: "Chardonnay, Sec, Alcool: 13,5%. Aromă intensă de caise și pepene galben",
            weight: "750 ml",
            price: "89,90 lei"
          },
          {
            name: "Muscat Ottonel & Tamaioasă - Viile Metamorfosis",
            description: "Muscat Ottonel, Tămăioasă, Sec, Alcool: 13,5%. Intens fructat cu arome florale",
            weight: "750 ml",
            price: "64,90 lei"
          },
          {
            name: "Golden Muscat - Lechburg",
            description: "Muscat, Sec, Alcool: 13,5%. Note de coajă de portocală, echilibrat",
            weight: "750 ml",
            price: "84,90 lei"
          },
          {
            name: "Gewürztraminer - Italia",
            description: "Gewürztraminer, Sec, Alcool: 14%. Varietate indigenă italiană din Tirolul de Sud",
            weight: "750 ml",
            price: "84,90 lei"
          },
          {
            name: "Sauvignon Blanc - Italia",
            description: "Sauvignon Blanc, Sec, Alcool: 14%. Varietate originară din regiunea Bordeaux",
            weight: "750 ml",
            price: "84,90 lei"
          },
          {
            name: "Grasa de Cotnari - Naiv",
            description: "Grasa de Cotnari, Sec, Alcool: 13,5%. Îmbătrânit 3 luni în stejar",
            weight: "750 ml",
            price: "94,90 lei"
          },
          {
            name: "Tămâioasă Românească - Naiv",
            description: "Tămăioasă Românească, Sec, Alcool: 13%. Arome de miere de salcâm, pară",
            weight: "750 ml",
            price: "89,90 lei"
          }
        ]
      },
      {
        title: "VINURI ROSE",
        items: [
          {
            name: "Rose de Petro Vaselo",
            description: "Pinot Noir, Sec, Alcool: 12%. Culoare roz pal, note vegetale și fructe de pădure",
            weight: "750 ml",
            price: "79,90 lei"
          },
          {
            name: "Rosé de Purcari",
            description: "60% Cabernet-Sauvignon, 30% Merlot, 10% Rară Neagră, Sec, Alcool: 13,5%",
            weight: "750 ml",
            price: "74,90 lei"
          },
          {
            name: "Caloian Rose - Crama Oprișor",
            description: "Cabernet Sauvignon, Sec, Alcool: 13,5%. Tonuri de cireșe de mai și căpșuni",
            weight: "750 ml",
            price: "59,90 lei"
          },
          {
            name: "Nec Plus Ultra Rose - Jidvei",
            description: "Cabernet Sauvignon, Pinot Noir, Syrah, Demisec, Alcool: 13,5%. Culoare roz delicată",
            weight: "750 ml",
            price: "64,90 lei"
          },
          {
            name: "Muse Night - Recaș",
            description: "Cabernet Sauvignon, Cabernet Franc, Cadarcă, Sec, Alcool: 12,5%. Rose trandafiriu",
            weight: "750 ml",
            price: "99,90 lei"
          },
          {
            name: "Busuioaca de Bohotin - Naiv",
            description: "Busuioacă de Bohotin, Sec, Alcool: 13,2%. Culoare roz antic cu nuanțe de trandafiri",
            weight: "750 ml",
            price: "89,90 lei"
          }
        ]
      },
      {
        title: "VINURI ROȘII",
        items: [
          {
            name: "A Mano Primitivo IGT Puglia",
            description: "Primitivo, Sec, Alcool: 14,5%. Roșu-purpuriu intens, note de mure și zmeură",
            weight: "750 ml",
            price: "84,90 lei"
          },
          {
            name: "Brunelli Amarone della Valpolicella",
            description: "Corvina, Corvinone, Rondinella, Sec, Alcool: 15%. Note de fructe dulci și vanilie",
            weight: "750 ml",
            price: "209,90 lei"
          },
          {
            name: "Louis Latour Valmoissine Pinot Noir",
            description: "Pinot Noir, Sec, Alcool: 13,5%. Roșu rubiniu, note de fragi și zmeură",
            weight: "750 ml",
            price: "104,90 lei"
          },
          {
            name: "Gitana Winery Lupi",
            description: "Cabernet Sauvignon, Merlot, Saperavi, Sec, Alcool: 14,5%. Arome de ciocolată",
            weight: "750 ml",
            price: "164,90 lei"
          },
          {
            name: "Autograf Merlot",
            description: "Merlot, Sec, Alcool: 14%. Rubiniu închis, arome de prună uscată",
            weight: "750 ml",
            price: "104,90 lei"
          },
          {
            name: "Purcari Rară Neagră",
            description: "Rară Neagră, Sec, Alcool: 13,5%. Culoare rubinie, aromă complexă",
            weight: "750 ml",
            price: "74,90 lei"
          },
          {
            name: "Aurelia Vișinescu - Anima 3 Fete Negre",
            description: "Fetească Neagră, Sec, Alcool: 14,5%. Îmbătrânit în stejar românesc",
            weight: "750 ml",
            price: "169,90 lei"
          },
          {
            name: "Artisan - Fetească Neagră",
            description: "Fetească Neagră, Sec, Alcool: 13,5%. Arome de prune uscate și scorțișoară",
            weight: "750 ml",
            price: "89,90 lei"
          },
          {
            name: "Premium Cabernet Sauvignon - Crama Oprișor",
            description: "Cabernet Sauvignon, Sec, Alcool: 14,9%. Note de coacaze negre și ciocolată",
            weight: "750 ml",
            price: "159,90 lei"
          },
          {
            name: "Caloian - Fetească Neagră",
            description: "Fetească Neagră, Sec, Alcool: 14%. Arome de prune uscate, cacao și cireșe negre",
            weight: "750 ml",
            price: "59,90 lei"
          },
          {
            name: "Roșu de Petro Vaselo",
            description: "Cabernet Sauvignon, Sec, Alcool: 14,5%. Provine din vii cu expunere sudică",
            weight: "750 ml",
            price: "79,90 lei"
          },
          {
            name: "Red Cuvée - Liliac",
            description: "Fetească Neagră, Merlot, Sec, Alcool: 13,5%. Arome de rodie și căpșuni",
            weight: "750 ml",
            price: "94,90 lei"
          }
        ]
      },
      {
        title: "VINURI LA PAHAR",
        items: [
          {
            name: "Sauvignon Blanc - Recaș Castel Huniade",
            description: "Alb, Demisec",
            weight: "187 ml",
            price: "12 lei"
          },
          {
            name: "Roze - Recaș Castel Huniade",
            description: "Rose, Demisec",
            weight: "187 ml",
            price: "12 lei"
          },
          {
            name: "Cabernet Sauvignon - Recaș Castel Huniade",
            description: "Roșu, Sec",
            weight: "187 ml",
            price: "12 lei"
          }
        ]
      }
    ]
  },
  {
    title: "PIZZA",
    items: [
      {
        name: "Salami",
        description: "sos roșii, mozzarella, salam, măsline",
        weight: "500g",
        price: "32,90 lei",
        image: pizza01
      },
      {
        name: "Funghi",
        description: "sos roșii, mozzarella, ciuperci",
        weight: "500g", 
        price: "30,90 lei",
        image: pizza02
      },
      {
        name: "Capriciosa",
        description: "sos roșii, oregano, mozzarella, șuncă, salam",
        weight: "500g",
        price: "32,90 lei",
        image: pizza03
      },
      {
        name: "Țărănească",
        description: "sos roșii, mozzarella, bacon, ceapă, porumb",
        weight: "550g",
        price: "32,90 lei",
        image: pizza04
      },
      {
        name: "Salame Piccante",
        description: "sos roșii, mozzarella, salam picant",
        weight: "500g",
        price: "32,90 lei",
        image: pizza05
      },
      {
        name: "Diavola",
        description: "sos roșii, oregano, peperoncini, mozzarella, salam picant",
        weight: "500g",
        price: "32,90 lei",
        image: pizza06
      },
      {
        name: "Prosciutto Salami Funghi",
        description: "sos roșii, mozzarella, șuncă, salam, ciuperci",
        weight: "550g",
        price: "32,90 lei",
        image: pizza07
      },
      {
        name: "Prosciutto e Salami",
        description: "sos roșii, mozzarella, șuncă, salam",
        weight: "550g",
        price: "32,90 lei",
        image: pizza08
      },
      {
        name: "Prosciutto",
        description: "sos roșii, mozzarella, șuncă, măsline",
        weight: "600g",
        price: "32,90 lei",
        image: pizza09
      },
      {
        name: "Montana",
        description: "sos roșii, mozzarella, șuncă, bacon, ciuperci",
        weight: "550g",
        price: "32,90 lei",
        image: pizza10
      },
      {
        name: "Prosciutto e Funghi",
        description: "sos roșii, mozzarella, șuncă, ciuperci, măsline",
        weight: "550g",
        price: "32,90 lei",
        image: pizza11
      },
      {
        name: "Funghi con Porcini",
        description: "sos roșii, mozzarella, șuncă, funghi con porcini, măsline",
        weight: "550g",
        price: "32,90 lei",
        image: pizza12
      },
      {
        name: "California",
        description: "sos roșii, mozzarella, piept de pui, ardei, porumb",
        weight: "500g",
        price: "32,90 lei",
        image: pizza13
      },
      {
        name: "Quattro Stagioni",
        description: "sos de roșii, mozzarella, șuncă, ciuperci, anghinare, măsline felii",
        weight: "500g",
        price: "32,90 lei",
        image: pizza14
      },
      {
        name: "Quattro Formaggi",
        description: "sos roșii, mozzarella, cașcaval afumat, brie, gorgonzola",
        weight: "550g",
        price: "34,90 lei",
        image: pizza15
      },
      {
        name: "Prosciutto Crudo",
        description: "sos roșii, mozzarella, crudo",
        weight: "500g",
        price: "34,90 lei",
        image: pizza16
      },
      {
        name: "Gorgo e Crudo",
        description: "sos roșii, mozzarella, gorgonzola, crudo",
        weight: "500g",
        price: "37,90 lei",
        image: pizza17
      },
      {
        name: "Crudo e Rucola",
        description: "sos roșii, mozzarella, crudo, rucola",
        weight: "500g",
        price: "34,90 lei",
        image: pizza18
      },
      {
        name: "Crudo e Brie",
        description: "sos roșii, mozzarella, brie, crudo",
        weight: "500g",
        price: "37,90 lei",
        image: pizza19
      },
      {
        name: "Speck",
        description: "sos roșii, mozzarella, speck",
        weight: "500g",
        price: "37,90 lei",
        image: pizza20
      },
      {
        name: "Calabrese",
        description: "sos roșii, mozzarella, salam picant, gorgonzola, anghinare",
        weight: "550g",
        price: "34,90 lei",
        image: pizza21
      },
      {
        name: "Canibale",
        description: "sos roșii, mozzarella, șuncă, bacon, salam, carnați",
        weight: "600g",
        price: "34,90 lei",
        image: pizza22
      },
      {
        name: "La Dolce Vita",
        description: "sos roșii, mozzarella, șuncă, salam, gorgonzola",
        weight: "600g",
        price: "34,90 lei",
        image: pizza23
      },
      {
        name: "Carbonara",
        description: "sos alb smantană cu ou, mozzarella, bacon, branză dură",
        weight: "550g",
        price: "37,90 lei",
        image: pizza24
      },
      {
        name: "Tartufata",
        description: "sos roșii, cremă de ciuperci cu trufe, mozzarella, speck, roșii proaspete",
        weight: "500g",
        price: "34,90 lei",
        image: pizza25
      },
      {
        name: "Mascarpone",
        description: "sos roșii, mozzarella, mascarpone, carnați, ardei, roșii",
        weight: "500g",
        price: "32,90 lei",
        image: pizza26
      },
      {
        name: "Sfiziosa",
        description: "sos roșii, mozzarella, bacon, ceapă, parmezan",
        weight: "500g",
        price: "32,90 lei",
        image: pizza27
      },
      {
        name: "Tonno",
        description: "sos roșii, oregano, mozzarella, ton",
        weight: "600g",
        price: "37,90 lei",
        image: pizza28
      },
      {
        name: "Palermo",
        description: "sos roșii, mozzarella, ton, ceapă, masline",
        weight: "600g",
        price: "37,90 lei",
        image: pizza29
      },
      {
        name: "Romana",
        description: "sos roșii, busuioc, mozzarella, anșoa, capere",
        weight: "400g",
        price: "34,90 lei",
        image: pizza30
      },
      {
        name: "Pizza Albă Brie e Bacon",
        description: "mozzarella, brie, bacon, roșii proaspete",
        weight: "500g",
        price: "32,90 lei",
        image: pizza31
      },
      {
        name: "Pizza Roșie Siciliană",
        description: "sos roșii, busuioc, anșoa, roșii proaspete",
        weight: "400g",
        price: "32,90 lei",
        image: pizza32
      },
      {
        name: "Margherita",
        description: "sos roșii, busuioc, mozzarella, roșii proaspete",
        weight: "450g",
        price: "29,90 lei",
        image: pizza33
      },
      {
        name: "Pizza de Post Vegetală",
        description: "sos roșii, ciuperci, ardei, porumb, măsline",
        weight: "400g",
        price: "29,90 lei",
        image: pizza34
      }
    ]
  }
];
