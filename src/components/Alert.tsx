import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  msg: string;
}

const Alert = ({ msg, children }: Props) => {
  return (
    <div>
      <button type="button" className="btn btn-primary">
        {children}
      </button>
      <button type="button" className="btn btn-secondary">
        {msg}
      </button>
    </div>
  );
};

export default Alert;
