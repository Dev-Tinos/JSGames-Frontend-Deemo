import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"
import styless from "./App.module.css"

import Home from "./routers/main"
import MyPage from "./routers/profile"
import Ranking from "./routers/ranking"

import DetailPage from "./components/Templetes/detailPage"
import Test from "./routers/text"

function App() {
  return (
    <div className={styless.app_container}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/myPage" element={<MyPage />}></Route>
          <Route path="/ranking" element={<Ranking />}></Route>
          <Route path="/gamebox/:id" element={<DetailPage />}></Route>
          <Route path="/test" element={<Test />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;