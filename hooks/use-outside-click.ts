import React, { useEffect } from "react";

export const useOutsideClick = (
    ref: React.RefObject<HTMLDivElement | null>,
    callback: () => void
  ) => {
    useEffect(() => {
      function handleClickOutside(event: MouseEvent) {
        if (ref.current && !ref.current.contains(event.target as Node)) {
          callback();
        }
      }
  
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref, callback]);
  };