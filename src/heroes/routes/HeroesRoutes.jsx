import { Navigate, Route, Routes } from "react-router"
import { Navbar } from "../../ui"
import { DcPage } from "../pages/DcPage"
import { MarvelPage } from "../pages/MarvelPage"
import { HeroPage } from "../pages/HeroPage"
import { SearchPage } from "../pages/SearchPage"

export const HeroesRoutes = () => {
  return (
    <>
        <Navbar />

        <div className="container-fluid mt-3">
          <Routes>
              <Route path="marvel" element={<MarvelPage />} />
              <Route path="dc" element={<DcPage />} />
              <Route path="search" element={<SearchPage />} />
              <Route path="hero/:id" element={<HeroPage />} />
              <Route path="/" element={<Navigate to="/marvel" />} />
          </Routes>
        </div>
    </>
  )
}
