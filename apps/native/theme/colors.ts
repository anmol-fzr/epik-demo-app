const ANDROID_COLORS = {
  white: 'rgb(255, 255, 255)',
  black: 'rgb(0, 0, 0)',
  light: {
    grey6: 'rgb(249, 249, 255)',
    grey5: 'rgb(215, 217, 228)',
    grey4: 'rgb(193, 198, 215)',
    grey3: 'rgb(113, 119, 134)',
    grey2: 'rgb(65, 71, 84)',
    grey: 'rgb(24, 28, 35)',
    background: 'rgb(249, 249, 255)',
    foreground: 'rgb(0, 0, 0)',
    root: 'rgb(255, 255, 255)',
    card: 'rgb(255, 255, 255)',
    destructive: 'rgb(186, 26, 26)',
    primary: 'rgb(0, 112, 233)',
  },
  dark: {
    grey6: 'rgb(16, 19, 27)',
    grey5: 'rgb(39, 42, 50)',
    grey4: 'rgb(49, 53, 61)',
    grey3: 'rgb(54, 57, 66)',
    grey2: 'rgb(139, 144, 160)',
    grey: 'rgb(193, 198, 215)',
    background: 'rgb(0, 0, 0)',
    foreground: 'rgb(255, 255, 255)',
    root: 'rgb(0, 0, 0)',
    card: 'rgb(16, 19, 27)',
    destructive: 'rgb(147, 0, 10)',
    primary: 'rgb(3, 133, 255)',
  },
} as const;

const COLORS = ANDROID_COLORS;

export { COLORS };


const palette = {
  neutral100: "#FFFFFF",
  neutral200: "#F4F2F1",
  neutral300: "#D7CEC9",
  neutral400: "#B6ACA6",
  neutral500: "#978F8A",
  neutral600: "#564E4A",
  neutral700: "#3C3836",
  neutral800: "#191015",
  neutral900: "#000000",

  primary100: "#F4E0D9",
  primary200: "#E8C1B4",
  primary300: "#DDA28E",
  primary400: "#D28468",
  primary500: "#C76542",
  primary600: "#A54F31",

  secondary100: "#DCDDE9",
  secondary200: "#BCC0D6",
  secondary300: "#9196B9",
  secondary400: "#626894",
  secondary500: "#41476E",

  accent100: "#FFEED4",
  accent200: "#FFE1B2",
  accent300: "#FDD495",
  accent400: "#FBC878",
  accent500: "#FFBB50",

  angry100: "#F2D6CD",
  angry500: "#C03403",

  success: "#2F855A",
  successBackground: "#C6F6D5",

  overlay20: "rgba(25, 16, 21, 0.2)",
  overlay50: "rgba(25, 16, 21, 0.5)",
} as const;

// const palette = {
// 	// Clean & readable neutrals
// 	neutral100: "#FFFFFF",
// 	neutral200: "#F5F7FA",
// 	neutral300: "#E4E7EB",
// 	neutral400: "#CBD2D9",
// 	neutral500: "#9AA5B1",
// 	neutral600: "#52606D",
// 	neutral700: "#323F4B",
// 	neutral800: "#1F2933",
// 	neutral900: "#0B0E11",
//
// 	// Primary – Finance-safe blue (Trust, CTA)
// 	primary100: "#E6F0FF",
// 	primary200: "#B3D4FF",
// 	primary300: "#80B8FF",
// 	primary400: "#4D9CFF",
// 	primary500: "#1A80FF",
// 	primary600: "#0063D1",
//
// 	// Secondary – Calming teal (Balance, Highlights)
// 	secondary100: "#E6FFFA",
// 	secondary200: "#B2F5EA",
// 	secondary300: "#81E6D9",
// 	secondary400: "#4FD1C5",
// 	secondary500: "#38B2AC",
//
// 	// Accent – Energetic amber (Focus, Warnings)
// 	accent100: "#FFFBEA",
// 	accent200: "#FEEBCB",
// 	accent300: "#FBD38D",
// 	accent400: "#F6AD55",
// 	accent500: "#ED8936",
//
// 	// Angry – Fraud alerts, loss
// 	angry100: "#FFE6E6",
// 	angry500: "#E53E3E",
//
// 	// Overlay – For modal/background blur
// 	overlay20: "rgba(15, 23, 42, 0.2)",
// 	overlay50: "rgba(15, 23, 42, 0.5)",
// } as const;

export const colors = {
  /**
   * The palette is available to use, but prefer using the name.
   * This is only included for rare, one-off cases. Try to use
   * semantic names as much as possible.
   */
  palette,
  /**
   * A helper for making something see-thru.
   */
  transparent: "rgba(0, 0, 0, 0)",
  /**
   * The default text color in many components.
   */
  text: palette.neutral800,
  /**
   * Secondary text information.
   */
  textDim: palette.neutral600,
  /**
   * The default color of the screen background.
   */
  background: palette.neutral200,
  /**
   * The default border color.
   */
  border: palette.neutral400,
  /**
   * The main tinting color.
   */
  tint: palette.primary500,
  /**
   * The inactive tinting color.
   */
  tintInactive: palette.neutral300,
  /**
   * A subtle color used for lines.
   */
  separator: palette.neutral300,
  /**
   * Error messages.
   */
  error: palette.angry500,
  /**
   * Error Background.
   */
  errorBackground: palette.angry100,
  /**
   * Success messages.
   */
  success: palette.success,
  /**
   * Success Background.
   */
  successBackground: palette.successBackground,
} as const;

/**
  Use these spacings for margins/paddings and other whitespace throughout your app.
 */
export const spacing = {
  xxxs: 2,
  xxs: 4,
  xs: 8,
  sm: 12,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
  xxxl: 64,
} as const

