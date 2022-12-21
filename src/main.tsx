import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/home'
import LoginView from './routes/loginView';
import DashboardView from './routes/dashboardView';
import SignOutView from './routes/signOutView';
import ChooseUsernameView from './routes/chooseUsernameView';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PushView from './routes/pushView';
import NewNotification from './components/Notification/newNotification';
import { ShowNotification } from './components/Notification/ShowNotification';
import NewNot from './routes/newNotiView';
import ShowNot from './routes/showNotView';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='Login' element={<LoginView />} />
      <Route path='Dashboard' element={<DashboardView/>} />
      <Route path='Signout' element={<SignOutView/>} />
      <Route path='choose-username' element={<ChooseUsernameView/>} />
      <Route path='push-view' element={<PushView/>} />
      <Route path='Create-Notification' element={<NewNot/>} />
      <Route path='Show-Notification' element={<ShowNot/>} />
    </Routes>
  </BrowserRouter>
);
