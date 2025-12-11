// postcss.config.mjs
const config = {
  plugins: {
    // Tailwind DEVE essere il primo plugin per elaborare le direttive @tailwind
    tailwindcss: {},
    autoprefixer: {},
  },
};

export default config;