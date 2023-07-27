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
    cy.get(header.component).should('be.visible');

    cy.get(footer.component).should('exist');
    cy.get(footer.component).should('be.visible');
  });

  it(`it should render the 'about me' section`, () => {
    cy.get(homePage.aboutMeSection).should('exist');
    cy.get(homePage.aboutMeSection).should('be.visible');
    cy.get(`${homePage.aboutMeSection} h2`).should('have.text', 'About Me');
  });

  describe('projects section', () => {
    it('should exist', () => {
      cy.get(homePage.latestProjectsSection).should('exist');
      cy.get(homePage.latestProjectsSection).should('be.visible');
    });

    it('should have 1 featured project', () => {
      cy.get(homePage.featuredProject).should('be.visible');
    });

    it('should have 4 other project items', () => {
      cy.get(homePage.projectItems).should('have.length', 4);
    });

    it('should have "find out more" links', () => {
      cy.get(homePage.findOutMoreLinks).should('have.length', 4);
    });

    it('should open and close a dialog containing more information about a project', () => {
      cy.get(homePage.findOutMoreLinks).eq(0).click();

      cy.get(homePage.dialog).should('exist');
      cy.get(homePage.dialog).should('be.visible');

      cy.get(homePage.dialogClose).click();
      cy.get(homePage.dialog).should('not.exist');
    });
  });

  // it(`should have the 'github' section`, () => {
  //   cy.get(homePage.githubSection).should('exist');
  //   cy.get(homePage.githubSection).should('be.visible');
  // });

  it(`should have the 'contact info' section`, () => {
    cy.get(homePage.contactInfoSection).should('exist');
    cy.get(homePage.contactInfoSection).should('be.visible');
  });

  describe('languages section', () => {
    it('should exist', () => {
      cy.get(homePage.languagesSection).should('exist');
      cy.get(homePage.languagesSection).should('be.visible');
    });

    it('should have 2 listed languages', () => {
      cy.get(homePage.listedLanguages).should('have.length', 2);

      cy.get(homePage.listedLanguages).eq(0).should('contain', 'Dutch');
      cy.get(homePage.listedLanguages).eq(1).should('contain', 'English');
    });
  });

  it(`should have the 'blog' section`, () => {
    cy.get(homePage.blogSection).should('exist');
    cy.get(homePage.blogSection).should('be.visible');

    cy.get(homePage.visitBlogButton).should('exist');
    cy.get(homePage.visitBlogButton).should('be.visible');
  });
});
