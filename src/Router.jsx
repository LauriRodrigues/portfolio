import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'
import { Home } from './pages/Home'
import { AboutMe } from './pages/AboutMe'
import { Projects } from './pages/Projects'
import { Contact } from './pages/Contact'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/sobre-mim" element={<AboutMe />} />
        <Route path="/projetos" element={<Projects />} />
        <Route path="/contato" element={<Contact />} />
      </Route>
    </Routes>
  )
}
