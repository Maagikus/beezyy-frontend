import TwoFactorAuth from '../components/CodeDigital/CodeDigital'

const MainLayout = ({ form }) => {
	return (
		<div className="wrapper">
			<main className="page">
				<div className="form">
					<div className="form__container">
						<div className="form__wrapper">
							{form}
							<TwoFactorAuth />
						</div>
					</div>
				</div>
			</main>
		</div>
	)
}
export default MainLayout
