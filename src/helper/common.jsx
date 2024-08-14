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
  empty,
} from "../assets";

export const getThumbnail = (champion) => {
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
      return empty;
  }
};
