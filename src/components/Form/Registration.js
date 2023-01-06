const Registration = (
	{ onsubmit,
		isEmailValid,
		email,
		emailError,
		isPasswordlValid,
		password,
		passwordError,
		checkBoxValue,
		setCheckBoxValue,
		formValid,
		isPasswordSame,
		confirmPassword,
		confirmPasswordError
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
					<div className="body-form__item">
						<label className="body-form__lable" htmlFor="confirmPassword">Confirm password</label>
						<input

							onChange={e => isPasswordSame(e)}
							value={confirmPassword}
							autoComplete="off" type="password" name="confirmPassword" data-error="Ошибка" placeholder="Enter your password"
							className={confirmPasswordError ? "body-form__input input _form-error" : "body-form__input input"} />
					</div>

					<button disabled={!formValid} type="submit" className={formValid ? "body-form__button button" : "body-form__button button button-disable"}>SIGN UP</button>
					{!formValid ? <div className="body-form__error">Incorrect e-mail or password</div> : null}
				</form>
			</div>
			<div className="from__footer footer-form">
				<div className="footer-form__info">
					<div className="footer-form__title">
						By registering, you accept our <a href="#">Terms of use</a> and <a href="#">Privacy
							Policy</a>
					</div>
					<div onClick={()=>setCheckBoxValue(!checkBoxValue) } className={checkBoxValue ? "footer-form__checkbox checkbox active" : "footer-form__checkbox checkbox "}>
						<input checked={checkBoxValue} onChange={() => setCheckBoxValue(!checkBoxValue)} id="c_2" data-error="Ошибка" className="checkbox__input" type="checkbox" value="1" name="form[]" />
						<label htmlFor="c_2" className="checkbox__label _icon-little-hexagon"></label>
					</div>
				</div>
			</div>
		</>
	)
}
export default Registration
