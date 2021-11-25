import { useEffect } from "react";
import { useState } from "react/cjs/react.development";

export const useDate = (unixDate = new Date()) => {

    const locale = 'en';
    const [currentDate, setCurrentDate] = useState(unixDate);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentDate(new Date());
        }, 1000);

        return () => {
            clearInterval(timer);
        }
    }, []);

    const day = currentDate.toLocaleDateString(locale, { weekday: 'long' });
    const date = `${day} , ${currentDate.getDate()} ${currentDate.toLocaleDateString(locale, { month: 'long' })}`;
    const time = currentDate.toLocaleString(locale, { hour: 'numeric', minute: 'numeric', hour12: true });

    return {
        date,
        time
    };
}