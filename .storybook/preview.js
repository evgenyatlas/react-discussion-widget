import "../src/global.style.css"

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: "light-gray",
    values: [
      {
        name: "light-gray",
        value: "#f8f8f8"
      }
    ]
  }
}