import { Routes, Route } from 'react-router-dom';
import Home from '~/components/Home';
import News from '~/components/News';
import Contact from '~/components/Contact';
import About from '~/components/About';
import ContactId from '~/components/ContactId';
import BlogApp from '~/components/BlogApp';
import BlogAppId from '~/components/BlogAppId';
import Modal from '~/components/Modal';
import YoutubeSearch from '~/components/YoutubeSearch';
import NotFound404 from '~/components/NotFound404';
function Router() {
    return (
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="news" element={<News />} />
            <Route path="contact" element={<Contact />} />
            <Route path="contact/:id" element={<ContactId />} />
            <Route path="about" element={<About />} />
            <Route path="blogApp" element={<BlogApp />} />
            <Route path="blogApp/:id" element={<BlogAppId />} />
            <Route path="modal" element={<Modal />} />
            <Route path="youtubeSearch" element={<YoutubeSearch />} />
            <Route path="*" element={<NotFound404 />} />
        </Routes>
    );
}

export default Router;
