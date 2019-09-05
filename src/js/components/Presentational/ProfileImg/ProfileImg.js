import React from "react";

const ProfileImg = props => {
  const { avatarUrl } = props;
  const alt = "Tu Tran's avatar";
  return (
    <div class="profile-img">
      <img src={avatarUrl} class="img-responsive" alt={alt} />
    </div>
  );
};

export default ProfileImg;
