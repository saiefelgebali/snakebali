import { useEffect, useRef } from 'react';

export function useInterval(delay, callback) {
    const savedCallback = useRef();
    
    // Remember Last Callback
    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    // Set Up Interval
    useEffect(() => {
        function tick() {
            savedCallback.current();
        }
        if (delay !== null) {
            let id = setInterval(tick, delay);
            return () => clearInterval(id);
        }
    }, [delay]);
}