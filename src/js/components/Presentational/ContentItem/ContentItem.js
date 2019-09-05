import React from "react";

const ContentItem = props => {
  const { time, subtitle, title, extra } = props;
  return (
    <div class="content-item">
      <small>{time}</small>
      <h3>{title}</h3>
      <h4>{subtitle}</h4>

      <p class="text-muted mt-1">{extra}</p>
    </div>
  );
};

export default ContentItem;
