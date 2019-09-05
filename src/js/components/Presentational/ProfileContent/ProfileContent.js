import React from "react";

const ProfileContent = props => {
  const { personalInfo } = props;
  const { nameTitle, jobTitle, about } = personalInfo;
  return (
    <div class="content">
      <h1>{nameTitle}</h1>
      <span class="lead">{jobTitle}</span>

      <div class="about-text">
        <p>{about.general}</p>

        <p>{about.overview}</p>

        <p>
          <img src="img/Signature.png" alt="" class="img-responsive" />
        </p>
      </div>

      <ul class="social-icon">
        <li>
          <a
            href="https://facebook.com/minhtus21"
            target="_blank"
            data-toggle="tooltip"
            title="facebook"
          >
            <i class="fa fa-facebook" aria-hidden="true"></i>
          </a>
        </li>
        <li>
          <a
            href="https://linkedin.com/in/tu-tran-801897180"
            target="_blank"
            data-toggle="tooltip"
            title="linkedIn"
          >
            <i class="fa fa-linkedin" aria-hidden="true"></i>
          </a>
        </li>
        <li>
          <a href="#" data-toggle="tooltip" title="live:tmtwns">
            <i class="fa fa-skype"></i>
          </a>
        </li>
        <li>
          <a
            href="https://github.com/TuTran21"
            target="_blank"
            data-toggle="tooltip"
            title="github"
          >
            <i class="fa fa-github"></i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default ProfileContent;
