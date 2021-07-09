import multer from 'multer';
import multerConfig from '../config/multerConfig';

import Photo from '../models/Photo';

const upload = multer(multerConfig).single('upload');

class PhotoController {
  // store
  store(req, res) {
    return upload(req, res, async (error) => {
      if (error) {
        return res.status(401).json({
          errors: [error.code],
        });
      }

      try {
        const { originalname, filename } = req.file;
        // eslint-disable-next-line camelcase
        const { student_id } = req.body;
        const photo = await Photo.create({
          originalname, filename, student_id,
        });
        return res.json(photo);
      } catch (e) {
        return res.status(401).json({
          errors: ['Student not found'],
        });
      }
    });
  }
}

export default new PhotoController();
