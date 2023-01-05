
import LoginForm from '../LoginForm/LoginForm'
import MainLayout from '../../Layouts/MainLayout';
import Header from '../Header/Header'
function App() {
  return (
      <>
        <Header/>
        <MainLayout element={<LoginForm/>}>
        </MainLayout>
      </>

  );
}

export default App;
