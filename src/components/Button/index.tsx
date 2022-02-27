import React, {InputHTMLAttributes} from 'react';

interface Props extends InputHTMLAttributes<HTMLInputElement>  {
    text: string;
    type: string;
    onClick: () => void;
    children?: React.ReactNode;
}

const Button: React.FC<Props> = (props) => {
    return (
        <div>
            <button 
                onClick={props.onClick}
                >
                {props.children}
            </button>
        </div>
      );
}

export default Button;
