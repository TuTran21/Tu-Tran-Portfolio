import React from "react";

const ProfileContent = props => {
  const { profile } = props;
  const { nameTitle, jobTitle, about } = profile;
  return (
    <div className="content">
      <h1>{nameTitle}</h1>
      <span className="lead">{jobTitle}</span>

      <div className="about-text">
        <p>{about.general}</p>

        <p>{about.overview}</p>

        <p>
          <img src="img/Signature.png" alt="" className="img-responsive" />
        </p>
      </div>

      <ul className="social-icon">
        <li>
          <a
            href="https://facebook.com/minhtus21"
            target="_blank"
            data-toggle="tooltip"
            title="facebook"
          >
            <i className="fa fa-facebook" aria-hidden="true"></i>
          </a>
        </li>
        <li>
          <a
            href="https://linkedin.com/in/tu-tran-801897180"
            target="_blank"
            data-toggle="tooltip"
            title="linkedIn"
          >
            <i className="fa fa-linkedin" aria-hidden="true"></i>
          </a>
        </li>
        <li>
          <a href="#" data-toggle="tooltip" title="live:tmtwns">
            <i className="fa fa-skype"></i>
          </a>
        </li>
        <li>
          <a
            href="https://github.com/TuTran21"
            target="_blank"
            data-toggle="tooltip"
            title="github"
          >
            <i className="fa fa-github"></i>
          </a>
        </li>
        <li>
          <a
            href="https://codepen.io/tran-tu-the-flexboxer"
            target="_blank"
            data-toggle="tooltip"
            title="codepen"
          >
            <i class="fa fa-codepen"></i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default ProfileContent;
