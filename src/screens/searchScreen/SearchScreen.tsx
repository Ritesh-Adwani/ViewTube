import React, { useEffect } from "react";
import { Col, Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import HorizontalVideo from "../../components/horizontalVideo/HorizontalVideo";
import HorizontalVideoSkeleton from "../../components/skeleton/horizontalVideoSkeleton/HorizontalVideoSkeleton";
import { getVideosBySearch } from "../../redux/feature/videoSlice";
import { RootState, useAppDispatch } from "../../redux/store/store";

const SearchScreen = () => {
  const { query } = useParams<{ query: string }>();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (query) dispatch(getVideosBySearch(query));
  }, [dispatch, query]);

  const { videos, loading } = useSelector(
    (state: RootState) => state.searchVideos
  );

  return (
    <Container>
      {!loading
        ? videos.map((video) => (
            <HorizontalVideo
              video={video}
              key={
                typeof video.id === "string"
                  ? video.id
                  : "videoId" in video.id
                  ? video.id.videoId
                  : video.id.channelId
              }
              searchScreen
            />
          ))
        : [...Array(15)].map((_, index) => (
            <Col lg={3} md={4} key={index} className="my-3">
              <HorizontalVideoSkeleton />
            </Col>
          ))}
    </Container>
  );
};

export default SearchScreen;
