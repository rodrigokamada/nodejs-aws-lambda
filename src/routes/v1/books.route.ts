import { Request, Response, Router } from 'express';

const router = Router();

router.get('/', async (req: Request, res: Response) => {
  try {
    const books = [
      {
        id: 'ebb3d966-74e4-11ed-8db0-136d663b98e7',
        title: 'Some Title',
        author: 'Some Author',
      },
    ];

    console.debug(`Returning the books [${JSON.stringify(books)}]`);

    res.status(200).json(books);
  } catch (error) {
    console.error('An error ocurred:', error);
    res.status(500).json(error);
  }
});

router.get('/:id', async (req: Request, res: Response) => {
  try {
    const book = {
      id: 'ebb3d966-74e4-11ed-8db0-136d663b98e7',
      title: 'Some Title',
      author: 'Some Author',
    };

    console.debug(`Returning the book [${JSON.stringify(book)}]`);

    res.status(200).json(book);
  } catch (error) {
    console.error('An error ocurred:', error);
    res.status(500).json(error);
  }
});

router.post('/', async (req: Request, res: Response) => {
  try {
    console.debug(`Creating the book [${JSON.stringify(req.body)}]`);

    res.status(201).json({
      id: 'ebb3d966-74e4-11ed-8db0-136d663b98e7',
      ...req.body,
    });
  } catch (error) {
    console.error('An error occurred:', error);
    res.status(500).json(error);
  }
});

router.put('/:id', async (req: Request, res: Response) => {
  try {
    const book = {
      id: req.params.id,
      ...req.body,
    };

    console.debug(`Updating the book [${JSON.stringify(book)}]`);

    res.status(200).json(book);
  } catch (error) {
    console.error('An error occurred:', error);
    res.status(500).json(error);
  }
});

router.delete('/:id', async (req: Request, res: Response) => {
  try {
    console.debug(`Deleting the book by id [${req.params.id}]`);

    res.status(200).json({
      id: req.params.id,
      title: 'Some Title',
      author: 'Some Author',
    });
  } catch (error) {
    console.error('An error occurred:', error);
    res.status(500).json(error);
  }
});

export default router;
