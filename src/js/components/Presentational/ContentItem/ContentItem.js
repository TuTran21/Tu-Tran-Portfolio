import React from "react";

const ContentItem = (props) => {
  const { time, subtitle, title, extra, button } = props;

  const handleRedirect = () => {
    window.open(button.url, "_blank");
  };

  return (
    <div className="content-item">
      <small>{time}</small>
      <h3>{title}</h3>
      <h4>{subtitle}</h4>

      <p className="text-muted mt-1">{extra}</p>
      {button && (
        <button className="btn btn-primary" onClick={() => handleRedirect()}>
          {button.text}
        </button>
      )}
    </div>
  );
};

export default ContentItem;
