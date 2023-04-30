import { MutableRefObject, useEffect, useRef } from 'react';

/**
 * Returns the previous value of the given value
 *
 * @see https://reactjs.org/docs/hooks-faq.html#how-to-get-the-previous-props-or-state
 */
export const usePreviousValue = (value: any): MutableRefObject<undefined> => {
  const ref = useRef();

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
};
