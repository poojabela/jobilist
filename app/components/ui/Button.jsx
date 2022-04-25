import { DISABLED_STYLES, FOCUS_STYLES } from "../constants";

export default function Button({
  as: As = "button",
  children,
  ghost = false,
  className = "",
  ...otherProps
}) {
  return (
    <As
      className={[
        "font-medium text-sm text-white border border-opacity-50 px-3 py-1 rounded-md block",
        ghost
          ? "border-neutral-800 bg-neutral-900 hover:border-neutral-700"
          : "border-blue-400 bg-blue-500 hover:border-blue-300",
        DISABLED_STYLES,
        FOCUS_STYLES,
        className,
      ].join(" ")}
      {...otherProps}
    >
      {children}
    </As>
  );
}
