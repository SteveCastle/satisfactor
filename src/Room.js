import React from "react";
import { Columns, Section, Container, Column, Title, Box } from "bloomer";
import { usePeople } from "./Firebase";

import "bulma/css/bulma.css";

function Room() {
  const [people, loading, error] = usePeople();

  return (
    <Section>
      <Container>
        <Columns>
          <Column isSize="1">
            {!loading &&
              !error &&
              people.docs.map(doc => (
                <Box key={doc.id}>
                  <Title>{doc.data().name}</Title>
                </Box>
              ))}
          </Column>
        </Columns>
      </Container>
    </Section>
  );
}

export default Room;
