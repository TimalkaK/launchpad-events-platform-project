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

  test("books successfully returned as empty array when no data returned from the service", async () => {
    // Arrange
    jest.spyOn(bookService, "getBooks").mockResolvedValue([]);
    // Act
    const res = await request(app).get("/api/v1/books");

    // Assert
    expect(res.body).toEqual([]);
    expect(res.body.length).toEqual(0);
  });

  test("books successfully returned as array of books", async () => {
    // Arrange

    // NB the "as" to `Book[]` takes care of all the missing properties added by sequelize
    //    such as createdDate etc, that we don't care about for the purposes of this test
    jest
      .spyOn(bookService, "getBooks")
      .mockResolvedValue(dummyBookData as Book[]);

    // Act
    const res = await request(app).get("/api/v1/books");

    // Assert
    expect(res.body).toEqual(dummyBookData);
    expect(res.body.length).toEqual(2);
  });
});

describe("GET /api/v1/books/{bookId} endpoint", () => {
  test("status code successfully 200 for a book that is found", async () => {
    // Arrange
    const mockGetBook = jest
      .spyOn(bookService, "getBook")
      .mockResolvedValue(dummyBookData[1] as Book);

    // Act
    const res = await request(app).get("/api/v1/books/2");

    // Assert
    expect(res.statusCode).toEqual(200);
  });

  test("status code successfully 404 for a book that is not found", async () => {
    // Arrange

    jest
      .spyOn(bookService, "getBook")
      // this is a weird looking type assertion!
      // it's necessary because TS knows we can't actually return unknown here
      // BUT we want to check that in the event a book is missing we return a 404
      .mockResolvedValue(undefined as unknown as Book);
    // Act
    const res = await request(app).get("/api/v1/books/77");

    // Assert
    expect(res.statusCode).toEqual(404);
  });

  test("controller successfully returns book object as JSON", async () => {
    // Arrange
    jest
      .spyOn(bookService, "getBook")
      .mockResolvedValue(dummyBookData[1] as Book);

    // Act
    const res = await request(app).get("/api/v1/books/2");

    // Assert
    expect(res.body).toEqual(dummyBookData[1]);
  });
});

describe("POST /api/v1/books endpoint", () => {
  test("status code successfully 201 for saving a valid book", async () => {
    // Act
    const res = await request(app)
      .post("/api/v1/books")
      .send({ bookId: 3, title: "Fantastic Mr. Fox", author: "Roald Dahl" });

    // Assert
    expect(res.statusCode).toEqual(201);
  });

  test("status code 400 when saving ill formatted JSON", async () => {
    // Arrange - we can enforce throwing an exception by mocking the implementation
    jest.spyOn(bookService, "saveBook").mockImplementation(() => {
      throw new Error("Error saving book");
    });

    // Act
    const res = await request(app)
      .post("/api/v1/books")
      .send({ title: "Fantastic Mr. Fox", author: "Roald Dahl" }); // No bookId

    // Assert
    expect(res.statusCode).toEqual(400);
  });
});
