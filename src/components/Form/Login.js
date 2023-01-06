const Login = (
	{ onsubmit,
		isEmailValid,
		email,
		emailError,
		isPasswordlValid,
		password,
		passwordError,
		checkBoxValue,
		setCheckBoxValue,
		formValid
	}) => {
	return (
		<>
			<div className="from__body body-form">
				<form onSubmit={(e) => onsubmit(e)} action="#" className="body-form__form" >
					<div className="body-form__item">
						<label className="body-form__lable" htmlFor="email">E-mail</label>
						<input
							onChange={e => isEmailValid(e)}
							value={email}
							autoComplete="off" type="text" name="email" data-error="Ошибка" placeholder="Enter your e-mail"
							className={emailError ? "body-form__input input _form-error" : "body-form__input input"} />
					</div>
					<div className="body-form__item">
						<label className="body-form__lable" htmlFor="password">Password</label>
						<input
							onChange={e => isPasswordlValid(e)}
							value={password}
							autoComplete="off" type="password" name="password" data-error="Ошибка" placeholder="Enter your password"
							className={passwordError ? "body-form__input input _form-error" : "body-form__input input"} />
					</div>
					<div className="body-form__item item-checkbox">
						<div className="item-checkbox__title">Keep me signed in</div>
						<div onClick={()=>setCheckBoxValue(!checkBoxValue) }  className={checkBoxValue ? "item-checkbox__checkbox checkbox active" : "item-checkbox__checkbox checkbox"}>
							<input checked={checkBoxValue} onChange={() => setCheckBoxValue(!checkBoxValue)} id="c_1" data-error="Ошибка" className="checkbox__input" type="checkbox" value="1" name="form[]" />
							<label htmlFor="c_1" className="checkbox__label _icon-little-hexagon"><span
								className="checkbox__text">{checkBoxValue?'Yes':'No'}</span></label>
						</div>
					</div>
					<button disabled={!formValid} type="submit" className={formValid ? "body-form__button button" : "body-form__button button button-disable"}>SIGN IN</button>
					{!formValid ? <div className="body-form__error">Incorrect e-mail or password</div> : null}
				</form>
			</div>
			<div className="from__footer footer-form">
				<a href="#" className="footer-form__link">Forgot your password?</a>
				{/* <div className="footer-form__info">
                    <div className="footer-form__title">
                        By registering, you accept our <span>Terms of use</span> and <span>Privacy
                            Policy</span>
                    </div>
                        <div className={checkBoxValue?"footer-form__checkbox checkbox active":"footer-form__checkbox checkbox "}>
                            <input checked={checkBoxValue} onChange={()=>setCheckBoxValue(!checkBoxValue)} id="c_2" data-error="Ошибка" className="checkbox__input" type="checkbox" value="1" name="form[]"/>
                            <label htmlFor="c_2" className="checkbox__label _icon-little-hexagon"></label>
                        </div>
                </div> */}
			</div>
		</>
	)
}
export default Login
