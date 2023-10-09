import React, { useContext } from 'react'
import { ThemeContext } from '../Context/ThemeContext'
import { UserContext } from '../Context/UserContext'

const Header = () => {
  
  const { theme, handleTheme } = useContext(ThemeContext)
  const {user, login, logout} = useContext(UserContext)
  return (
    <header className={theme} style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <form style={{width: '100%'}}>
            <fieldset>
                <label htmlFor="light">Light</label>
                <input type="radio" name="same" id="light" value="light" onClick={handleTheme}/>
                <label htmlFor="dark">Dark</label>
                <input type="radio" name="same" id="dark" value="dark" onClick={handleTheme}/>
            </fieldset>
        </form>
        {user.username ? (
          <div className={theme} style={{display: 'flex'}}>
            <p>{user.username}</p><button onClick={logout}>Logout</button>
          </div>
        ) : <button onClick={() => login('Joaquin')}>Login</button>}
    </header>
  )
}

export default Header