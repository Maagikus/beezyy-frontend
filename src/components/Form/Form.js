import { useState, useEffect } from "react"
import TwoFactorAuth from "../TwoFactorAuth/TwoFactorAuth"
import Login from './Login'
import Registration from './Registration'
const Form = () => {
	const [confirmPassword, setConfirmPassword] = useState('')
	const [email, setEmail] = useState('')
	const [checkBoxValue, setCheckBoxValue] = useState(false)
	const [password, setPassword] = useState('')
	const [emailError, setEmailError] = useState(false)
	const [passwordError, setPasswordError] = useState(false)
	const [confirmPasswordError, setConfirmPasswordError] = useState(false)

	const [passwordDirty, setPasswordDirty] = useState(true)

	const [formValid, setFormValid] = useState(false)
	const [chosenElement, setChosenElement] = useState(false)

	useEffect(() => {
		if (emailError || passwordError || confirmPasswordError) {
			setFormValid(false)
		} else {
			setFormValid(true)
		}
	}, [emailError, passwordError, confirmPasswordError])
	const isEmailValid = (e) => {
		setEmail(e.target.value)
		const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
		if (!EMAIL_REGEXP.test(e.target.value)) {
			setEmailError(true)
		} else {
			setEmailError(false)
			setPasswordDirty(false)
		}
	}
	const isPasswordlValid = (e) => {
		setPassword(e.target.value)
		if (e.target.value.length < 5) {
			setPasswordError(true)
			if (!e.target.value) {
				setPasswordError(true)
			}
		} else {
			setPasswordError(false)
		}
	}
	const isPasswordSame = (e) => {
		setConfirmPassword(e.target.value)
		if (e.target.value === password) {
			setConfirmPasswordError(false)
		} else {
			setConfirmPasswordError(true)
		}
	}

	const onsubmit = (e) => {
		e.preventDefault()
	}
	const renderChosenElement = (e) => {
		if (e.target.dataset.login) {
			setChosenElement(false)
		} else {
			setChosenElement(true)
		}
	}
	return (
		<div className="from__content">
			<div className="from__header header-form">
				<div className="header-form__buttons">
					<div data-login onClick={(e) => renderChosenElement(e)} className={chosenElement ? "header-form__link" : "header-form__link active"}>SIGN IN</div>
					<div data-registration onClick={(e) => renderChosenElement(e)} className={chosenElement ? "header-form__link active" : "header-form__link "}>SIGN UP</div>
				</div>
				<div className="header-form__language">
					<div className="language _icon-big-hexagon"> <span>RU</span> </div>
					<div className="language _icon-big-hexagon active"> <span>EN</span> </div>
					<div className="language _icon-big-hexagon"> <span>PL</span> </div>
				</div>
			</div>
			{chosenElement
				?
				<Registration
					onsubmit={onsubmit}

					isEmailValid={isEmailValid}
					email={email}
					emailError={emailError}
					isPasswordlValid={isPasswordlValid}
					password={password}
					passwordError={passwordError}
					checkBoxValue={checkBoxValue}
					setCheckBoxValue={setCheckBoxValue}
					formValid={formValid}
					isPasswordSame={isPasswordSame}
					confirmPassword={confirmPassword}
					confirmPasswordError={confirmPasswordError}
				/>
				:
				<Login
					onsubmit={onsubmit}

					isEmailValid={isEmailValid}
					email={email}
					emailError={emailError}
					isPasswordlValid={isPasswordlValid}
					password={password}
					passwordError={passwordError}
					checkBoxValue={checkBoxValue}
					setCheckBoxValue={setCheckBoxValue}
					formValid={formValid}
				/>}
		</div>
	)
}
export default Form
