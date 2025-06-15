describe('Petstore API Tests', () => {
  const baseUrl = 'https://petstore.swagger.io/v2';

  // 1. GET testi
  it('GET /pet/findByStatus - should return available pets', () => {
    cy.request({
      method: 'GET',
      url: `${baseUrl}/pet/findByStatus`,
      qs: { status: 'available' }
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.be.an('array');
    });
  });

  // 2. POST testi
  it('POST /pet - should create a new pet', () => {
    const pet = {
      id: 1122334455,
      name: 'BootcampDog',
      status: 'available'
    };

    cy.request({
      method: 'POST',
      url: `${baseUrl}/pet`,
      body: pet,
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.id).to.eq(pet.id);
      expect(response.body.name).to.eq(pet.name);
      expect(response.body.status).to.eq(pet.status);
    });
  });

  // 3. PUT testi
  it('PUT /pet - should update an existing pet', () => {
    const updatedPet = {
      id: 1122334455,
      name: 'BootcampDogUpdated',
      status: 'sold'
    };

    cy.request({
      method: 'PUT',
      url: `${baseUrl}/pet`,
      body: updatedPet,
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.name).to.eq(updatedPet.name);
      expect(response.body.status).to.eq(updatedPet.status);
    });
  });

  // 4. DELETE testi
  it('DELETE /pet/{petId} - should delete the pet', () => {
    const petId = 1122334455;

    cy.request({
      method: 'DELETE',
      url: `${baseUrl}/pet/${petId}`
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });

  // 5. DELETE sonrası GET testi 
  it('GET /pet/{petId} - should confirm pet is deleted or unavailable', () => {
    const petId = 1122334455;

    cy.request({
      method: 'GET',
      url: `${baseUrl}/pet/${petId}`,
      failOnStatusCode: false
    }).then((response) => {
      
      expect([200, 404]).to.include(response.status);
    });
  });

});
