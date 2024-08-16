/* eslint-disable react/prop-types */
import { View } from "@aws-amplify/ui-react";
import { getWeaponThumbnail } from "../helper/common";

export default function WeaponDisplayContainer({ weapon }) {
  return (
    <View className="champion-select-container">
      <img
        src={getWeaponThumbnail(weapon)}
        alt={`${weapon} Weapon Thumbnail`}
      />
      <p className="image-caption">{weapon}</p>
    </View>
  );
}
