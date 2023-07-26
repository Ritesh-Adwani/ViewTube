import React from "react";
import styles from "./VideoSkeleton.module.css";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { useTheme } from "@mui/material";

const VideoSkeleton = () => {
  const theme = useTheme();
  const mode = theme.palette.mode;

  return (
    <div className="mb-2 p-1">
      <SkeletonTheme
        baseColor={mode === "dark" ? "#6c6e70" : ""}
        highlightColor={mode === "dark" ? "#7c7f83" : ""}
      >
        <div className="mb-1">
          <Skeleton className={styles.thumbnail} />
        </div>

        <div className="d-flex mt-2">
          <div className={styles.channelIcon}>
            <Skeleton circle className={styles.channelIcon} />
          </div>
          <div className={`d-flex flex-column ms-2 w-100`}>
            <Skeleton className={styles.details} />
            <Skeleton className={styles.details} />
            <Skeleton className={styles.details} />
          </div>
        </div>
      </SkeletonTheme>
    </div>
  );
};

export default VideoSkeleton;
