import React from "react";
import { useRecordSentiment } from "./Firebase";
import PropTypes from "prop-types";

function SentimentMeter({ id }) {
  const [sentiment, setSentiment] = useRecordSentiment(id);

  return (
    <div>
      <input
        type="range"
        min="1"
        max="100"
        value={sentiment}
        class="slider"
        id="myRange"
        onChange={e => setSentiment(e.target.value)}
      />
    </div>
  );
}

SentimentMeter.propTypes = {};

export default SentimentMeter;
