import { BrowserRouter, NavLink, Navigate, Route, Routes } from 'react-router-dom'
import { Button } from './pages/Button'
import { Dialog } from './pages/Dialog'
import { Dropdown } from './pages/Dropdown'
import { Form } from './pages/Form'
import { Layout } from './pages/Layout'
import { Loader } from './pages/Loader'
import { Nav } from './pages/Nav'
import { Table } from './pages/Table'
import { Typography } from './pages/Typography'

export function App() {
  return (
    <BrowserRouter>
      <header>
        <strong>Mini CSS</strong>
        <nav>
          <ul>
            <li>
              <NavLink to="/nav">Navigation</NavLink>
            </li>
            <li>
              <NavLink to="/form">Form</NavLink>
            </li>
            <li>
              <NavLink to="/button">Button</NavLink>
            </li>
            <li>
              <NavLink to="/typo">Typography</NavLink>
            </li>
            <li>
              <NavLink to="/layout">Layout</NavLink>
            </li>
            <li>
              <NavLink to="/loader">Loader</NavLink>
            </li>
            <li>
              <NavLink to="/dialog">Dialog</NavLink>
            </li>
            <li>
              <NavLink to="/table">Table</NavLink>
            </li>
            <li>
              <NavLink to="/dropdown">Dropdown</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/nav" element={<Nav />} />
          <Route path="/form" element={<Form />} />
          <Route path="/button" element={<Button />} />
          <Route path="/typo" element={<Typography />} />
          <Route path="/layout" element={<Layout />} />
          <Route path="/loader" element={<Loader />} />
          <Route path="/dialog" element={<Dialog />} />
          <Route path="/table" element={<Table />} />
          <Route path="/dropdown" element={<Dropdown />} />
          <Route path="*" element={<Navigate to="/nav" />} />
        </Routes>
      </main>
      <footer>Sara Morillon &copy; {new Date().getFullYear()}</footer>
    </BrowserRouter>
  )
}
