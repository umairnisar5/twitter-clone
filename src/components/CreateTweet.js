import React, { useState } from "react";
import {
  FaRegImage,
  FaRegListAlt,
  FaRegSmile,
  FaCalendarCheck,
} from "react-icons/fa";
const CreateTweet = () => {

  const [name, setName] = useState("");

  function tweet(e) {
    setName(e.target.value);
  }

  function tweetSubmit() {
    alert("Your Tweet is " + name);
  }

  return (
    <div className="create">
      <div className="create__first">
        <div className="create__img">
          <img src="/images/profile.jpeg" alt="profile img" />
        </div>
        <div className="create__input">
          <input
            type="text"
            className="create__control"
            placeholder="What's happing?"
            onChange={tweet}
          />
        </div>
      </div>
      <div className="create__second">
        <div className="create__icons">
          <FaRegImage className="ic" />
          <FaRegListAlt className="ic" />
          <FaRegSmile className="ic" />
          <FaCalendarCheck className="ic" />
        </div>
        <div className="create__btn">
          <a href="" onClick={tweetSubmit}>Tweet</a>
        </div>
      </div>
    </div>
  );
};

export default CreateTweet;
