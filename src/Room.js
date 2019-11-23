import React from "react";
import {
  Columns,
  Section,
  Container,
  Column,
  Title,
  Box,
  Button
} from "bloomer";
import { useRoom } from "./Firebase";
import "bulma/css/bulma.css";
import SentimentMeter from "./SentimentMeter";

function Room({ match }) {
  const {
    params: { id }
  } = match;

  const [room, loading, error] = useRoom(id);
  return (
    <Section>
      <SentimentMeter id={id} />
      <Container>
        <Columns>
          <Column isSize="1">
            {!loading &&
              !error &&
              room.data().people &&
              Object.keys(room.data().people).map(personKey => (
                <Box key={personKey}>
                  <Title>{room.data().people[personKey].name}</Title>
                  {room.data().people[personKey].sentiments.map(sentiment => (
                    <div>
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
