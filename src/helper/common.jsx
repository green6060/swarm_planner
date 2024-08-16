import {
  jinxThumbnail,
  seraphineThumbnail,
  leonaThumbnail,
  illaoiThumbnail,
  briarThumbnail,
  yasuoThumbnail,
  rivenThumbnail,
  auroraThumbnail,
  xayahThumbnail,
  animines,
  antisharkseamines,
  battlebunnycrossbow,
  bladeorang,
  bunnymegablast,
  cyclonicslicers,
  echoingbatblades,
  finalcitytransit,
  gatlingbunnyguns,
  iceblastarmor,
  lionessslament,
  pawprintpoisener,
  radiantfield,
  searingshortbow,
  statikksword,
  theannihilator,
  tibbers,
  uwublaster,
  vortexglove,
  yuumibot,
} from "../assets";

export const createInitialPlannerState = () => {
  return {
    buildName: "",
    buildDescripton: "",
    champion: undefined,
    weapon1: undefined,
    weapon2: undefined,
    weapon3: undefined,
    weapon4: undefined,
    weapon5: undefined,
    passiveOne: "",
    passiveTwo: "",
    passiveThree: "",
    passiveFour: "",
    passiveFive: "",
    passiveSix: "",
    augmentOne: "",
    augmentTwo: "",
    augmentThree: "",
    augmentFour: "",
  };
};
export const weaponsArray = [
  "Ani-mines",
  "Anti-Shark-Seamines",
  "Battle Bunny Crossbow",
  "Blade-O-Rang",
  "Bunny Mega Blast",
  "Cyclonic Slicers",
  "Echoing Batblades",
  "Final City Transit",
  "Gatling Bunny Guns",
  "Iceblast Armor",
  "Lioness's Lament",
  "Paw Print Poisener",
  "Radiant Field",
  "Searing Shortbow",
  "Statikk Sword",
  "The Annihilator",
  "Tibbers",
  "Uwu Blaster",
  "Vortex Glove",
  "Yuumi-bot",
];

export const getChampionThumbnail = (champion) => {
  switch (champion) {
    case "Jinx":
      return jinxThumbnail;
    case "Seraphine":
      return seraphineThumbnail;
    case "Leona":
      return leonaThumbnail;
    case "Illaoi":
      return illaoiThumbnail;
    case "Briar":
      return briarThumbnail;
    case "Yasuo":
      return yasuoThumbnail;
    case "Riven":
      return rivenThumbnail;
    case "Aurora":
      return auroraThumbnail;
    case "Xayah":
      return xayahThumbnail;
    default:
      // TODO: Add an "image not found" placeholder image
      return null;
  }
};

export const getWeaponThumbnail = (weapon) => {
  switch (weapon) {
    case "Ani-mines":
      return animines;
    case "Anti-Shark-Seamines":
      return antisharkseamines;
    case "Battle Bunny Crossbow":
      return battlebunnycrossbow;
    case "Blade-O-Rang":
      return bladeorang;
    case "Bunny Mega Blast":
      return bunnymegablast;
    case "Cyclonic Slicers":
      return cyclonicslicers;
    case "Echoing Batblades":
      return echoingbatblades;
    case "Final City Transit":
      return finalcitytransit;
    case "Gatling Bunny Guns":
      return gatlingbunnyguns;
    case "Iceblast Armor":
      return iceblastarmor;
    case "Lioness's Lament":
      return lionessslament;
    case "Paw Print Poisener":
      return pawprintpoisener;
    case "Radiant Field":
      return radiantfield;
    case "Searing Shortbow":
      return searingshortbow;
    case "Statikk Sword":
      return statikksword;
    case "The Annihilator":
      return theannihilator;
    case "Tibbers":
      return tibbers;
    case "Uwu Blaster":
      return uwublaster;
    case "Vortex Glove":
      return vortexglove;
    case "Yuumi-bot":
      return yuumibot;
    default:
      return null;
  }
};
