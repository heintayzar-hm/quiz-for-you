import PropTypes from "prop-types";

export type ButtonProps = {
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
    disabled?: boolean;
    type?: "button" | "submit" | "reset";
}

const Button = ({ children, ...props }: ButtonProps) => {
    const { className } = props;
    return <button {...props} className={`${className} bg-red-100`}>{children}</button>;
    };

Button.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Button;
