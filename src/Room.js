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
      <Section>
        <SentimentMeter id={id} />
      </Section>
      <Section>
        <Container>
          <Columns>
            <Column isSize="1">
              {!loading && !error && room.data().people && (
                <LineChart
                  series={Object.keys(room.data().people).map(personID => ({
                    name: room.data().people[personID].name,
                    data: room
                      .data()
                      .people[personID].sentiments.map(item => [
                        item.time.seconds,
                        item.value
                      ])
                  }))}
                />
              )}
            </Column>
          </Columns>
        </Container>
      </Section>
    </>
  );
}

export default Room;
