import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Chat from "./pages/Chat";
import FindMentor from "./pages/FindMentor";

import List from "./pages/List";
import NewMentee from "./pages/NewMentee";
import NewMentor from "./pages/NewMentor";
import SingleMentor from "./pages/SingleMentor";
import SingleMentee from "./pages/SingleMentee";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="mentee">
              <Route path=":menteeId" element={<SingleMentee />} />
              <Route path="new" element={<NewMentee />} />
            </Route>
            <Route path="mentor">
              <Route index element={<List />} />
              <Route path=":mentorId" element={<SingleMentor />} />
              <Route path="new" element={<NewMentor />} />
            </Route>
            <Route path="findmentor" element={<FindMentor />}></Route>
            <Route path="chat" element={<Chat />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
