import profile from "../../fixtures/profile.json";
import newProfile from "../../fixtures/new-profile.json";
import users from "../../fixtures/users.json";
import { mockToken } from "../token";

describe("Profile Testing", () => {
  let hasProfileBeenPatched = false;
  beforeEach(() => {
    cy.visit("/YolDi/", {
      onBeforeLoad(win) {
        win.localStorage.setItem("accessToken", "FAKE_TOKEN");
      },
    });
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
    cy.intercept("GET", "**/user/*", (req) => {
      req.reply({
        statusCode: 200,
        body: hasProfileBeenPatched ? newProfile : profile,
      });
    }).as("getUser");
  });

  beforeEach(() => {
    cy.intercept("GET", "**/profile", (req) => {
      req.reply({
        statusCode: 200,
        body: profile,
      });
    }).as("getProfile");
  });

  beforeEach(() => {
    cy.intercept("PATCH", "**/profile", (req) => {
      hasProfileBeenPatched = true;
      req.reply({
        statusCode: 200,
        body: newProfile,
      });
    }).as("patchProfile");
  });

  it("тест на получение профиля", () => {
    cy.visit("/YolDi/profile/dmitry");
    cy.get('[data-testid="name"]').should("not.exist");
    cy.wait("@getUser").then((interception) => {
      expect(interception.response?.statusCode).to.eq(200);
      expect(interception.response?.body).to.deep.equal(profile);
    });
    cy.get('[data-testid="name"]').should("exist");
  });

  it("тест на получение своего профиля", () => {
    cy.visit("/YolDi/profile/dmitry");
    cy.get('[data-testid="name"]').should("not.exist");
    cy.wait("@getProfile").then((interception) => {
      expect(interception.response?.statusCode).to.eq(200);
      expect(interception.response?.body).to.deep.equal(profile);
    });

    cy.wait("@getUser").then((interception) => {
      expect(interception.response?.statusCode).to.eq(200);
      expect(interception.response?.body).to.deep.equal(profile);
    });
    cy.get('[data-testid="name"]').should("exist");
    cy.get('[data-testid="editProfileButton"]').should("exist");
  });

  it("тест на выход из аккаунта", () => {
    cy.setCookie("accessToken", mockToken);
    cy.visit("/YolDi/profile/dmitry");
    cy.wait("@getProfile").then((interception) => {
      expect(interception.response?.statusCode).to.eq(200);
      expect(interception.response?.body).to.deep.equal(profile);
    });

    cy.wait("@getUser").then((interception) => {
      expect(interception.response?.statusCode).to.eq(200);
      expect(interception.response?.body).to.deep.equal(profile);
    });

    cy.get('[data-testid="logoutButton"]').click();
  });

  it("тест на редактирование своего профиля", () => {
    cy.setCookie("accessToken", mockToken);
    cy.visit("/YolDi/profile/dmitry");
    cy.wait("@getProfile").then((interception) => {
      expect(interception.response?.statusCode).to.eq(200);
      expect(interception.response?.body).to.deep.equal(profile);
    });

    cy.wait("@getUser").then((interception) => {
      expect(interception.response?.statusCode).to.eq(200);
      expect(interception.response?.body).to.deep.equal(profile);
    });

    cy.get('[data-testid="editProfileButton"]').click();
    cy.get('[data-testid="descriptionTextarea"]')
      .find("textarea")
      .clear()
      .type(
        "В четверг четвёртого числа в четыре с четвертью часа лигурийский регулировщик регулировал в Лигурии, но тридцать три корабля лави́ровали, лави́ровали, да так и не вы́лавировали."
      );
    cy.get('[data-testid="editProfileForm"]').submit();
    cy.get('[data-testid="description"]').contains(
      "В четверг четвёртого числа в четыре с четвертью часа лигурийский регулировщик регулировал в Лигурии, но тридцать три корабля лави́ровали, лави́ровали, да так и не вы́лавировали."
    );
  });
});
