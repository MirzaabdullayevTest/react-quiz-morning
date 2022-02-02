import Layout from "./hoc/Layout/Layout";
import { Routes, Route } from 'react-router-dom'
import QuizList from "./containers/QuizList/QuizList";
import Auth from "./containers/Auth/Auth";
import QuizCreator from "./containers/QuizCreator/QuizCreator";
import { QuizCb } from "./containers/Quiz/QuizCb";
function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/auth' element={<Auth />} />
        <Route path='/quiz-creator' element={<QuizCreator />} />
        <Route path='/quiz/:id' element={<QuizCb />} />
        <Route path='/' element={<QuizList />} />
      </Routes>
    </Layout>
  );
}

export default App;
