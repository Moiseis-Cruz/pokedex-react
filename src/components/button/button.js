import { useContext } from "react"
import { themes, ThemeContext } from "../../theme-context/theme-context"


export const Button = () => {

    const { theme, setTheme } = useContext(ThemeContext)

    function handleThemes() {
        setTheme(theme === themes.light ? themes.dark : themes.light)
    }

    return(
        <button style={{color: theme.color, backgroundColor: theme.backgroundColor, fontSize: "20px", padding: "10px 20px", border: theme.border, borderRadius: "8px", cursor: "pointer"}} onClick={handleThemes}>Change Theme</button>
    )
}