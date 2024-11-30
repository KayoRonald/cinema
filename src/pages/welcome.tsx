import { Container } from "styled-system/jsx";
import { Movie } from "~/components/movie";
import { sections } from "~/constants";

const Welcome: React.FC = () => {
  return (
    <Container
      mt={{
        base: "2",
        sm: "6",
        md: "8",
        lg: "12",
      }}
    >
      {sections.map(({ title, category, type }) => (
        <Movie title={title} category={category} type={type} key={title} />
      ))}
    </Container>
  );
};


export default Welcome;