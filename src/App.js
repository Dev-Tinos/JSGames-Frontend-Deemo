import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"
import styless from "./App.module.css"

import Home from "./routers/main"
import MyPage from "./routers/profile"
import Ranking from "./routers/ranking"
import Test from "./routers/test"
import Detail from "./routers/detail"
import Signup from "./routers/signup"
import Login from "./routers/login"

function App() {
  return (
    <div className={styless.app_container}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/myPage" element={<MyPage />}></Route>
          <Route path="/ranking" element={<Ranking />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/test" element={<Test />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/gamebox/:gameId" element={<Detail />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;