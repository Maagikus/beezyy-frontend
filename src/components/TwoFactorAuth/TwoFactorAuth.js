import { useState, useRef, useEffect } from "react"
let currentIndex = 0
const TwoFactorAuth = () => {

	const [code, setCode] = useState(new Array(6).fill(""))
	const [activeIndex, setActiveIndex] = useState(0)
	const inputRef = useRef(null)
	const onChange = (e) => {
		const { value } = e.target
		const newCode = [...code]
		newCode[currentIndex] = value.substring(value.length - 1)
		if (!value) {
			setActiveIndex(currentIndex - 1)
		} else {
			setActiveIndex(currentIndex + 1)
		}

		console.log(e.key)
		setCode(newCode)
	}
	const onKeyDown = (e, index) => {
		currentIndex = index
		if (e.key === 'Backspace') {
			setActiveIndex(currentIndex - 1)
		}
	}
	useEffect(() => {
		inputRef.current?.focus()
	}, [activeIndex])
	return (
		<div className="form__auth auth">
			<div className="auth__content">
				<div className="auth__header header-auth">
					<h2 className="header-auth__title">TWO-FACTOR AUTHENTICATION</h2>
					<div className="header-auth__subtitle">We will ask for a <span>6-digit code</span>  if we notice an attempted
						login from an unrecognized device or browser</div>
				</div>
				<div className="auth__body body-auth">
					<div className="body-auth__title">Enter code</div>
					<form action="#" className="body-auth__form">
						<div className="body-auth__items">
							{
								code.map((item, index) => {
									return (
										<div className={code[index].length ? "body-auth__item active " : "body-auth__item  "} key={index} >
											<input value={code[index]} onKeyDown={e => onKeyDown(e, index)} ref={index === activeIndex ? inputRef : null} onChange={e => onChange(e)} autoComplete="off" type="text" name="Form[]" data-error="Ошибка" placeholder={index + 1} className="body-auth__input  input" />
											<label htmlFor="Form[]" className="body-auth__lable _icon-big-hexagon"></label>
										</div>
									)
								})
							}
						</div>
						<button type="submit" className="body-auth__button button">CONTINUE</button>
					</form>
				</div>
			</div>
		</div>
	)
}
export default TwoFactorAuth