import { useState, useEffect } from "react"
import TwoFactorAuth from "../TwoFactorAuth/TwoFactorAuth"
import Login from './Login'
import Registration from './Registration'
const LoginForm = () => {
	const [confirmPassword, setConfirmPassword] = useState(false)
	const [email, setEmail] = useState('')
	const [checkBoxValue, setCheckBoxValue] = useState(false)
	const [password, setPassword] = useState('')
	const [emailError, setEmailError] = useState(false)
	const [passwordError, setPasswordError] = useState(false)
	const [confirmPasswordError, setConfirmPasswordError] = useState(false)
	const [emailDirty, setEmailDirty] = useState(false)
	const [passwordDirty, setPasswordDirty] = useState(true)
	const [loginError, setLoginError] = useState('')
	const [formValid, setFormValid] = useState(false)
	const [chosenElement, setChosenElement] = useState(false)

	useEffect(() => {
		if (emailError || passwordError || confirmPasswordError) {
			setFormValid(false)
		} else {
			setFormValid(true)
		}
	}, [emailError, passwordError])
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
	const onBlure = (e) => {
		switch (e.target.name) {
			case 'email':
				setEmailDirty(true)
				break;
			case 'password':
				setPasswordDirty(true)
				break;
			case 'confirmPassword':
				setPasswordDirty(true)
				break;
		}
	}
	const onsubmit = (e) => {
		e.preventDefault()
		return (
			<TwoFactorAuth />
		)
	}
	const renderChosenElement = (e) => {
		if (e.target.dataset.login) {
			setChosenElement(false)
		} else {
			setChosenElement(true)
		}

	}

	return (

		//   <TwoFactorAuth/>

		<div className="from__content">
			<div className="from__header header-form">
				<div className="header-form__buttons">
					<div data-login onClick={(e) => renderChosenElement(e)} className={chosenElement ? "header-form__link" : "header-form__link active"}>SIGN IN</div>
					<div data-registration onClick={(e) => renderChosenElement(e)} className={chosenElement ? "header-form__link active" : "header-form__link "}>SIGN UP</div>
				</div>
				<div className="header-form__language">
					<div className="language _icon-big-hexagon"> <span>RU</span> </div>
					<div className="language _icon-big-hexagon"> <span>EN</span> </div>
					<div className="language _icon-big-hexagon"> <span>PL</span> </div>
				</div>
			</div>
			{chosenElement
				?
				<Registration
					onsubmit={onsubmit}
					onBlure={onBlure}
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
					onBlure={onBlure}
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

			{/* <div className="from__body body-form">
                <form onSubmit={(e) => onsubmit(e)}  action="#" className="body-form__form" >
                    <div className="body-form__item">
                        <label className="body-form__lable" htmlFor="email">E-mail</label>
                        <input
                        onBlur={e => onBlure(e)}
									onChange={e => isEmailValid(e)}
									value={email}
                         autoComplete="off" type="text" name="email" data-error="Ошибка" placeholder="Enter your e-mail"
                            className={emailError?"body-form__input input _form-error":"body-form__input input"}/>
                    </div>
                    <div className="body-form__item">
                        <label className="body-form__lable" htmlFor="password">Password</label>
                        <input
                        onBlur={e => onBlure(e)}
									onChange={e => isPasswordlValid(e)}
									value={password}
                        autoComplete="off" type="password" name="password" data-error="Ошибка" placeholder="Enter your password"
                            className={passwordError?"body-form__input input _form-error":"body-form__input input"}/>
                    </div>
                    <div className="body-form__item item-checkbox">
                        <div className="item-checkbox__title">Keep me signed in</div>
                        <div className={checkBoxValue?"item-checkbox__checkbox checkbox active":"item-checkbox__checkbox checkbox"}>
                            <input checked={checkBoxValue} onChange={()=>setCheckBoxValue(!checkBoxValue)} id="c_1" data-error="Ошибка" className="checkbox__input" type="checkbox" value="1" name="form[]"/>
                            <label htmlFor="c_1" className="checkbox__label _icon-little-hexagon"><span
                                    className="checkbox__text">No</span></label>
                        </div>
                    </div>
                    <button disabled={!formValid} type="submit" className={formValid?"body-form__button button":"body-form__button button button-disable"}>SIGN IN</button>
                    {!formValid?<div className="body-form__error">Incorrect e-mail or password</div>:null}
                </form>
            </div>
            <div className="from__footer footer-form">
                <a href="#" className="footer-form__link">Forgot your password?</a>
                <div className="footer-form__info">
                    <div className="footer-form__title">
                        By registering, you accept our <span>Terms of use</span> and <span>Privacy
                            Policy</span>
                    </div>
                        <div className={checkBoxValue?"footer-form__checkbox checkbox active":"footer-form__checkbox checkbox "}>
                            <input checked={checkBoxValue} onChange={()=>setCheckBoxValue(!checkBoxValue)} id="c_2" data-error="Ошибка" className="checkbox__input" type="checkbox" value="1" name="form[]"/>
                            <label htmlFor="c_2" className="checkbox__label _icon-little-hexagon"></label>
                        </div>
                </div>
            </div> */}
		</div>
	)
}
export default LoginForm