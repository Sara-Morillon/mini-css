import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom'
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
      <nav aria-label="Main">
        <strong>Mini CSS</strong>
        <NavLink to="/">Home</NavLink>
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
      <header>
        <h1>Mini CSS</h1>
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
        </Routes>
      </main>
      <footer>Sara Morillon &copy; {new Date().getFullYear()}</footer>
    </BrowserRouter>
  )
}
