import React, { InputHTMLAttributes, useCallback } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string,
    input: any[],
}

const Input: React.FC<InputProps> = (props) => {
    const {
        input = ["", {}, () => {}],
      } = props;
      const [key, state, set] = input;
      return (
        <div>
            <input { ... props } 
                value={state[key]}
                onChange={useCallback(
                    (e) => {
                    set({ ...state, [key]: e.target.value });
                    },
                    [set, state, key]
                )}
            />
        </div>
    );
}

export default Input;
