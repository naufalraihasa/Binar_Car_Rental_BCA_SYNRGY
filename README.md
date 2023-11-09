# CHALLENGE 5 | Car Management API

## Routes

### 1. Get All Cars

- **Endpoint:** `/cars`
- **Method:** `GET`
- **Description:** Retrieves information about all cars.
- **Output:** Array of car objects.

### 2. Create a New Car

- **Endpoint:** `/cars/create`
- **Method:** `POST`
- **Description:** Creates a new car entry.
- **Input:** Form data including an image file.
- **Output:** Details of the newly created car.

### 3. Update a Car

- **Endpoint:** `/cars/:id`
- **Method:** `PUT`
- **Description:** Updates information for a specific car identified by its ID.
- **Input:** Form data including an image file.
- **Output:** Updated details of the car.

### 4. Delete a Car

- **Endpoint:** `/cars/:id`
- **Method:** `DELETE`
- **Description:** Deletes a specific car entry identified by its ID.
- **Output:** Confirmation message.