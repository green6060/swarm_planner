import { useState, useEffect } from "react";
import {
  Authenticator,
  Heading,
  Flex,
  View,
  Button,
} from "@aws-amplify/ui-react";
import { Amplify } from "aws-amplify";
import "@aws-amplify/ui-react/styles.css";
import "./App.css";
// import { uploadData } from "aws-amplify/storage";
import { generateClient } from "aws-amplify/data";
import outputs from "../amplify_outputs.json";
import {
  ChampionDisplayContainer,
  ChampionSelectContainer,
  WeaponSelectContainer,
  WeaponDisplayContainer,
} from "./Components";
import { createInitialPlannerState, weaponsArray } from "./helper/common";
/**
 * @type {import('aws-amplify/data').Client<import('../amplify/data/resource').Schema>}
 */

Amplify.configure(outputs);
const client = generateClient({
  authMode: "userPool",
});

export default function App() {
  const [planner, setPlanner] = useState(createInitialPlannerState);

  useEffect(() => {
    fetchPlanner();
  }, []);

  async function fetchPlanner() {
    const { data: builds } = await client.models.Note.list();
    setPlanner(builds);
  }

  // async function saveBuild(event) {
  //   event.preventDefault();
  //   const form = new FormData(event.target);

  //   const { data: newBuild } = await client.models.Note.create({
  //     buildName: form.get("name"),
  //     buildDescripton: form.get("description"),
  //     champion: form.get("champion").name,
  //     weaponOne: form.get("weaponOne").name,
  //     weaponTwo: form.get("weaponTwo").name,
  //     weaponThree: form.get("weaponThree").name,
  //     weaponFour: form.get("weaponFour").name,
  //     weaponFive: form.get("weaponFive").name,
  //     passiveOne: form.get("passiveOne").name,
  //     passiveTwo: form.get("passiveTwo").name,
  //     passiveThree: form.get("passiveThree").name,
  //     passiveFour: form.get("passiveFour").name,
  //     passiveFive: form.get("passiveFive").name,
  //     passiveSix: form.get("passiveSix").name,
  //     augmentOne: form.get("augmentOne").name,
  //     augmentTwo: form.get("augmentTwo").name,
  //     augmentThree: form.get("augmentThree").name,
  //     augmentFour: form.get("augmentFour").name,
  //   });

  //   if (newBuild.image)
  //     if (newBuild.image)
  //       await uploadData({
  //         path: ({ identityId }) => `media/${identityId}/${newBuild.image}`,

  //         data: form.get("image"),
  //       }).result;

  //   fetchPlanner();
  //   event.target.reset();
  // }

  const clearPlanner = () => {
    setPlanner(createInitialPlannerState);
  };

  return (
    <Authenticator>
      {({ signOut }) => (
        <Flex direction={"column"}>
          <Flex>
            <Flex width="50%">
              <Button
                type="submit"
                variation="primary"
                onClick={() =>
                  window.alert(
                    "Thanks for trying this button out! It intentionally does nothing... for now :) "
                  )
                }
              >
                Save Build
              </Button>
              <Button variation="primary" onClick={signOut}>
                Sign Out
              </Button>
            </Flex>
            <Button variation="primary" onClick={clearPlanner}>
              Clear
            </Button>
          </Flex>
          <Flex id="championRow">
            <Flex id="championSelect" direction="column" width="50%">
              <Heading marginBottom="10%" className="swarm-header" level={2}>
                Swarm Planner
              </Heading>
              <Heading className="swarm-header" level={6}>
                Champions
              </Heading>
              <View className="champion-gallery">
                <ChampionSelectContainer
                  champion="Jinx"
                  plannerState={{ planner, setPlanner }}
                />
                <ChampionSelectContainer
                  champion="Seraphine"
                  plannerState={{ planner, setPlanner }}
                />
                <ChampionSelectContainer
                  champion="Leona"
                  plannerState={{ planner, setPlanner }}
                />
                <ChampionSelectContainer
                  champion="Illaoi"
                  plannerState={{ planner, setPlanner }}
                />
                <ChampionSelectContainer
                  champion="Briar"
                  plannerState={{ planner, setPlanner }}
                />
                <ChampionSelectContainer
                  champion="Yasuo"
                  plannerState={{ planner, setPlanner }}
                />
                <ChampionSelectContainer
                  champion="Riven"
                  plannerState={{ planner, setPlanner }}
                />
                <ChampionSelectContainer
                  champion="Aurora"
                  plannerState={{ planner, setPlanner }}
                />
                <ChampionSelectContainer
                  champion="Xayah"
                  plannerState={{ planner, setPlanner }}
                />
              </View>
            </Flex>
            <Flex id="championDisplay" direction="column" width="50%">
              <Heading
                textAlign="center"
                marginBottom="10%"
                className="swarm-header"
                level={2}
              >
                Current Build
              </Heading>
              <Heading className="swarm-header" level={6}>
                Champion
              </Heading>
              <View style={{ display: "flex", flexFlow: "row wrap" }}>
                <ChampionDisplayContainer champion={planner.champion} />
              </View>
            </Flex>
          </Flex>
          <Flex id="weaponRow">
            <Flex id="weaponSelect" direction="column" width="50%">
              <Heading className="swarm-header" level={6}>
                Weapon Select
              </Heading>
              <View className="champion-gallery">
                {weaponsArray.map((weapon, index) => (
                  <WeaponSelectContainer
                    key={index}
                    weapon={weapon}
                    plannerState={{ planner, setPlanner }}
                  />
                ))}
              </View>
            </Flex>
            <Flex id="weaponDisplay" direction="column" width="50%">
              <Heading className="swarm-header" level={6}>
                Weapons
              </Heading>
              <View className="champion-gallery">
                {planner.weapon1 && (
                  <WeaponDisplayContainer
                    weapon={planner.weapon1}
                    plannerState={{ planner, setPlanner }}
                  />
                )}
                {planner.weapon2 && (
                  <WeaponDisplayContainer
                    weapon={planner.weapon2}
                    plannerState={{ planner, setPlanner }}
                  />
                )}
                {planner.weapon3 && (
                  <WeaponDisplayContainer
                    weapon={planner.weapon3}
                    plannerState={{ planner, setPlanner }}
                  />
                )}
                {planner.weapon4 && (
                  <WeaponDisplayContainer
                    weapon={planner.weapon4}
                    plannerState={{ planner, setPlanner }}
                  />
                )}
                {planner.weapon5 && (
                  <WeaponDisplayContainer
                    weapon={planner.weapon5}
                    plannerState={{ planner, setPlanner }}
                  />
                )}
              </View>
            </Flex>
          </Flex>
        </Flex>
      )}
    </Authenticator>
  );
}
