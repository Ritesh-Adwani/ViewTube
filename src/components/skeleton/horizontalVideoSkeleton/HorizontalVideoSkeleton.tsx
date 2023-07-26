import { useTheme } from "@mui/material";
import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import styles from "./HorizontalVideoSkeleton.module.css";

const HorizontalVideoSkeleton = () => {
  const theme = useTheme();
  const mode = theme.palette.mode;

  return (
    <SkeletonTheme
      baseColor={mode === "dark" ? "#6c6e70" : ""}
      highlightColor={mode === "dark" ? "#7c7f83" : ""}
    >
      <div className="d-flex flex-column flex-sm-row">
        <Skeleton className={styles.thumbnail} />
        <div className="d-flex flex-column ms-sm-3">
          <Skeleton className={styles.title} />
          <Skeleton className={styles.stats} />
          <Skeleton className={styles.description} />
          <div className="d-flex align-items-center mt-1">
            <Skeleton circle className={styles.channelIcon} />
            <Skeleton className={styles.channelName} />
          </div>
        </div>
      </div>
    </SkeletonTheme>
  );
};

export default HorizontalVideoSkeleton;
