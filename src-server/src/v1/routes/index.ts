import { Router } from "express";

export const router = Router();

router.route('/query').get((req, res) => {
  res.send({
    id: '1',
    name: 'John Doe',
    email: 'johndoe@example.com'
  })
});