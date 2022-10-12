import { BrowserRouter } from 'react-router-dom';
import '~/style/styleGlobal.scss';
import Nav from './nav/Nav';
import Router from '~/router/Router';
import { ReactNotifications } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
function App() {
    return (
        <BrowserRouter>
            <ReactNotifications />
            <Nav />
            <Router />
        </BrowserRouter>
    );
}
export default App;
