# CHALLENGE 5 | Car Management API

## Routes

### 1. Get All Cars

- **Endpoint:**
  `/cars`
  
- **Method:**
  `GET`
  
- **Description:**
  Retrieves information about all cars.

- **Output:**
  {
  "cars": [
    {
      "id": 1,
      "name": "Car 1",
      "price": "20000.00",
      "size": "Compact",
      "image": "car1.jpg",
      "created_at": "2023-11-08T16:44:31.307Z",
      "updated_at": "2023-11-08T16:44:31.307Z"
    },
    {
      "id": 2,
      "name": "Car 2",
      "price": "25000.00",
      "size": "Sedan",
      "image": "car2.jpg",
      "created_at": "2023-11-08T16:44:31.307Z",
      "updated_at": "2023-11-08T16:44:31.307Z"
    },
    {
      "id": 3,
      "name": "Car 3",
      "price": "30000.00",
      "size": "SUV",
      "image": "car3.jpg",
      "created_at": "2023-11-08T16:44:31.307Z",
      "updated_at": "2023-11-08T16:44:31.307Z"
    },
    {
      "id": 4,
      "name": "Car 4",
      "price": "35000.00",
      "size": "Truck",
      "image": "car4.jpg",
      "created_at": "2023-11-08T16:44:31.307Z",
      "updated_at": "2023-11-08T16:44:31.307Z"
    },
    {
      "id": 5,
      "name": "Car 5",
      "price": "40000.00",
      "size": "Convertible",
      "image": "car5.jpg",
      "created_at": "2023-11-08T16:44:31.307Z",
      "updated_at": "2023-11-08T16:44:31.307Z"
    }
  ]
}

- **Thunder Client:**
![selectCars](https://github.com/naufalraihasa/Binar_Car_Rental_BCA_SYNRGY/assets/112618165/5e18620e-45e1-496e-8e6d-a5123801aeaf)



### 2. Create a New Car

- **Endpoint:**
  `/cars/create`
  
- **Method:**
  `POST`
- **Description:**
  Creates a new car entry.
  
- **Input:**
  Form data including an image file.

- **Output:**
    {
        "name": "Pajero Sport",
        "price": "70000",
        "size": "SUV",
        "image": "https://res.cloudinary.com/dv0vbw2ji/image/upload/v1699576082/owok8opkqhhhdabhzzgi.jpg",
          "id": 8
    }

- **Thunder Client:**
![createCars](https://github.com/naufalraihasa/Binar_Car_Rental_BCA_SYNRGY/assets/112618165/9bbb6fa5-dc7f-47a2-be47-ca23be2d7586)

- **Postgre:**
![createCarsDb](https://github.com/naufalraihasa/Binar_Car_Rental_BCA_SYNRGY/assets/112618165/3a08f14f-d06f-4d38-ae91-22fd3f6ae77d)

- **Cloudinary Link**
![createCarsCloudinary](https://github.com/naufalraihasa/Binar_Car_Rental_BCA_SYNRGY/assets/112618165/8905b917-eb91-4d96-95b8-85c9f38bbf87)



### 3. Update a Car

- **Endpoint:** 
  `/cars/:id`

- **Method:** 
  `PUT`

- **Description:** 
  Updates information for a specific car identified by its ID.

- **Input:** 
  Form data including an image file.

- **Output:** 
  {
    "message": "Car updated successfully."
  }

- **Thunder Client:**
![updateCars](https://github.com/naufalraihasa/Binar_Car_Rental_BCA_SYNRGY/assets/112618165/9cca1786-7628-4157-8c76-a3b21d57895b)

- **Postgre:**
![updateCarsDb](https://github.com/naufalraihasa/Binar_Car_Rental_BCA_SYNRGY/assets/112618165/e64e7901-e4ba-4907-b151-6116eb59b8a7)

- **Cloudinary Link**
![updateCarsCloudinary](https://github.com/naufalraihasa/Binar_Car_Rental_BCA_SYNRGY/assets/112618165/81f353ad-789e-4fdd-9077-c7c675e22c94)



### 4. Delete a Car

- **Endpoint:** 
  `/cars/:id`

- **Method:** 
  `DELETE`

- **Description:** 
  Deletes a specific car entry identified by its ID.

- **Output:** 
  {
    "message": "Car deleted successfully."
  }

- **Thunder Client:**
![deleteCars](https://github.com/naufalraihasa/Binar_Car_Rental_BCA_SYNRGY/assets/112618165/54bcb19e-d88e-415b-87f0-3ce4e91c388c)

- **Postgre:**
![deleteCarsDb](https://github.com/naufalraihasa/Binar_Car_Rental_BCA_SYNRGY/assets/112618165/a4b0845c-8756-4fd4-b503-d4ddad48497c)