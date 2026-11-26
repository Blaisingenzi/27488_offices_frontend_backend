import { BrowserRouter, Route, Routes } from 'react-router'
import LibraryLogin from './components/LibraryLogin'
import LibraryMain from './components/LibraryMain'
import Office from './components/office'
import AllOffices from './components/AllOffices'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LibraryLogin />} />
        <Route path="/office" element={<Office />} />
        <Route path="/all-offices" element={<AllOffices />} />
        <Route path="/main" element={<LibraryMain />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
