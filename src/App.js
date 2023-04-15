
import { Route, Routes } from "react-router-dom";
import Header from "./component/Header";
import Footer from "./component/Footer";
import LoginPage from "./page/LoginPage";
import SignupPage from "./page/SignupPage";
import { Container } from "react-bootstrap";
import DiscussPage from "./page/DiscussPage";
import HomePage from "./page/HomePage";
import EmailVerifyPage from "./page/EmailVerifyPage";
import CreatePostPage from "./page/CreatePostPage";


function App() {
  return (
    <>
      <Header />
      <main>
        <Container>
          <Routes>
            <Route path="/" element={<HomePage/>}></Route>
            <Route path="/login" element={<LoginPage />}></Route>
            <Route path="/signup" element={<SignupPage />}></Route>
            <Route path="/discuss" element= {<DiscussPage/> }></Route>
            <Route path="/emailVerify" element= {<EmailVerifyPage/>}></Route>
            <Route path="/addPost" element={<CreatePostPage/>}></Route>
          </Routes>
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default App;
