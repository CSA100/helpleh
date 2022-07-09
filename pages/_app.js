import { ChakraProvider } from "@chakra-ui/react";

import { extendTheme } from "@chakra-ui/react";
import Layout from "../components/layout";
import { AuthUserProvider } from "../context/AuthUserContext";

const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
  primary: {
    100: "#FF886A",
    200: "#fc977e",
    300: "#FCF6CF",
  },
};

const theme = extendTheme({ colors });

function App({ Component, pageProps }) {
  return (
    <AuthUserProvider>
      <ChakraProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </AuthUserProvider>
  );
}

export default App;
