import NavBar from "./components/NavBar"
import Home from "./pages/home/Home"
import About from "./pages/about/About"
import { Route, Routes } from "react-router-dom"
import Contact from "./pages/contact/Contact"
import Projects from "./pages/projects/Projects"
import NotFound from "./pages/notfound/NotFound"
import Footer from "./components/Footer"

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
