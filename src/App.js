import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"
import styless from "./App.module.css"
import Navigate from "./components/Modules/navigate"

import Home from "./routers/main"
import MyPage from "./routers/myPage"
import Ranking from "./routers/rankingPage"

function App() {
  return (
    <div className={styless.app_container}>
      <BrowserRouter>
        <div>
          <Navigate />
        </div>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/myPage" element={<MyPage />}></Route>
          <Route path="/ranking" element={<Ranking />}></Route>
        </Routes>
      </BrowserRouter>
    </div> 
  );
}

export default App;
