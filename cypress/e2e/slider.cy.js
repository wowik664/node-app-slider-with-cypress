describe('Swiper Gallery Test', function () {
  it('Checks if second slide contains "United Kingdom"', function () {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-button-next').click();
    cy.get('.swiper-slide-active').should('contain', 'United Kingdom');
  });
});

describe('Swiper Gallery Test', function () {
  it('Checks if third slide contains "Paris"', function () {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-button-next').click();
    cy.wait(2000);
    cy.get('.swiper-button-next').click({ force: true });
    cy.wait(2000);
    cy.get('.swiper-slide-active').should('contain', 'Paris');
  });
});

describe('Swiper Navigation Buttons Test', function () {
  it('Allows user to navigate slides using next and previous buttons', function () {
    cy.visit('http://localhost:3000');

    cy.get('.swiper-slide-active').then(($initialSlide) => {
      const initialContent = $initialSlide.text();

      cy.get('.swiper-button-next').click();
      cy.wait(2000);

      cy.get('.swiper-slide-active').should(($newSlide) => {
        expect($newSlide.text()).not.to.eq(initialContent);
      });

      cy.get('.swiper-button-prev').click();
      cy.wait(2000);

      cy.get('.swiper-slide-active').should(($returnedSlide) => {
        expect($returnedSlide.text()).to.eq(initialContent);
      });
    });
  });
});
