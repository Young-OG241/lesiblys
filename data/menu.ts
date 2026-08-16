// ---------------------------------------------------------------------------
// Toutes les informations du restaurant et le menu complet sont centralisées
// ici. Modifie ce fichier pour mettre a jour le site (prix, plats, horaires,
// contact...) sans toucher au reste du code.
// ---------------------------------------------------------------------------

export const RESTAURANT = {
  name: "Le Siblys",
  tagline: "L'élégance culinaire à votre table",
  type: "Restaurant · Bar · Service Traiteur",
  phoneDisplay: "+241 77 71 41 10",
  // Format international sans "+" ni espaces, utilisé pour le lien wa.me
  whatsapp: "24177714110",
  address: "London, en face de l'École Panafricaine, Libreville, Gabon",
  facebook: "https://www.facebook.com/share/1EHWXtVAVS/",
  // TODO: confirme les horaires exacts avec le restaurant et ajuste ici.
  hours: [
    { day: "Lundi — Jeudi", time: "11h00 — 22h30" },
    { day: "Vendredi — Samedi", time: "11h00 — 00h30" },
    { day: "Dimanche", time: "12h00 — 22h00" }
  ]
};

export type Dish = {
  name: string;
  price: number;
  // Optionnel : chemin vers la photo du plat, ex. "/images/dishes/salade-cesar.jpg"
  // Dépose la photo dans public/images/dishes/ puis renseigne le chemin ici.
  // Si ce champ est absent, la carte du plat s'affiche simplement sans photo.
  image?: string;
};

export type MenuCategory = {
  id: string;
  label: string;
  // courte accroche affichée sous le nom de la catégorie
  note?: string;
  groups: {
    title?: string;
    dishes: Dish[];
  }[];
};

export const SAUCES = [
  "Barbecue",
  "Champignons crème fraîche",
  "Tomate",
  "Citron beurre à l'ail",
  "Fromage",
  "Crème fraîche poivre"
];

export const MENU: MenuCategory[] = [
  {
    id: "salades",
    label: "Les Salades",
    note: "Fraîcheur et légèreté",
    groups: [
      {
        dishes: [
          { name: "Salade Crudités", price: 2500, image: "/images/dishes/salade-crudite.jpg" },
          { name: "Salade César", price: 2500, image: "/images/dishes/sc.jpg"},
          { name: "Salade Grecque", price: 3000, image: "/images/dishes/salade-greque.jpg"},
          { name: "Salade du Chef", price: 3500, image: "/images/dishes/salade-du-chef.jpg" },
          { name: "Salade Poulet", price: 3500, image: "/images/dishes/sp.jpg" },
          { name: "Steak Salade", price: 4000, image: "/images/dishes/steak-salade.jpg" },
          { name: "Suprême Bacon", price: 4500, image: "/images/dishes/supreme-bacon.jpg" },
          { name: "Salade Avocat Crevettes", price: 4500, image: "/images/dishes/salade-avocat-crevettes.jpg" }
        ]
      }
    ]
  },
  {
    id: "grill",
    label: "Le Grill",
    note: "Braisé au feu de bois",
    groups: [
      {
        dishes: [
          { name: "Quart de Poulet", price: 2000, image: "/images/dishes/chicken.jpg" },
          { name: "Brochette de Viande", price: 2000, image: "/images/dishes/BV.jpg" },
          { name: "Saucisse de Toulouse", price: 2000, image: "/images/dishes/saucisse-toulouse.jpg" },
          { name: "Échine de Porc", price: 2500, image: "/images/dishes/echine.jpg" },
          { name: "Brochette de Bar", price: 2000, image: "/images/dishes/BB.jpg" },
          { name: "Brochette de Capitaine", price: 2500, image: "/images/dishes/BC.jpg" },
          { name: "Noix d'Entrecôte", price: 5000, image: "/images/dishes/entrecote.jpg" },
          { name: "Brochette de Gambas", price: 8000, image: "/images/dishes/BG.jpg" },
        ]
      },
      {
        title: "Accompagnements",
        dishes: [
          { name: "Riz", price: 500, image: "/images/dishes/riz.jpg" },
          { name: "Manioc", price: 500, image: "/images/dishes/manioc.jpg" },
          { name: "Frites de pomme de terre", price: 1000, image: "/images/dishes/frittes.jpg" },
          { name: "Frites de banane", price: 1000 , image: "/images/dishes/beignets.jpg"},
          { name: "Haricots verts", price: 1000, image: "/images/dishes/HV.jpg" }
        ]
      }
    ]
  },
  {
    id: "pates",
    label: "Les Pâtes",
    note: "Recettes italiennes revisitées",
    groups: [
      {
        dishes: [
          { name: "Bolognaise", price: 4500, image: "/images/dishes/bolognaise.jpg" },
          { name: "Chicken Alfredo", price: 5000, image: "/images/dishes/alfredo.jpg" },
          { name: "Carbonara aux Lardons", price: 6000, image: "/images/dishes/carbo.jpg" },
          { name: "Carbonara aux Crevettes", price: 7000, image: "/images/dishes/crev.jpg" }
        ]
      }
    ]
  },
  {
    id: "locales",
    label: "Saveurs Locales",
    note: "La cuisine gabonaise à l'honneur",
    groups: [
      {
        title: "La Basse-cour",
        dishes: [
          { name: "Poulet dur à l'arachide", price: 2500 , image: "/images/dishes/P2.jpg"},
          { name: "Poulet fumé niembwé", price: 4000, image: "/images/dishes/nb.jpg" },
          { name: "Dindon fumé à l'odika", price: 4000, image: "/images/dishes/dfo.jpeg" },
        ]
      },
      {
        title: "Les Poissons",
        dishes: [
          { name: "Poisson fumé à l'odika", price: 3000, image: "/images/dishes/pfo.jpeg" },
          { name: "Poisson frit à l'oseille", price: 3000 , image: "/images/dishes/PO.jpg" },
          { name: "Bouillon de poisson à parti", price: 3000, image: "/images/dishes/bouillon.jpg" },
          { name: "Paquet de poisson au choix", price: 5000, image: "/images/dishes/pacquets.jpg" }
        ]
      },
      {
        title: "Les Légumes",
        dishes: [
          { name: "Folong", price: 3500 , image: "/images/dishes/folong.jpg"},
          { name: "Aubergines poisson fumé", price: 4000, image: "/images/dishes/aubergine.jpg" },
          { name: "Légumes 4 saisons", price: 4000, image: "/images/dishes/mouniaka.jpg" },
          { name: "Concombre poisson fumé crevette", price: 5000, image: "/images/dishes/concombre.jpg" },
          { name: "Feuilles de manioc poisson fumé", price: 6000, image: "/images/dishes/feuille.jpg" },
          { name: "Gombo royal", price: 5000, image: "/images/dishes/royal.jpg" }
        ]
      }
    ]
  },
  {
    id: "gibiers",
    label: "Les Gibiers",
    note: "Viandes de brousse, mijotées",
    groups: [
      {
        dishes: [
          { name: "Sanglier", price: 5000, image: "/images/dishes/sanglier.jpg" },
          { name: "Antilope", price: 5000 , image: "/images/dishes/antilope.jpg" },
          { name: "Porc-épic", price: 5000 , image: "/images/dishes/porc.jpg" },
          { name: "Gazelle", price: 5000 , image: "/images/dishes/gazelle.jpg" },
        ]
      },
      {
        title: "Accompagnements au choix",
        dishes: [
          { name: "Banane vapeur", price: 0 , image: "/images/dishes/banane.jpg"},
          { name: "Pomme de terre à la vapeur", price: 0 , image: "/images/dishes/pomme.jpg"},
          { name: "Tarot", price: 0, image: "/images/dishes/taro.jpg" },
          { name: "Patate", price: 0, image: "/images/dishes/patate.jpg" },
          { name: "Tubercule de manioc", price: 0, image: "/images/dishes/tubercule.jpg" },
          { name: "Couscous", price: 0 , image: "/images/dishes/couscous.jpg"}
        ]
      }
    ]
  },
  {
    id: "ailleurs",
    label: "Saveurs d'Ailleurs",
    note: "Un tour du monde des saveurs",
    groups: [
      {
        dishes: [
          { name: "Poulet Yassa", price: 2500, image: "/images/dishes/yassa.jpg" },
          { name: "Poulet DG", price: 3000 , image: "/images/dishes/DG.jpg"},
          { name: "Gratin de pomme de terre", price: 3000, image: "/images/dishes/gratin.jpg" },
          { name: "Émincé de bœuf aux légumes", price: 5000, image: "/images/dishes/BOEUF.jpg" },
          { name: "Attiéké poisson", price: 3000, image: "/images/dishes/attieke.jpg" },
          { name: "Filet de poisson crème fraîche", price: 4000, image: "/images/dishes/fraiche.jpg" }
        ]
      }
    ]
  }
];

export const HERO_SLIDES = [
  {
    eyebrow: "Braisé, fumé, servi à l'instant",
    title: "Le Grill",
    description: "Viandes et poissons grillés au feu, sauces maison."
  },
  {
    eyebrow: "Le comptoir s'anime dès le coucher du soleil",
    title: "Le Bar",
    description: "Cocktails et ambiance conviviale, tous les soirs."
  },
  {
    eyebrow: "Vos événements, notre cuisine",
    title: "Le Traiteur",
    description: "Un service traiteur sur-mesure pour vos réceptions."
  }
];
