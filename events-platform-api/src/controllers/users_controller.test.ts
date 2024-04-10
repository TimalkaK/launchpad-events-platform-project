import request from "supertest";
import { app } from "../app";
import { User } from "../models/user";

import * as userService from "../services/users";
jest.mock("../services/users");

afterEach(() => {
  jest.clearAllMocks();
});

const dummyUserData = [
  {
    userId: 1,
    firstName: "Joe",
    lastName: "Bloggs",
    email: "joe.bloggs@gmail.com",
    password: "banana",
    permissionLevel: "non-staff",
  },
  {
    userId: 2,
    firstName: "Jane",
    lastName: "Bone",
    email: "jane.bone@gmail.com",
    password: "pineapple",
    permissionLevel: "staff",
  },
];

describe("GET /users endpoint", () => {
  test("status code successfully 200", async () => {
    // Act
    const res = await request(app).get("/users");

    // Assert
    expect(res.statusCode).toEqual(200);
  });

  test("users successfully returned as empty array when no data returned from the service", async () => {
    // Arrange
    jest.spyOn(userService, "getUsers").mockResolvedValue([]);
    // Act
    const res = await request(app).get("/users");

    // Assert
    expect(res.body).toEqual([]);
    expect(res.body.length).toEqual(0);
  });

  test("users successfully returned as array of users", async () => {
    // Arrange

    // NB the "as" to `Book[]` takes care of all the missing properties added by sequelize
    //    such as createdDate etc, that we don't care about for the purposes of this test
    jest
      .spyOn(userService, "getUsers")
      .mockResolvedValue(dummyUserData as User[]);

    // Act
    const res = await request(app).get("/users");

    // Assert
    expect(res.body).toEqual(dummyUserData);
    expect(res.body.length).toEqual(2);
  });
});

describe("GET /users/{userId} endpoint", () => {
  test("status code successfully 200 for a user that is found", async () => {
    // Arrange
    const mockGetUsers = jest
      .spyOn(userService, "getUser")
      .mockResolvedValue(dummyUserData[1] as User);

    // Act
    const res = await request(app).get("/users/2");

    // Assert
    expect(res.statusCode).toEqual(200);
  });

  test("status code successfully 404 for a user that is not found", async () => {
    // Arrange

    jest
      .spyOn(userService, "getUser")
      // this is a weird looking type assertion!
      // it's necessary because TS knows we can't actually return unknown here
      // BUT we want to check that in the event a book is missing we return a 404
      .mockResolvedValue(undefined as unknown as User);
    // Act
    const res = await request(app).get("/users/77");

    // Assert
    expect(res.statusCode).toEqual(404);
  });

  test("controller successfully returns user object as JSON", async () => {
    // Arrange
    jest
      .spyOn(userService, "getUser")
      .mockResolvedValue(dummyUserData[1] as User);

    // Act
    const res = await request(app).get("/users/2");

    // Assert
    expect(res.body).toEqual(dummyUserData[1]);
  });
});

describe("POST /users endpoint", () => {
  test("status code successfully 201 for saving a valid user", async () => {
    // Act
    const res = await request(app).post("/users").send({
      userId: 3,
      firstName: "Elizabeth",
      lastName: "Windemere",
      email: "e.windemere@gmail.com",
      password: "grape",
      permissionLevel: "non-staff",
    });

    // Assert
    expect(res.statusCode).toEqual(201);
  });

  test("status code 400 when saving ill formatted JSON", async () => {
    // Arrange - we can enforce throwing an exception by mocking the implementation
    jest.spyOn(userService, "createUser").mockImplementation(() => {
      throw new Error("Error creating user");
    });

    // Act
    const res = await request(app)
      .post("/users")
      .send({ firstName: "Serena", lastName: "Williams" }); // No userid

    // Assert
    expect(res.statusCode).toEqual(400);
  });
});
