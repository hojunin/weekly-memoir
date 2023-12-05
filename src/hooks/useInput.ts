import { useState, useCallback, useEffect } from 'react';

interface Options {
  initialValue?: string;
}

interface ReturnType {
  value: string;
  onChangeInput: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  reset: () => void;
}
/**
 * @param {initialValue} options
 * @returns {ReturnType}
 */
const useInput = (options?: Options): ReturnType => {
  const { initialValue = '' } = options || {};
  const [value, setValue] = useState<string>(initialValue || '');

  useEffect(() => {
    if (!initialValue) {
      return;
    }

    setValue(initialValue);
  }, [initialValue]);

  const handleString = useCallback((receivedValue: string) => {
    setValue(receivedValue);
  }, []);

  const onChangeInput = useCallback(
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const targetValue: string = event.target.value || '';

      handleString(targetValue);
    },
    [handleString],
  );

  const reset = () => {
    setValue('');
  };

  return { value, onChangeInput, reset };
};

export default useInput;
