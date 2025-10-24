const theme = {
  primary: `
    bg-gradient-to-r from-blue-600 to-blue-700 
    text-white px-6 py-3 rounded-xl font-semibold 
    shadow-lg hover:shadow-xl 
    transition-all duration-300 
    transform hover:-translate-y-1 
    focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-40 
    active:translate-y-0 active:shadow-md
    disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none
  `,

  secondary: `
    bg-white text-gray-800 px-6 py-3 rounded-xl font-medium 
    border border-gray-300 shadow-sm
    hover:bg-gray-50 hover:shadow-md 
    transition-all duration-200 
    focus:outline-none focus:ring-4 focus:ring-gray-400 focus:ring-opacity-20 
    active:bg-gray-100
    disabled:opacity-40 disabled:cursor-not-allowed
  `,

  dark: `
    bg-gradient-to-r from-gray-900 to-black 
    text-white px-6 py-3 rounded-xl font-semibold 
    shadow-lg hover:shadow-xl 
    transition-all duration-300 
    transform hover:-translate-y-1 
    focus:outline-none focus:ring-4 focus:ring-gray-600 focus:ring-opacity-40 
    active:translate-y-0 active:shadow-md
    disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none
  `,

  confirm: `
    bg-gradient-to-r from-green-600 to-green-700 
    text-white px-6 py-3 rounded-xl font-semibold 
    shadow-lg hover:shadow-xl 
    transition-all duration-300 
    transform hover:-translate-y-1 
    focus:outline-none focus:ring-4 focus:ring-green-500 focus:ring-opacity-40 
    active:translate-y-0 active:shadow-md
    disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none
  `,

  reject: `
    bg-gradient-to-r from-red-600 to-red-700 
    text-white px-6 py-3 rounded-xl font-semibold 
    shadow-lg hover:shadow-xl 
    transition-all duration-300 
    transform hover:-translate-y-1 
    focus:outline-none focus:ring-4 focus:ring-red-500 focus:ring-opacity-40 
    active:translate-y-0 active:shadow-md
    disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none
  `,
} as const;
const buttonSizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
} as const;

const navigation = () => {};

const GButton = ({
  classProperty = "",
  text = "",
  rel = "",
  variant = "primary",
  event,
  disabled = false,
  loading = false,
  size = "md",
}: GButtonProps) => {
  const baseClasses =
    "inline-flex items-center justify-center font-medium rounded-xl transition-all duration-300 focus:outline-none";

  const variantClass = theme[variant as keyof typeof theme];
  const sizeClass = buttonSizes[size];

  return (
    <div>
      <button
        onClick={event}
        className={`
          ${baseClasses}
    ${variantClass}
    ${sizeClass}
    ${classProperty} 
     ${disabled ? "opacity-50 cursor-not-allowed transform-none" : ""} ${
          loading ? "cursor-wait" : ""
        }`}
      >
        {loading && (
          <svg
            className="animate-spin -ml-1 mr-2 h-4 w-4 text-current"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        )}
        {loading ? "Processing..." : text}
      </button>
    </div>
  );
};

export default GButton;
