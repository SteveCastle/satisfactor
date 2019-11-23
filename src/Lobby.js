import React from "react";
import { Columns, Section, Container, Column, Title, Box } from "bloomer";
import { Link } from "react-router-dom";
import { SuspenseWithPerf } from "reactfire";
import { useRooms } from "./Firebase";

import "bulma/css/bulma.css";

function Lobby() {
  const rooms = useRooms();

  return (
    <Section>
      <Container>
        <Columns>
          <Column isSize="1">
            <SuspenseWithPerf
              fallback={"loading burrito status..."}
              traceId={"load-burrito-status"}
            >
              {rooms.map(doc => (
                <Box key={doc.id}>
                  <Link to={doc.id}>
                    <Title>{doc.data().name}</Title>
                  </Link>
                </Box>
              ))}
            </SuspenseWithPerf>
          </Column>
        </Columns>
      </Container>
    </Section>
  );
}

export default Lobby;
