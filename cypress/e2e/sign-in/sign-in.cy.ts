import users from "../../fixtures/users.json";
import signIn from "../../fixtures/sign-in.json";
import token from "../../fixtures/token.json";

describe("Sign-in Testing", () => {
  beforeEach(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
  });
  beforeEach(() => {
  cy.visit('/YolDi/signin', {
    onBeforeLoad(win) {
      win.localStorage.clear()
    }
  })
})
  beforeEach(() => {
    cy.intercept("GET", "**/user", (req) => {
      req.reply({
        statusCode: 200,
        body: users,
      });
    }).as("getUsers");
  });

  beforeEach(() => {
    cy.intercept("POST", "**/login", (req) => {
      req.reply({
        statusCode: 200,
        body: token,
      });
    }).as("getUsers");
  });

  beforeEach(() => {
    cy.intercept("GET", "**/profile", (req) => {
      req.reply({
        statusCode: 200,
        body: signIn,
      });
    }).as("getProfile");
  });

  beforeEach(() => {
    cy.intercept("GET", "**/user/*", (req) => {
      req.reply({
        statusCode: 200,
        body: signIn,
      });
    }).as("getUser");
  });

  it("тест на вход в аккаунт", () => {
    cy.visit("/YolDi/signin")
    cy.get('[data-testid="emailInput"]').find("input").type("Andrew@gmail.com");
    cy.get('[data-testid="passwordInput"]').find("input").type("Werdna");
    cy.get('[data-testid="signInForm"]').submit();
    cy.get('[data-testid="editProfileButton"]').should('exist')
  });
});
