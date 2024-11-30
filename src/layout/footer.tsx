import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Box, Grid, HStack, Stack } from "styled-system/jsx";
import { Button } from "~/components/ui/button";
import { Text } from "~/components/ui/text";
import { footerLinks } from "~/constants";

const Logo = () => {
  return (
    <Stack gap={4} align="flex-start" maxW="300px">
      <Link to="https://github.com/kayoronald">
        <img
          width="180px"
          height="46px"
          src="https://gym-center.vercel.app/gym-center-footer.svg"
          alt="Gym Center"
        />
      </Link>
      <Text mt={2} color="gray.500" fontSize="md">
        Everything you need to know about MoviePlus. For more details on
        subscriptions, please visit our licensing page.
      </Text>
    </Stack>
  );
};

export const SocialMediaLinks = () => (
  <HStack color="gray.600">
    <Button aria-label="Instagram" asChild>
      <Link to="https://www.github.com/kayoronald">
        <FaInstagram fontSize="20px" />
      </Link>
    </Button>
    <Button aria-label="Discord" asChild>
      <Link to="https://www.github.com/kayoronald">
        <FaFacebook fontSize="20px" />
      </Link>
    </Button>
    <Button aria-label="Twitter" asChild>
      <Link to="https://www.github.com/kayoronald">
        <FaTwitter fontSize="20px" />
      </Link>
    </Button>
  </HStack>
);


export const Footer: React.FC = () => {
  return (
     <Box mx="auto" padding={"0px 20px"} maxW="7xl">
        <Stack gap="10">
          <Stack
            direction={{ base: "column", lg: "row" }}
            // gap={{ base: "10", lg: "40" }}
            padding="80px 0px 100px"
            gap={"24px"}
          >
            <Box flex="2" display={"flex"}>
              <Logo />
            </Box>
            <Stack direction={{ base: "column", md: "row" }} gap={2}>
              <Grid
                gridTemplateColumns={{
                  base: "repeat(2, minmax(0px, 1fr))",
                  lg: "repeat(3, minmax(0px, 1fr))",
                }}
                gap={{ base: "10", lg: "20" }}
              >
                {footerLinks.map((column, index) => (
                  <Box key={index} maxW="240px">
                    <Stack gap={4} align="flex-start" color={"zinc.300"}>
                      <Text fontSize="lg" fontWeight="bold" color={"zinc.50"}>
                        {column.title}
                      </Text>
                      {column.links.map((link, linkIndex) => (
                        <Link
                          key={linkIndex}
                          style={{ wordBreak: "break-word" }}
                          to={link.href}
                        >
                          {link.name}
                        </Link>
                      ))}
                    </Stack>
                  </Box>
                ))}
              </Grid>
            </Stack>
          </Stack>
          {/* <Copyright /> */}
        </Stack>
      </Box>
  );
}