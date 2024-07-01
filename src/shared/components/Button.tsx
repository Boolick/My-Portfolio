interface ButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
}

export const Button = ({ text, onClick, className }: ButtonProps): JSX.Element => {
  return (
    <button
      onClick={onClick}
      className={`border-none  w-40 h-30 bg-green-700 rounded-xl p-2 m-4 active:bg-green-800 text-white ${className}`}
    >
      {text}
    </button>
  );
};
