import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './home.tsx';
import {
    MainPageContainer,
    CertificateDetailContainer,
    LoginContainer,
    MyCalenderContainer,
    CertificateSearchContainer,
    MyPageContainer
} from './pages';

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}>
                    <Route index element={<MainPageContainer/>}/>
                    <Route path="/certificateDetail" element={<CertificateDetailContainer/>}/>
                    <Route path="/login" element={<LoginContainer/>}/>
                    <Route path="/myCalender" element={<MyCalenderContainer/>}/>
                    <Route path="/certificateSearch" element={<CertificateSearchContainer/>}/>
                    <Route path="/myPage" element={<MyPageContainer/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;
