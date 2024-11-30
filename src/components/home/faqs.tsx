import { ChevronDownIcon } from "lucide-react";
import { Container, Stack } from "styled-system/jsx";
import { Accordion } from "~/components/ui/accordion";
import { AvatarGroup } from "../ui/avatar-group";
import { Text } from "../ui/text";

export const Faqs = () => {
  const questions = [
    {
      question: "What do I get when I subscribe to Cinema?",
      answer: (
        <Text>
          After subscribing, you will receive access to our entire movie library, including new releases and exclusive content. You can stream movies at any time on supported devices.
        </Text>
      ),
    },

    {
      question: "What should I do if I encounter an issue with a movie stream?",
      answer: <Text>Contact our support team, or report an issue through our help portal.</Text>,
    },
    {
      question: "What is your refund policy?",
      answer: (
        <Text>
          We offer a 7-day refund policy for subscription-based plans. If you are not satisfied with your experience within the first week, you can request a full refund. After the 7 days, we do not offer refunds.
        </Text>
      ),
    },
  ];

  return (
    <Container py="12" maxW="7xl">
      <Stack
        gap={{ base: "12", lg: "24" }}
        direction={{ base: "column", lg: "row" }}
        width="full"
      >
        <Stack gap={{ base: "4", md: "5" }} maxW={{ lg: "md" }}>
          <Text color="fg.muted" textStyle="lg">
            Everything you need to know about Cinema. For more details on
            subscriptions, please visit our licensing page.
          </Text>
          <AvatarGroup
            avatars={[
              {
                name: "Kayo",
                src: "https://github.com/kayoronald.png",
              },
              {
                name: "Igor",
                src: "https://github.com/igorbrenno.png",
              },
            ]}
          />
        </Stack>

        <Stack gap="8" flex="1">
          <Accordion.Root defaultValue={[questions[0].question]} multiple>
            {questions.map((item, id) => (
              <Accordion.Item key={id} value={item.question}>
                <Accordion.ItemTrigger>
                  {item.question}
                  <Accordion.ItemIndicator>
                    <ChevronDownIcon />
                  </Accordion.ItemIndicator>
                </Accordion.ItemTrigger>
                <Accordion.ItemContent textAlign="start">
                  {item.answer}
                </Accordion.ItemContent>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </Stack>
      </Stack>
    </Container>
  );
};
