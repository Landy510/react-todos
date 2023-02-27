import { useEffect } from 'react';

export const useOnClickOutside = (ref, currentState, updater) => {
  useEffect(() => {
    const handler = (evt) => {
      if(currentState && ref.current && !ref.current.contains(evt.target)) {
        updater();
      }
    }

    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [currentState])
}