import { useState, useEffect } from "react";

const FriendStatus = (props) => {
  const [isOnline, setIsOnline] = useState(null);

  function handleStatusChange(status) {
    setIsOnline(status.isOnline);
  }

  useEffect(() => {
    chatApi.subscribeToFriendsStatus(props.friend.id, handleStatusChange);

    return () => {
      ChatApI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
    };
  });

  if (isOnline === null) {
    return 'Loading...'
  }
  return isOnline ? 'online' : 'offline';
}