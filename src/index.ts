import App from './scripts/App/App';
import './styles.css';

const app = new App();

document.body.appendChild(app.element);
app.start();