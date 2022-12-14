import { useState, useEffect} from 'react';

interface IWindowSizeStaten{
    width: number | null;
    height: number | null;
}

const useWindowSize = () => {
     const [windowSize, setWindowSize] = useState<IWindowSizeStaten>({
         width: null, 
         height: null,
    });

useEffect ( () => {
    const handelResize = () => {
        setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight,

        })
    }

    window.addEventListener('resize', handelResize);

    handelResize();

    return () => {
        window.removeEventListener('resize', handelResize);
    }
}, []);

return windowSize;
}

export default useWindowSize;