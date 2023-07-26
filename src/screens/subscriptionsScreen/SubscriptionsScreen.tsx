import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import HorizontalVideo from "../../components/horizontalVideo/HorizontalVideo";
import HorizontalVideoSkeleton from "../../components/skeleton/horizontalVideoSkeleton/HorizontalVideoSkeleton";
import { getSubscribedChannels } from "../../redux/feature/channelSlice";
import { RootState, useAppDispatch } from "../../redux/store/store";

const SubscriptionsScreen = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getSubscribedChannels());
  }, [dispatch]);

  const { loading, videos } = useSelector(
    (state: RootState) => state.channelSubscriptions
  );
  return (
    <Container fluid>
      {!loading ? (
        videos?.map((video) => (
          <HorizontalVideo
            video={video}
            key={
              typeof video.id === "string"
                ? video.id
                : "videoId" in video.id
                ? video.id.videoId
                : video.id.channelId
            }
            subscriptionsScreen
          />
        ))
      ) : (
        <HorizontalVideoSkeleton />
      )}
    </Container>
  );
};

export default SubscriptionsScreen;
