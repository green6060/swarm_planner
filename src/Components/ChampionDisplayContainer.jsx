/* eslint-disable react/prop-types */
import { View, Flex, Heading, Text, Image } from "@aws-amplify/ui-react";
import { getThumbnail } from "../helper/common";

export default function ChampionDisplayContainer({ champion }) {
  const getPassiveName = (champion) => {
    switch (champion) {
      case "Jinx":
        return "Get Excited!";
      case "Seraphine":
        return "Stage Presence";
      case "Leona":
        return "Sunlight";
      case "Illaoi":
        return "Primordian Resilience";
      case "Briar":
        return "Survival Instincts";
      case "Yasuo":
        return "Way of the Wanderer";
      case "Riven":
        return "Runic Blade";
      case "Aurora":
        return "Spirit Abjuration";
      case "Xayah":
        return "Battle Bat Engage";
      default:
        return null;
    }
  };
  const getPassiveDescription = (champion) => {
    switch (champion) {
      case "Jinx":
        return "Whenever Jinx kills 70 enemies she gains Extreme Decaying Move Speed and 150 Ability Haste for 8 seconds.";
      case "Seraphine":
        return "Seraphine has a 25% chance to multicast a projectile.";
      case "Leona":
        return "Defensive stats grant Leona Area Size.";
      case "Illaoi":
        return "Illaoi gains Health Regeneration 2 Health Regen for each nearby tentacle.";
      case "Briar":
        return "Briar gains up to Damage 60% Damage and Move Speed 100% Move Speed based on her missing health.";
      case "Yasuo":
        return "Yasuo gains 15% Critical Strike Chance. Crits grant 3 flow.";
      case "Riven":
        return "Riven deals up to 15% more damage to enemies based on how close they are to her and gains 25% of that damage as a Shield, up to [20] (2% of Maximum Health) for 1 (1% of Duration) second.";
      case "Aurora":
        return "Every 7 levels Aurora calls a spirit that follows her around. Spirits will damage, slow, and apply Hexed to enemies they get near to.";
      case "Xayah":
        return "Xayah has enhanced pickup range and when she picks up exp or gold, they damage units they pass through dealing [31] (+2 per ) or [62] (+4 per ) [damage] respectively. When Xayah collects 200 drops she buffs herself, gaining  80 Ability Haste for 15 seconds. During this time, she also flings a follow up feather dagger when damaging units, dealing [5] (+1 per ) additional damage on hit.";
      default:
        return undefined;
    }
  };
  return (
    <Flex>
      <View className="champion-display-container">
        <Image
          width={"100%"}
          src={getThumbnail(champion)}
          alt={`${champion} Champion Thumbnail`}
        />
      </View>
      <View marginTop="1em" direction="column" width="75%">
        <Heading className="swarm-header" level={4}>
          {champion}
        </Heading>
        <View>
          {getPassiveName(champion) ? (
            <>
              <Heading className="swarm-header" level={6}>
                Passive:
              </Heading>
              <Text textDecoration="underline" textAlign="left" color={"#FFF"}>
                {getPassiveName(champion)}
              </Text>
              <Text textAlign="left" color={"#FFF"}>
                {getPassiveDescription(champion)}
              </Text>
            </>
          ) : (
            <Heading className="swarm-header" level={5}>
              Select a Champion
            </Heading>
          )}
        </View>
      </View>
    </Flex>
  );
}
