import React from "react";
import avatar from "../../assets/default-avatar.png";
import moment from "moment";
import styles from "./Comment.module.css";
import { CommentProps } from "../../utils/types";

const Comment = ({ comment }: CommentProps) => {
  const { authorDisplayName, authorProfileImageUrl, textDisplay, publishedAt } =
    comment;
  return (
    <div className={`${styles.comment} d-flex`}>
      <img
        src={authorProfileImageUrl ? authorProfileImageUrl : avatar}
        alt="avatar"
        className={`${styles.avatar} rounded-circle me-3`}
      />
      <div>
        <p className={`${styles.userName} mb-1`}>
          {authorDisplayName} • {moment(publishedAt).fromNow()}
        </p>
        <p className={styles.commentText}>{textDisplay}</p>
      </div>
    </div>
  );
};

export default Comment;
