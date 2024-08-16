/* eslint-disable react/prop-types */
import { View } from "@aws-amplify/ui-react";
import { getWeaponThumbnail } from "../helper/common";

export default function WeaponDisplayContainer({ weapon, plannerState }) {
  const findExistingWeaponProp = (planner, weapon) => {
    switch (weapon) {
      case planner.weapon1:
        return "weapon1";
      case planner.weapon2:
        return "weapon2";
      case planner.weapon3:
        return "weapon3";
      case planner.weapon4:
        return "weapon4";
      case planner.weapon5:
        return "weapon5";
      default:
        return;
    }
  };

  const onWeaponDisplayClick = (planner, setPlanner) => {
    setPlanner({
      ...planner,
      [`${findExistingWeaponProp(planner, weapon)}`]: undefined,
    });
  };

  return (
    <View className="champion-select-container">
      <button
        onClick={() => {
          onWeaponDisplayClick(plannerState.planner, plannerState.setPlanner);
        }}
      >
        <img
          src={getWeaponThumbnail(weapon)}
          alt={`${weapon} Weapon Thumbnail`}
        />
        <p className="image-caption">{weapon}</p>
      </button>
    </View>
  );
}
