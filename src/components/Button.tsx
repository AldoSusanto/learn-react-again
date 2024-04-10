interface Props {
  label: string;
  color?: "primary" | "secondary" | "danger";
  onButtonClick: () => void;
}

const Button = ({ label, color, onButtonClick }: Props) => {
  return (
    <div>
      <button
        type="button"
        className={"btn btn-" + color}
        onClick={onButtonClick}
      >
        {label}
      </button>
    </div>
  );
};

export default Button;
