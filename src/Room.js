import React from "react";
import { Columns, Section, Container, Column, Title, Box } from "bloomer";
import { useRoom } from "./Firebase";
import "bulma/css/bulma.css";

function Room({ match }) {
  const {
    params: { id }
  } = match;

  const [room, loading, error] = useRoom(id);

  return (
    <Section>
      <Container>
        <Columns>
          <Column isSize="1">
            {!loading &&
              !error &&
              room.data().people.map(person => (
                <Box key={person.user}>
                  <Title>{person.name}</Title>
                  {person.sentiments.map(sentiment => (
                    <div>
                      <p>{sentiment.time.seconds}</p>
                      <p>{sentiment.value}</p>
                    </div>
                  ))}
                </Box>
              ))}
          </Column>
        </Columns>
      </Container>
    </Section>
  );
}

export default Room;
