import TwoFactorAuth from '../components/TwoFactorAuth/TwoFactorAuth'
import background from '../img/background/background.jpg'
const MainLayout = ({ element }) => {
	return (
		<div className="wrapper">
			<main className="page">
				<div className="from">
					<div className="from__container">
						<div className="from__wrapper">
							{element}
							<TwoFactorAuth />
						</div>
					</div>
					<div className="from__image-ibg"><img src={background} alt="background" /></div>
				</div>

			</main>

		</div>
	)
}
export default MainLayout