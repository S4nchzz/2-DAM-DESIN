import { createContext, useEffect, useState } from "react";

export const NewsContext = createContext()

export const NewsProvider = ({ children }) => {
  const [noticias, setNoticias] = useState([])

  useEffect(() => {
    const fetchNoticias = async() => {
      const data = await fetch('noticias.json')
      const json = await data.json()

      setNoticias(json)
    }

    fetchNoticias()

  }, [])

  return (
    <NewsContext.Provider value={{ noticias }}>
        {children}
    </NewsContext.Provider>
  )
};
