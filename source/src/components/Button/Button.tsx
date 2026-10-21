import "./Button.css";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  href?: string;
};

export function Button({
  children,
  variant = "primary",
  href,
}: ButtonProps) {

  const styles = {
    primary: {
      background: "var(--accent-green)",
      color: "var(--text-primary)",
    },

    secondary: {
      border: "1px solid var(--accent-green)",
      background: "transparent",
      color: "var(--text-primary)",
    },

    ghost: {
      background: "transparent",
      color: "var(--text-secondary)"
    },
  };
  if (href) {
    return (
      <a
        className="button"
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        style={styles[variant]}
      >
        {children}
      </a>
    );
  }

  return (
    <button className="button" style={styles[variant]}>
      {children}
    </button>
  );
}
