import { Request, Response } from 'express';
import Car from '../models/carModels'; // Import your CarModel
import {v2 as cloudinary} from 'cloudinary';

export const getCars = async (req: Request, res: Response) => {
  try {
      const cars = await Car.query();
      res.json({ cars });

  } catch (error) {
      console.error(error);
      res.status(500).send('Error fetching data from the database.');
  }
};

export const createCar = async (req: Request, res: Response) => {
  try {
      const { name, price, size } = req.body as Car;
      const imageFile = req.file;

      if (imageFile) {
          // Convert the image data to base64
          const fileBase64 = imageFile.buffer.toString('base64');

          // Upload the base64 image data to Cloudinary
          const result = await cloudinary.uploader.upload(`data:${imageFile.mimetype};base64,${fileBase64}`);

          // Get the URL of the uploaded image from Cloudinary
          const image = result.secure_url;

          // Save the car information and the Cloudinary image URL to the database
          const newCar = await Car.query().insert({
              name,
              price,
              size,
              image, // Save the Cloudinary image URL in the database
          });

          res.status(201).json(newCar);
      } else {
          res.status(400).json({ message: 'No image file uploaded.' });
      }
  } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Terjadi kesalahan saat menambahkan mobil.' });
  }
};

export const updateCar = async (req: Request, res: Response) => {
    try {
      const carId = req.params.id;
      const { name, price, size } = req.body as Car;
      const imageFile = req.file;
  
      // If an image is provided, process and update it
      if (imageFile) {
        const fileBase64 = imageFile.buffer.toString('base64');
        const result = await cloudinary.uploader.upload(`data:${imageFile.mimetype};base64,${fileBase64}`);
        const updatedImage = result.secure_url;
  
        // Update the car information including the new image
        const updatedCar = await Car.query().findById(carId).patch({
          name,
          price,
          size,
          image: updatedImage,
        });
  
        if (updatedCar) {
          res.json({ message: 'Car updated successfully.' });
        } else {
          res.status(404).json({ message: 'Car not found.' });
        }
      } else {
        // If no image is provided, update other fields only
        const updatedCar = await Car.query().findById(carId).patch({
          name,
          price,
          size,
        });
  
        if (updatedCar) {
          res.json({ message: 'Car updated successfully.' });
        } else {
          res.status(404).json({ message: 'Car not found.' });
        }
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error updating car.' });
    }
};
  
  
  
export const deleteCar = async (req: Request, res: Response) => {
    try {
      const carId = req.params.id;
  
      const deletedCar = await Car.query().deleteById(carId);
  
      if (deletedCar) {
        res.json({ message: 'Car deleted successfully.' });
      } else {
        res.status(404).json({ message: 'Car not found.' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error deleting car.' });
    }
};