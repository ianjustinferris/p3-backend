const { pins, users } = require('./testData');

const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLSchema, GraphQLList } = require('graphql');

const UserType = new GraphQLObjectType({
    name: 'User',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        username: { type: GraphQLString },
        email: { type: GraphQLString },
        password: { type: GraphQLString }
    })
});

//Add field that relates username of 'User' as child of parent 'Pin' ? 
const PinType = new GraphQLObjectType({
    name: 'Pin',
    fields: () => ({
        id: { type: GraphQLID },
        username: { type: GraphQLString },
        title: { type: GraphQLString },
        description: { type: GraphQLString },
        lat: { type: GraphQLString },
        lon: { type: GraphQLString },
        URL: { type: GraphQLString },
        filename: { type: GraphQLString },
    })
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        pins: {
            type: new GraphQLList(PinType),
            resolve(parent, args) {
                return pins;
            }
        },
        // Future modification to have a new GET by some predefined radius to user location
        pin: {
            type: PinType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                return pins.find((pin) => pin.id === args.id);
            }
        },
        users: {
            type: new GraphQLList(UserType),
            resolve(parent, args) {
                return users;
            }
        },
        user: {
            type: UserType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                return users.find((user) => user.id === args.id);
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery
})