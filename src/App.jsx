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
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Toaster } from 'react-hot-toast'


const App = () => {

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        // staleTime: 60 * 1000
        staleTime: 0,
      }
    }
  })




  const a = [4, 3, 2, 1];
  console.log(a)

  for (let i = 0; i < a.length; i++) {

    for (let j = 0; j < a.length - 1; j++) {

      if (a[j] > a[j + 1]) {
        let temp = a[j];
        a[j] = a[j + 1];
        a[j + 1] = temp;
      }
    }
  }

  console.log(a)



  return (

    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />

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



      <Toaster position='top-center' gutter={12} containerStyle={{ margin: '8px' }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: '16px',
            maxWidth: '500px',
            backgroundColor: 'var(--color-gray-0)',
            color: 'var(--color-gray-700)',
            padding: '16px 24px'
          }
        }} />

    </QueryClientProvider>
  )
}

export default App