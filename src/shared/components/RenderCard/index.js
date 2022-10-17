import React, { useState } from "react";

import { Col } from "antd";
import PropTypes from "prop-types";
import "./styles.scss";
import { FaThumbsUp } from "react-icons/fa";
import { FaThumbsDown } from "react-icons/fa";

const l = {
  liked: "liked",
  disliked: "disliked",
};

const RenderCard = ({ item }) => {
  const [likeState, setLikeState] = useState();

  return (
    <Col lg={8} md={12} xs={24}>
      <div className="render_card">
        <div className="render_card-header">
          <p className="render_card-header-title">{item.title}</p>
        </div>
        <div className="render_card-body">
          <img className="screen" src={item.screen} />
        </div>
        <div className="render_card-footer">
          <FaThumbsUp
            onClick={() => setLikeState(l.liked)}
            color={likeState === l.liked ? "#A3A1FB" : "gray"}
            size={23}
            className="BsHandThumbsUp"
          />
          <FaThumbsDown
            onClick={() => setLikeState(l.disliked)}
            color={likeState === l.disliked ? "red" : "gray"}
            size={23}
            className="BsHandThumbsDown"
          />
        </div>
      </div>
    </Col>
  );
};
RenderCard.propTypes = {
  item: PropTypes.object,
};
export default RenderCard;
