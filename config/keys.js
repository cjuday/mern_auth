const username = encodeURIComponent("uday");
const password = encodeURIComponent("@#ASDFGHjkl*#@");
const cluster = "cluster0.4tesjt1.mongodb.net";
let uri = `mongodb+srv://${username}:${password}@${cluster}/?retryWrites=true&w=majority`;

module.exports = {
    mongoURI : uri,
    secretOrKey: "secret"
};