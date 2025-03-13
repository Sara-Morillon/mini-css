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
          <NavLink to="/nav">Navigation</NavLink>
          <NavLink to="/form">Form</NavLink>
          <NavLink to="/button">Button</NavLink>
          <NavLink to="/typo">Typography</NavLink>
          <NavLink to="/layout">Layout</NavLink>
          <NavLink to="/loader">Loader</NavLink>
          <NavLink to="/dialog">Dialog</NavLink>
          <NavLink to="/table">Table</NavLink>
          <NavLink to="/dropdown">Dropdown</NavLink>
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
