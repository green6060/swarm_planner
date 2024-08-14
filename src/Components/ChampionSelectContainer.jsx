/* eslint-disable react/prop-types */
import { View } from "@aws-amplify/ui-react";
import { getThumbnail } from "../helper/common";

export default function ChampionContainer({ champion, plannerState }) {
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
          src={getThumbnail(champion)}
          alt={`${champion} Champion Thumbnail`}
        />
      </button>
      <p className="image-caption">
        {champion ? `${champion}` : "Choose a Champ"}
      </p>
    </View>
  );
}
