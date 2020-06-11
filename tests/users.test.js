const request = require("supertest")
import app from "../userApp"

describe("Get Endpoint", () => {
  it("should get all users", async (done) => {
    const res = await request(app).get("/api/v1/users")
    expect(res.statusCode).toEqual(200)
    expect(res.body).toHaveProperty("users")
    done()
  })
  it("should get specific user", async (done) => {
    const res = await request(app).get("/api/v1/users/1")
    expect(res.statusCode).toEqual(200)
    expect(res.body).toHaveProperty("users")
    done()
  })
  it("should not get a user that does not exist", async (done) => {
    const res = await request(app).get("/api/v1/users/5")
    expect(res.statusCode).toEqual(404)
    done()
  })
})
