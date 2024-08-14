import { type ClientSchema, a, defineData } from '@aws-amplify/backend';

const schema = a.schema({
  Note: a
    .model({
      buildName:a.string(),
      buildDescription: a.string(),
      championImg: a.string(),
      weaponOneImg: a.string(),
      weaponTwoImg: a.string(),
      weaponThreeImg: a.string(),
      weaponFourImg: a.string(),
      weaponFiveImg: a.string(),
      passiveOneImg: a.string(),
      passiveTwoImg: a.string(),
      passiveThreeImg: a.string(),
      passiveFourImg: a.string(),
      passiveFiveImg: a.string(),
      passiveSixImg: a.string(),
      augmentOneImg: a.string(),
      augmentTwoImg: a.string(),
      augmentThreeImg: a.string(),
      augmentFourImg: a.string(),
    })
    .authorization((allow) => [allow.owner()]),
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: 'userPool',
  },
});