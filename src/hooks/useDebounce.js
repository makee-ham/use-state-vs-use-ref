// 박인수 강사님 코드
// 이름/아이디 고유성 검사에 사용할 계획

import { useEffect, useRef, useState } from "react";

const useDebounce = (targetValue, delay = 100) => {
  const [debouncedValue, setDebouncedValue] = useState(targetValue);
  const timerRef = useRef(0);

  const cleanupDebounce = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
  };

  const debouncing = () => {
    cleanupDebounce();
    timerRef.current = setTimeout(() => {
      setDebouncedValue(targetValue);
    }, delay);
  };

  useEffect(() => {
    debouncing();
  }, [targetValue]);

  useEffect(() => {
    return () => {
      cleanupDebounce();
    };
  }, []);

  return debouncedValue;
};

export default useDebounce;
