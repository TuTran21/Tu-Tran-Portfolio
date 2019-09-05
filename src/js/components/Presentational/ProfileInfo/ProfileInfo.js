import React from "react";

import "./ProfileInfo.css";
function ProfileInfo(props) {
  const nameLabel = "Name: ";
  const birthdayLabel = "Birthday: ";
  const jobLabel = "Job: ";
  const emailLabel = "Email: ";
  const skypeLabel = "Skype: ";

  const profile = props.profile;
  const name = profile.fullName;
  const birthday = profile.dateOfBirth;
  const { job, email, skype } = profile;
  return (
    <div id="profile-info">
      <ul>
        <li>
          <b>{nameLabel}</b>
          <p className="text-muted d-inline">{name}</p>
        </li>

        <li>
          <b>{birthdayLabel}</b>
          <p className="text-muted d-inline">{birthday}</p>
        </li>

        <li>
          <b>{jobLabel}</b>
          <p className="text-muted d-inline">{job}</p>
        </li>

        <li>
          <b>{emailLabel}</b>
          <p className="text-muted d-inline">{email}</p>
        </li>

        <li>
          <b>{skypeLabel}</b>
          <p className="text-muted d-inline">{skype}</p>
        </li>
      </ul>
    </div>
  );
}

export default ProfileInfo;
