from locust import HttpUser, task, between

class PetstoreUser(HttpUser):
    wait_time = between(1, 3)  # Her istekten sonra 1–3 saniye bekler

    @task
    def get_pets_by_status(self):
        self.client.get("/v2/pet/findByStatus", params={"status": "available"})

    @task
    def create_pet(self):
        self.client.post("/v2/pet", json={
            "id": 9988776655,
            "name": "LoadTestPet",
            "status": "available"
        })

    @task
    def update_pet(self):
        self.client.put("/v2/pet", json={
            "id": 9988776655,
            "name": "LoadTestPetUpdated",
            "status": "sold"
        })

    @task
    def delete_pet(self):
        self.client.delete("/v2/pet/9988776655")
