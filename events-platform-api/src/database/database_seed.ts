import { User } from "../models/user";

export const populateDummyData = async () => {
  // Populate environment with some dummy data in dev
  console.log("🍼 Populating database with dummy data");
  await User.sync({ force: true });
  await User.create({
    userId: 1,
    firstName: "Joe",
    lastName: "Bloggs",
    email: "joe.bloggs@gmail.com",
    password: "banana",
    permissionLevel: "non-staff",
  });
  await User.create({
    userId: 2,
    firstName: "Jane",
    lastName: "Bone",
    email: "jane.bone@gmail.com",
    password: "pineapple",
    permissionLevel: "staff",
  });
  const userCount = (await User.findAll()).length;
  console.log(
    `📚 ${userCount} user${userCount !== 1 ? "s" : ""} added to table`
  );
};
