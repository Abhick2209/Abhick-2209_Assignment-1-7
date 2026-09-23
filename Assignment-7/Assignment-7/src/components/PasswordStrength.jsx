function PasswordStrength({ password }) {
  const getStrength = () => {
    if (!password) {
      return {
        level: 0,
        label: "Enter a password",
      };
    }

    let score = 0;

    if (password.length >= 6) score++;
    if (password.length >= 10) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++;

    if (score <= 1) {
      return {
        level: 1,
        label: "Weak password",
      };
    }

    if (score <= 3) {
      return {
        level: 2,
        label: "Medium password",
      };
    }

    return {
      level: 3,
      label: "Strong password",
    };
  };

  const strength = getStrength();

  return (
    <div className="password-strength">
      <div className="strength-top">
        <span>Password strength</span>
        <strong className={`strength-${strength.level}`}>
          {strength.label}
        </strong>
      </div>

      <div className="strength-bars">
        {[1, 2, 3].map((bar) => (
          <span
            key={bar}
            className={
              bar <= strength.level
                ? `filled strength-${strength.level}`
                : ""
            }
          ></span>
        ))}
      </div>
    </div>
  );
}

export default PasswordStrength;