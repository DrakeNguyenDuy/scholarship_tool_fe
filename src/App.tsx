import { Suspense, lazy, useContext } from 'react'
import { Navigate, Outlet, Route, Routes } from 'react-router-dom'
import { PathRoute } from './constants/PathRoute'
import MainLayout from './layouts/main_layout/MainLayout'
import RegisterLayout from './layouts/register_layout'
import User from './pages/user'
import History from './pages/history'
import University from './pages/university'
import Event from './pages/event'
import Authorization from './pages/authorization'
import Setting from './pages/setting'
import { Context } from './context/AppContext'

const Login = lazy(() => import('./pages/login'))
const NotFound = lazy(() => import('./pages/not_found'))
const Dashboard = lazy(() => import('./pages/dashboard'))
const UserGroup = lazy(() => import('./pages/authorization/user-group'))

function ProtectedRoute() {
  const { isAuth } = useContext(Context)
  return isAuth ? <Outlet /> : <Navigate to={PathRoute.login} />
}

function RejectedRoute() {
  const { isAuth } = useContext(Context)
  return !isAuth ? <Outlet /> : <Navigate to='/' />
}

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<ProtectedRoute />}>
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

            <Route path={PathRoute.authorization} element={<Authorization />}>
              <Route
                path={PathRoute.authorization + PathRoute.authorization_user_group}
                element={
                  <Suspense>
                    <UserGroup />
                  </Suspense>
                }
              />
              <Route
                path={PathRoute.authorization + PathRoute.authorization_role}
                element={
                  <Suspense>
                    <UserGroup />
                  </Suspense>
                }
              />
              <Route
                path={PathRoute.authorization + PathRoute.authorization_permission}
                element={
                  <Suspense>
                    <UserGroup />
                  </Suspense>
                }
              />
            </Route>
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
