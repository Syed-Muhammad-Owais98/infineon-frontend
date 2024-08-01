// https://docs.cypress.io/api/introduction/api.html
describe("My First Test", () => {
  beforeEach(function () {
    cy.visit("/");
  });
  it("Visits the app root url and check if string Hello exists", () => {
    cy.get("#hello-world").contains("Hello");
  });
});
