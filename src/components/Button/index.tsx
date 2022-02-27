import React, {ButtonHTMLAttributes} from 'react';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement>  {
    text: string;
    onClick: () => void;
    children?: React.ReactNode;
}

const Button: React.FC<Props> = (props) => {
    return (
        <div>
            <button 
                onClick={props.onClick}
                type={'button'}
                >
                {props.children}
            </button>
        </div>
      );
}

export default Button;
