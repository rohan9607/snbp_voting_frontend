'use client';

import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext({})

export const ContextProvider = ({ children }) => {
    const [headGirls, setHeadGirls] = useState([]);
    const [headBoys, setHeadBoys] = useState([]);
    const [houseCaptain, setHouseCaptin] = useState([]);
    const [sportsCaptain, setSportsCaptin] = useState([]);
    const [viceCaptain, setViceCaptin] = useState([]);
    const [prefect, setPrefect] = useState([]);

    useEffect(() => {
      axios.get(process.env.BASE_URL+"/section1").then((response) => {
        const arr = response.data;
        setHeadGirls(arr.filter(data => data.nomineeFor === "head_girl"))
        setHeadBoys(arr.filter(data => data.nomineeFor === "head_boy"))
        setSportsCaptin(arr.filter(data => data.nomineeFor === "sports_captain"))
      });

      axios.get(process.env.BASE_URL + "/section2").then((response) => {
        const arr = response.data;
        setHouseCaptin(arr.filter(data => data.nomineeFor === "house_captain"))
        setViceCaptin(arr.filter(data => data.nomineeFor === "vice_captain"))
        setPrefect(arr.filter(data => data.nomineeFor === "prefect"))
      })
      return () => {};
    }, []);

    return (
        <ThemeContext.Provider value={{ headGirls, headBoys, sportsCaptain, houseCaptain, viceCaptain, prefect}}>
            {children}
        </ThemeContext.Provider>
    )
};

export const useThemeContext = () => useContext(ThemeContext);