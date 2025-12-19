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
});
