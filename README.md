# Senior QA Test Engineer Bootcamp – Final Proje Teslimi

Bu proje, QA Bootcamp kapsamında Petstore API üzerinde yapılan test senaryolarını ve yük testlerini içermektedir.

## 🔹 1. API Testleri (Cypress ile)
- `GET /pet/findByStatus`
- `POST /pet`
- `PUT /pet`
- `DELETE /pet/{petId}`
- Dosya: `cypress-tests/cypress/e2e/petstore_api.cy.js`

## 🔹 2. Postman Koleksiyonu
- Tüm CRUD işlemleri için hazırlanmış Postman koleksiyonu.
- Dosya: `postman/petstore-api.postman_collection.json`

## 🔹 3. Load Test (Locust ile)
- Aynı pet ID üzerinden 4 farklı HTTP işlemi test edilmiştir.
- Dosya: `locust-tests/locustfile.py`
- Not: Demo API olması sebebiyle `DELETE` işlemi bazen 404 dönebilir.

## 🔹 4. Ekran Görüntüleri
- `screenshots/` klasöründe hem Cypress hem de Locust sonuçları yer almaktadır.

## 👤 Katılımcı
- **Ad Soyad:** Beyza Ceylan
- **Program:** Senior QA Test Engineer Bootcamp (2025)

---

## 🧪 Çalıştırma Talimatı

### Cypress
```bash
cd cypress-tests
npx cypress open
```
### Locust
```bash
cd locust-tests
locust --host https://petstore.swagger.io
```
