import React, { useState, useEffect } from "react";

const FriendStatusWithCounter =(props) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  const [isOnline, setIsOnline] = useState(null);
  useEffect(() => {
    ChatApi.subscribeToFriendStatus(props.friend.id, handleStatusChange);
    return () => {
      ChatApi.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
    };
  });

  function handleStatusChange(status) {
    setIsOnline(status.isOnline);
  }
}