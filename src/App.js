import Authpage from "./Components/Auth_page";
import Beers from "./Components/Beers";
import { UserContextProvider } from "./Components/UserContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <UserContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Authpage />} />
            <Route path="/beers" element={<Beers />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </UserContextProvider>
  );
}
export default App;
