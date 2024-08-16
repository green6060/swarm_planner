/* eslint-disable react/prop-types */
import { View } from "@aws-amplify/ui-react";
import { getChampionThumbnail } from "../helper/common";

export default function ChampionSelectContainer({ champion, plannerState }) {
  return (
    <View className="champion-select-container">
      <button
        onClick={() =>
          plannerState.setPlanner({
            ...plannerState.planner,
            champion: `${champion}`,
          })
        }
      >
        <img
          src={getChampionThumbnail(champion)}
          alt={`${champion} Champion Thumbnail`}
        />
      </button>
      <p className="image-caption">{`${champion}`}</p>
    </View>
  );
}
