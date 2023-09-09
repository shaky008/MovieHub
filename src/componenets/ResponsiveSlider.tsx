import { Flex, IconButton } from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { ReactNode, useState } from "react";

interface Props {
  children: ReactNode;
}

const ResponsiveSlider = ({ children }: Props) => {
  const [isDisplayed, setDisplayed] = useState(false);
  return (
    <div>
      {isDisplayed ? (
        <Flex flexDir="column" align="center">
          <Flex
            w="100vw"
            h="100vh"
            zIndex={20}
            pos="fixed"
            top="0"
            left="0"
            overflowY="auto"
            flexDir="column"
            bgColor="#1A202C"
          >
            <Flex justify="flex-end">
              <IconButton
                aria-label="Close Menu"
                mt={2}
                mr={2}
                icon={<CloseIcon />}
                onClick={() => setDisplayed(false)}
              />
            </Flex>
            <Flex
              flexDir="column"
              p={4}
              overflowY="auto" // Enable scrolling within the content
            >
              {children}
            </Flex>
          </Flex>
        </Flex>
      ) : (
        <IconButton
          aria-label="Open Menu"
          size="lg"
          icon={<HamburgerIcon />}
          mr={2}
          ml={2}
          onClick={() => setDisplayed(true)}
        />
      )}
    </div>
  );
};

export default ResponsiveSlider;
