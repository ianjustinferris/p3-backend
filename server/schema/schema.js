//import mongoose models
const User = require('../models/User');
const Pin = require('../models/Pin');

const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLSchema, GraphQLList, GraphQLNonNull } = require('graphql');

const UserType = new GraphQLObjectType({
    name: 'User',
    fields: () => ({
        id: { type: GraphQLID },
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
        thumbnail: { type: GraphQLString },
        lat: { type: GraphQLString },
        lon: { type: GraphQLString },
        URL: { type: GraphQLString },
        filename: { type: GraphQLString },
    })
});

//Queries
const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        pins: {
            type: new GraphQLList(PinType),
            resolve(parent, args) {
                return Pin.find();
            }
        },
        // Future modification to have a new GET by some predefined radius to user location
        pin: {
            type: PinType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                return Pin.findById(args.id)
            }
        },
        users: {
            type: new GraphQLList(UserType),
            resolve(parent, args) {
                return User.find();
            }
        },
        user: {
            type: UserType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                return User.findById(args.id);
            }
        }
    }
});

//Mutations
const mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {

        //Create new User
        addUser: {
            type: UserType,
            args: {
                username: { type: GraphQLNonNull(GraphQLString) },
                email: { type: GraphQLNonNull(GraphQLString) },
                password: { type: GraphQLNonNull(GraphQLString) }
            },
            resolve(parent, args) {
                const user = new User({
                    username: args.username,
                    email: args.email,
                    password: args.password
                });
                return user.save();
            }
        },

        //Delete User by ID
        deleteUser: {
            type: UserType,
            args: {
                id: { type: GraphQLNonNull(GraphQLID) },
            },
            resolve(parent, args) {
                return User.findByIdAndDelete(args.id)
            }
        },

        //Create new Pin
        addPin: {
            type: PinType,
            args: {
                //username of User who created it => link User model to Pin model
                username: { type: GraphQLNonNull(GraphQLString) },
                title: { type: GraphQLNonNull(GraphQLString) },
                description: { type: GraphQLString },
                thumbnail: { type: GraphQLString },
                lat: { type: GraphQLNonNull(GraphQLString) },
                lon: { type: GraphQLNonNull(GraphQLString) },
                URL: { type: GraphQLNonNull(GraphQLString) },
                filename: { type: GraphQLNonNull(GraphQLString) }
            },
            resolve(parent, args) {
                const pin = new Pin({
                    username: args.username,
                    title: args.title,
                    description: args.description,
                    thumbnail: args.thumbnail,
                    lat: args.lat,
                    lon: args.lon,
                    URL: args.URL,
                    filename: args.filename,
                });
                return pin.save();
            }
        },
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation
})