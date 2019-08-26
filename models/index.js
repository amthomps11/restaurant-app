const Sequelize = require("sequelize");
const UserModel = require("./user");
const VenueModel = require("./venue");
const bcrypt = require("../models/index.js").bcrypt;

let db;

if (process.env.NODE_ENV === "production") {
  // If the node environment is production, connect to a remote PSQL database
  console.log("are we here");
  db = new Sequelize(process.env.DATABASE_URL, {
    dialect: "postgres"
  });
} else {
  // Else connect to a local instance of PSQL running on your machine
  db = new Sequelize({
    database: "rest_db",
    dialect: "postgres"
  });
}
const User = UserModel(db, Sequelize);

const Venue = VenueModel(db, Sequelize);

Venue.belongsToMany(User, {
  onDelete: "cascade",
  through: "user_venues"
});

User.belongsToMany(Venue, {
  onDelete: "cascade",
  through: "user_venues"
});

User.beforeCreate(async (user, options) => {
  const hashedPassword = await bcrypt.hash(user.password, 12);
  user.password = hashedPassword;
});

module.exports = { db, User, Venue };
