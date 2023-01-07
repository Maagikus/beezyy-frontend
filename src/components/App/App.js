
import Form from '../Form/Form'
import MainLayout from '../../Layouts/MainLayout';
import Header from '../Header/Header'
function App() {
	return (
		<>
			<Header />
			<MainLayout form={<Form />}>
			</MainLayout>
		</>
	);
}

export default App;
