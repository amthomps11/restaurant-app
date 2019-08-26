const { User, Venue } = require("../models");

const seedDb = async () => {
  try {
    await User.destroy({
      where: {}
    });

    await Venue.destroy({
      where: {}
    });

    const alex = await User.create({
      name: "Alex",
      email: "alex@thompson.com",
      password: "password"
    });

    const chris = await User.create({
      name: "Chris",
      email: "chris@thompson.com",
      password: "password"
    });
  } catch (e) {
    console.error(e);
  }
};

const run = async () => {
  try {
    await seedDb();
  } catch (e) {
    console.error(e);
  } finally {
    process.exit();
  }
};

run();
