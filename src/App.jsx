import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Cottages from './pages/Cottages'
import Users from './pages/Users'
import Settings from './pages/Settings'
import Login from './pages/Login'
import PageNotFound from './pages/PageNotFound'
import Account from './pages/Account'
import GlobalStyles from './styles/GlobalStyles'
import Bookings from './pages/Bookings'
import Applayout from './ui/Applayout'


const App = () => {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>

        <Routes>

          <Route element={<Applayout />}>
            <Route index element={<Navigate replace to='/dashboard' />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/bookings' element={<Bookings />} />
            <Route path='/cottages' element={<Cottages />} />
            <Route path='users' element={<Users />} />
            <Route path='settings' element={<Settings />} />
            <Route path='account' element={<Account />} />
          </Route>

          <Route path='login' element={<Login />} />
          <Route path='*' element={<PageNotFound />} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App