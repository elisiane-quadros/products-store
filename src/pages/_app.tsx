import type { AppProps } from "next/app";

// Providers and store
import { Provider } from "react-redux";
import store from "../store";
import { ThemeProvider } from "styled-components";

// Styles
import { defaultTheme } from "../styles/themes/defaultTheme";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={defaultTheme}>
        <Component {...pageProps} />;
      </ThemeProvider>
    </Provider>
  );
};

export default App;
