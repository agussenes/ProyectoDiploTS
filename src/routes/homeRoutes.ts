import { Router} from 'express';
import { renderHomePage } from '../controllers/homeController';

const router = Router();

router.get('/', renderHomePage);

export default router;