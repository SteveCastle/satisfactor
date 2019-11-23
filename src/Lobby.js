import React from "react";
import { Columns, Section, Container, Column, Title, Box } from "bloomer";
import { Link } from "react-router-dom";

import { useRooms } from "./Firebase";

import "bulma/css/bulma.css";

function Lobby() {
  const [rooms, loading, error] = useRooms();

  return (
    <Section>
      <Container>
        <Columns>
          <Column isSize="1">
            {!loading &&
              !error &&
              rooms.docs.map(doc => (
                <Box key={doc.id}>
                  <Link to={doc.id}>
                    <Title>{doc.data().name}</Title>
                  </Link>
                </Box>
              ))}
          </Column>
        </Columns>
      </Container>
    </Section>
  );
}

export default Lobby;
