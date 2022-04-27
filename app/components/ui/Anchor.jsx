import { FOCUS_STYLES } from "../constants";

export default function Anchor({
  as: As = "a",
  children,
  className = "",
  styled = true,
  ...otherProps
}) {
  return (
    <As
      className={[styled ? "text-blue-500" : null, FOCUS_STYLES, className].join(" ")}
      {...otherProps}
    >
      {children}
    </As>
  );
}
