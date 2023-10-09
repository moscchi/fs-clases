import { createContext, useState } from "react";

// 1. Creamos el contexto
export const ThemeContext = createContext();

// 2. Creamos el proveedor del estado y/o funciones
const ThemeProvider = ({children}) => {
    // 3. Creamos el estado que se va a compartir desde el proveedor.
    const [theme, setTheme] = useState("light")
    
    // 3. Creamos el handler que se va a compartir desde el proveedor.
    const handleTheme = (e) => {
        if(e.target.value === "light"){
            setTheme("light");
        } else {
            setTheme("dark");
        }
    }

    // 4. Preparamos la "data" del contexto para ser exportada.
    const data = { theme, handleTheme };

    // 5. Hacer que esta funcion retorne Nuestro contexto.
    return <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>
}

export default ThemeProvider;