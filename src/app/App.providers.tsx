import { ChakraProvider, defaultSystem } from "@chakra-ui/react";

type AppProvidersProps = {
  children: React.ReactNode;
};

const AppProviders = ({ children }: AppProvidersProps) => {
  return <ChakraProvider value={defaultSystem}>{children}</ChakraProvider>;
};

export default AppProviders;
