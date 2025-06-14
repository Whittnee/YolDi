import users from "../../fixtures/users.json";

describe("Users Testing", () => {
  beforeEach(() => {
    cy.intercept("GET", "**/user", {
      statusCode: 200,
      body: users,
    }).as("getUsers");
  });

  it("тест на получение пользователей", () => {
    cy.visit("/YolDi/");
    cy.get('[data-testid="userCard"]').should("not.exist");
    cy.wait("@getUsers").then((interception) => {
      expect(interception.response?.statusCode).to.eq(200);
      expect(interception.response?.body).to.deep.equal(users);
    });
    cy.get('[data-testid="userCard"]').contains("dudu@dudu.ru").should("exist");
  });
});
