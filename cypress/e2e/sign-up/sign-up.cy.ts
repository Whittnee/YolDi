import users from "../../fixtures/users.json";
import signUp from "../../fixtures/sign-up.json";
import token from "../../fixtures/token.json";

describe("Sign-up Testing", () => {
  beforeEach(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
  });
  beforeEach(() => {
    cy.intercept("GET", "**/user", (req) => {
      req.reply({
        statusCode: 200,
        body: users,
      });
    }).as("getUsers");
  });

  beforeEach(() => {
    cy.intercept("POST", "**/sign-up", (req) => {
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
        body: signUp,
      });
    }).as("getProfile");
  });

  beforeEach(() => {
    cy.intercept("GET", "**/user/*", (req) => {
      req.reply({
        statusCode: 200,
        body: signUp,
      });
    }).as("getUser");
  });

  it("тест на создание аккаунта", () => {
    cy.visit("/YolDi/signup", {
      onBeforeLoad(win) {
        win.localStorage.clear();
      },
    });
    cy.get('[data-testid="nameInput"]').find("input").type("Бу, испугался?");
    cy.get('[data-testid="emailInput"]').find("input").type("fear@gmail.com");
    cy.get('[data-testid="passwordInput"]').find("input").type("raefbu");
    cy.get('[data-testid="signUpForm"]').submit();
    cy.get('[data-testid="editProfileButton"]').should('exist')
  });
});
