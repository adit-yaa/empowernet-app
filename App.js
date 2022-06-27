import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./src/pages/Home";
import Login from "./src/pages/Login";
import Chat from "./src/pages/Chat";
import FindMentor from "./src/pages/FindMentor";

import List from "./src/pages/List";
import NewMentee from "./src/pages/NewMentee";
import NewMentor from "./src/pages/NewMentor";
import SingleMentor from "./src/pages/SingleMentor";
import SingleMentee from "./src/pages/SingleMentee";

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
