import { Router } from 'express';

import books from './books.route';

const router = Router();

router.use('/books', books);

export default router;
