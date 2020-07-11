import { header } from '../support/header';
import { footer } from '../support/footer';
import { homePage } from '../support/home';

describe('homePage', () => {
  beforeEach(() => cy.visit(homePage.url));

  it('should render the component', () => {
    cy.get(homePage.component).should('exist');
  });

  it('should have a header and footer', () => {
    cy.get(header.component).should('exist');
    cy.get(footer.component).should('exist');
  });

  it(`it should render the 'about me' section`, () => {
    cy.get(homePage.aboutMeSection).should('exist');
    cy.get(homePage.aboutMeSection).should('be.visible');
    cy.get(`${homePage.aboutMeSection} h2`).should('have.text', 'About Me');
  });

  it(`should have the 'latest projects' section`, () => {
    cy.get(homePage.latestProjectsSection).should('exist');
    cy.get(homePage.latestProjectsSection).should('be.visible');
  });

  it(`should have the 'github' section`, () => {
    cy.get(homePage.githubSection).should('exist');
    cy.get(homePage.githubSection).should('be.visible');
  });

  it(`should have the 'contact info' section`, () => {
    cy.get(homePage.contactInfoSection).should('exist');
    cy.get(homePage.contactInfoSection).should('be.visible');
  });

  it(`should have the 'skills' section`, () => {
    cy.get(homePage.skillsSection).should('exist');
    cy.get(homePage.skillsSection).should('be.visible');
  });

  it(`should have the 'languages' section`, () => {
    cy.get(homePage.languagesSection).should('exist');
    cy.get(homePage.languagesSection).should('be.visible');
  });

  it(`should have the 'blog' section`, () => {
    cy.get(homePage.blogSection).should('exist');
    cy.get(homePage.blogSection).should('be.visible');

    cy.get(homePage.visitBlogButton).should('exist');
    cy.get(homePage.visitBlogButton).should('be.visible');
  });
});
