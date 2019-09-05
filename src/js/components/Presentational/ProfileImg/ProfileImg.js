import React from "react";

const ProfileImg = props => {
  const { avatarUrl } = props;
  const alt = "Tu Tran's avatar";
  return (
    <div className="profile-img">
      <img src={avatarUrl} className="img-responsive" alt={alt} />
    </div>
  );
};

export default ProfileImg;
