/* eslint-disable react/prop-types */
import { View } from "@aws-amplify/ui-react";
import { getWeaponThumbnail } from "../helper/common";

export default function WeaponSelectContainer({ weapon, plannerState }) {
  const findEmptyWeaponProp = (planner) => {
    switch (undefined) {
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
        console.log(planner.weapon1);
        return "weapon5";
    }
  };
  const onWeaponSelect = () => {
    // Check if there are any empty weapon slots
    if (
      !plannerState.planner.weapon1 ||
      !plannerState.planner.weapon2 ||
      !plannerState.planner.weapon3 ||
      !plannerState.planner.weapon4 ||
      !plannerState.planner.weapon5
    ) {
      // If there are, check if the weapon is already in the planner
      if (
        !(
          plannerState.planner.weapon1 === weapon ||
          plannerState.planner.weapon2 === weapon ||
          plannerState.planner.weapon3 === weapon ||
          plannerState.planner.weapon4 === weapon ||
          plannerState.planner.weapon5 === weapon
        )
      ) {
        // If there are, fill in the next empty slot
        plannerState.setPlanner({
          ...plannerState.planner,
          [`${findEmptyWeaponProp(plannerState.planner)}`]: `${weapon}`,
        });
      }
    }
  };

  return (
    <View className="champion-select-container">
      <button onClick={onWeaponSelect}>
        <img
          src={getWeaponThumbnail(weapon)}
          alt={`${weapon} Weapon Thumbnail`}
        />
      </button>
      <p className="image-caption">{weapon}</p>
    </View>
  );
}
