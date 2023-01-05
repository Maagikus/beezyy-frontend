import { useState } from "react"
const TwoFactorAuth = () => {
    const [code, setCode]=useState([])
    const [isEmpty, setIsEmpty] = useState(true)
    const onChange = (e)=> {
        setCode([...code, e.target.value])
        if(e.target.value.length){
          
        }else{
            
        }
    }
    console.log(code)
    return(
        <div className="from__auth auth">
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
                            <div className={isEmpty?"body-auth__item ":"body-auth__item active"}>
                                <input  onChange={e=>onChange(e)} autoComplete="off" type="text" name="form[]" data-error="Ошибка" placeholder="1" className="body-auth__input  input"/>
                                <label for="form[]" className="body-auth__lable _icon-big-hexagon"></label>
                            </div>
                            <div className={isEmpty?"body-auth__item ":"body-auth__item active"}>
                                <input  onChange={e=>onChange(e)} autoComplete="off" type="text" name="form[]" data-error="Ошибка" placeholder="2" className="body-auth__input  input"/>
                                <label for="form[]" className="body-auth__lable _icon-big-hexagon"></label>
                            </div>
                            <div className="body-auth__item ">
                                <input  onChange={e=>onChange(e)} autoComplete="off" type="text" name="form[]" data-error="Ошибка" placeholder="3" className="body-auth__input  input"/>
                                <label for="form[]" className="body-auth__lable _icon-big-hexagon"></label>
                            </div>
                            <div className="body-auth__item ">
                                <input  onChange={e=>onChange(e)} autoComplete="off" type="text" name="form[]" data-error="Ошибка" placeholder="4" className="body-auth__input  input"/>
                                <label for="form[]" className="body-auth__lable _icon-big-hexagon"></label>
                            </div>
                            <div className="body-auth__item ">
                                <input  onChange={e=>onChange(e)} autoComplete="off" type="text" name="form[]" data-error="Ошибка" placeholder="5" className="body-auth__input  input"/>
                                <label for="form[]" className="body-auth__lable _icon-big-hexagon"></label>
                            </div>
                            <div className="body-auth__item ">
                                <input  onChange={e=>onChange(e)} autoComplete="off" type="text" name="form[]" data-error="Ошибка" placeholder="6" className="body-auth__input  input"/>
                                <label for="form[]" className="body-auth__lable _icon-big-hexagon"></label>
                            </div>
                            
                        </div>
                        <button type="submit" className="body-auth__button button">CONTINUE</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default TwoFactorAuth