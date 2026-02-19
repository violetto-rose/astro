export const themePalette = {
  primary: {
    50: '#fdf2f2',
    100: '#fde8e8',
    200: '#fbd5d5',
    300: '#f8b4b4',
    400: '#f98080',
    500: '#f05252',
    600: '#e02424',
    700: '#7B1F2D',
    800: '#9b1c1c',
    900: '#771d1d',
    950: '#4a0f0f',
    DEFAULT: '#7B1F2D',
  },
  secondary: {
    50: '#f8f4ec',
    100: '#efe4d2',
    200: '#dfc9a9',
    300: '#cca67b',
    400: '#b48357',
    500: '#9c6942',
    600: '#7f5034',
    700: '#653f2c',
    800: '#513326',
    900: '#432b21',
    950: '#26170f',
    DEFAULT: '#b48357',
  },
  saffron: {
    DEFAULT: '#F4C430',
    light: '#F8D568',
    dark: '#B88A00',
  },
  sandalwood: {
    DEFAULT: '#E8DCCA',
    light: '#F5EEE6',
    dark: '#D0BFA0',
  },
  templeBrown: {
    DEFAULT: '#4A3728',
    light: '#6D523C',
    dark: '#2E2219',
  },
} as const;

export const themeColors = {
  surface: themePalette.sandalwood.light,
  surfaceMuted: themePalette.secondary[50],
  surfaceSoft: themePalette.sandalwood.DEFAULT,
  surfaceCool: themePalette.secondary[100],
  surfaceCoolDeep: themePalette.secondary[200],
  ink: themePalette.templeBrown.dark,
  accent: themePalette.secondary[400],
  selection: themePalette.saffron.light,
  heroPackBorder: themePalette.secondary[200],
  razorpayTheme: themePalette.primary[700],
  metaTheme: themePalette.sandalwood.light,
  spotlight: 'rgba(244, 196, 48, 0.26)',
  shadowAccentSoft: 'rgba(197, 160, 89, 0.1)',
  shadowAccentMedium: 'rgba(197, 160, 89, 0.15)',
} as const;

export const themeShadows = {
  divider: `0px 10px 9px -10px ${themeColors.shadowAccentMedium}`,
  heroPack: `0 8px 18px ${themeColors.shadowAccentSoft}`,
} as const;

export const themeGradients = {
  checkoutRadial: `radial-gradient(circle_at_top, ${themeColors.surface}, ${themeColors.surfaceCool} 45%, ${themeColors.surfaceCoolDeep} 100%)`,
  heroSpotlight: `radial-gradient(circle_at_68%_40%, ${themeColors.spotlight}, transparent 48%)`,
} as const;
