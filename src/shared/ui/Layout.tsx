import { AbsoluteCenter, Container, Text } from "@chakra-ui/react";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <Container height="100vh">
      <AbsoluteCenter flexDirection="column" gap={4}>
        <Text textStyle="2xl">React Concurrent Search</Text>
        {children}
      </AbsoluteCenter>
    </Container>
  );
};

export default Layout;
