import { css } from "styled-system/css";
import { flex } from "styled-system/patterns";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Container } from "styled-system/jsx";
import { Heading } from "../ui/heading";
import { Text } from "../ui/text";

export const Newsletter: React.FC = () => {
  return (
      <section
        className={css({
          py: 16,
          // bg: "purple.900",
        })}
      >
        <Container mx="auto" textAlign={"center"}>
          <Heading mb={2} size={"4xl"}>Stay Updated</Heading>
          <Text>
            Subscribe to our newsletter for the latest movie news, exclusive
            previews, and special offers.
          </Text>

          <form
            className={flex({
              direction: "column",
              gap: 4,
              maxW: "md",
              mx: "auto",
              px: 4,
              py: 4,
            })}
          >
            <Input rounded={"md"} type="email" placeholder="Enter your email" />
            <Button type="button" w={"full"} bg="purple.700" variant={"outline"}>
              Subscribe
            </Button>
          </form>
        </Container>
      </section>
  );
}