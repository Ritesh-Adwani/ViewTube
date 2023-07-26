import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import VideoSkeleton from "../../components/skeleton/videoSkeleton/VideoSkeleton";
import Video from "../../components/video/Video";
import { getLikedVideos } from "../../redux/feature/videoSlice";
import { RootState, useAppDispatch } from "../../redux/store/store";

const LikedVideosScreen = () => {
  const dispatch = useAppDispatch();
  const { videos, loading } = useSelector(
    (state: RootState) => state.likedVideos
  );

  useEffect(() => {
    dispatch(getLikedVideos());
  }, [dispatch]);
  return (
    <>
      <Container>
        <Row>
          {!loading ? (
            videos?.map((video) => (
              <Col
                lg={3}
                md={4}
                key={
                  typeof video.id === "string"
                    ? video.id
                    : "videoId" in video.id
                    ? video.id.videoId
                    : video.id.channelId
                }
              >
                <Video video={video} />
              </Col>
            ))
          ) : videos?.length === 0 && !loading ? (
            <h2>No videos found</h2>
          ) : (
            [...Array(20)].map((_, index) => (
              <Col lg={3} md={4} key={index}>
                <VideoSkeleton />
              </Col>
            ))
          )}
        </Row>
      </Container>
    </>
  );
};

export default LikedVideosScreen;
