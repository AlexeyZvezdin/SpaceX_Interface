const axios = require("axios");
const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
  GraphQLSchema
} = require("graphql");

// Launch type

const LaunchType = new GraphQLObjectType({
  name: "Launch",
  fields: () => ({
    flight_number: { type: GraphQLInt },
    mission_name: { type: GraphQLString },
    launch_year: { type: GraphQLString },
    launch_date_local: { type: GraphQLString },
    launch_success: { type: GraphQLBoolean },
    rocket: { type: RocketType },
    launch_site: { type: LaunchSiteType },
    launch_failure_details: { type: LaunchFailDetails },
    links: { type: LinksType },
    details: { type: GraphQLString }
  })
});

const LaunchSiteType = new GraphQLObjectType({
  name: "Launch Site Type",
  fields: () => ({
    site_name_long: { type: GraphQLString }
  })
});

const LaunchFailureDetails = new GraphQLObjectType({
  name: "Launch Failure Details",
  fileds: () => ({
    time: { type: GraphQLInt },
    altitude: { type: GraphQLInt },
    reason: { type: GraphQLString }
  })
});

const Link = new GraphQLObjectType({
  name: "Links",
  fields: () => ({
    mission_patch_small: { type: GraphQLString },
    video_link: { type: GraphQLString }
  })
});

// Rocket Type

const RocketType = new GraphQLObjectType({
  name: "Rocket",
  fields: () => ({
    rocket_id: { type: GraphQLString },
    rocket_name: { type: GraphQLString },
    rocket_type: { type: GraphQLString },
    first_stage: { type: FirstStage },
    second_stage: { type: SecondStage }
  })
});

// Rocket First Stage

const FirstStage = new GraphQLObjectType({
  name: "First Stage",
  fields: () => ({
    cores: [core]
  })
});

//  Rocket Second Stage

const SecondStage = new GraphQLObjectType({
  name: "Second Stage",
  fields: () => ({
    payloads: [payload]
  })
});
