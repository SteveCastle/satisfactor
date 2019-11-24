import React from "react";
import { Columns, Section, Container, Column, Title, Box } from "bloomer";
import { useRoom } from "./Firebase";
import "bulma/css/bulma.css";
import SentimentMeter from "./SentimentMeter";
import Header from "./Header";
import { LineChart } from "./LineChart";

function Room({ match }) {
  const {
    params: { id }
  } = match;

  const [room, loading, error] = useRoom(id);
  if (loading) {
    return <div>Loading</div>;
  }
  return (
    <>
      <Header title={room.data().name} />
      <Section>
        <SentimentMeter id={id} />
      </Section>
      <Section>
        <Container>
          <Columns>
            <Column isSize="1">
              {!loading &&
                !error &&
                room.data().people &&
                Object.keys(room.data().people).map(personKey => (
                  <LineChart
                    key={personKey}
                    data={room
                      .data()
                      .people[personKey].sentiments.map(item => [
                        item.time.seconds,
                        item.value
                      ])}
                  />
                ))}
            </Column>
          </Columns>
        </Container>
      </Section>
    </>
  );
}

export default Room;
