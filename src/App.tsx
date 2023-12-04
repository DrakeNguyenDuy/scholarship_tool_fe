import { Suspense, lazy } from 'react'
import { Navigate, Outlet, Route, Routes } from 'react-router-dom'
import { PathRoute } from './constants/PathRoute'
import MainLayout from './layouts/main_layout/MainLayout'
import RegisterLayout from './layouts/register_layout'
import Dashboard from './pages/dashboard'
import User from './pages/user'
import History from './pages/history'
import University from './pages/university'
import Event from './pages/event'
import Authorization from './pages/authorization'
import Setting from './pages/setting'

const Login = lazy(() => import('./pages/login'))
const NotFound = lazy(() => import('./pages/not_found'))

function RejectedRoute() {
  // eslint-disable-next-line no-constant-condition
  return 1 == 1 ? <Outlet /> : <Navigate to='/' />
}

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route
            index
            path={PathRoute.dashboard}
            element={
              <Suspense>
                <Dashboard />
              </Suspense>
            }
          />
          <Route
            path={PathRoute.user}
            element={
              <Suspense>
                <User />
              </Suspense>
            }
          />
          <Route
            path={PathRoute.histories}
            element={
              <Suspense>
                <History />
              </Suspense>
            }
          />
          <Route
            path={PathRoute.university}
            element={
              <Suspense>
                <University />
              </Suspense>
            }
          />
          <Route
            path={PathRoute.event}
            element={
              <Suspense>
                <Event />
              </Suspense>
            }
          />
          <Route
            path={PathRoute.authorization}
            element={
              <Suspense>
                <Authorization />
              </Suspense>
            }
          />
          <Route
            path={PathRoute.setting}
            element={
              <Suspense>
                <Setting />
              </Suspense>
            }
          />
          <Route
            path={PathRoute.profile}
            element={
              <Suspense>
                <Setting />
              </Suspense>
            }
          />
        </Route>
        <Route path='' element={<RejectedRoute />}>
          <Route path='/' element={<RegisterLayout />}>
            <Route
              path={PathRoute.login}
              element={
                <Suspense>
                  <Login />
                </Suspense>
              }
            />
          </Route>
        </Route>
        <Route
          path='*'
          element={
            <Suspense>
              <NotFound />
            </Suspense>
          }
        />
      </Routes>
    </div>
  )
}

export default App
