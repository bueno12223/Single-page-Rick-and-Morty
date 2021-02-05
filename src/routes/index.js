import Header from '../template/header';
import Home from '../pages/home';
import Character from '../pages/characters';
import Error404 from '../pages/error404';

const routes = {
  '/': Home,
  '/:id': Character,
  '/contact': 'Contact',
};

const router = async () => {
  const header = null || document.getElementById('header');
  const content = null || document.getElementById('content');

  header.innerHTML = await Header();
};

export default router;