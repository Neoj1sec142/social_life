import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Followers = ({ userId }) => {
  const [followers, setFollowers] = useState([]);

  useEffect(() => {
    const fetchFollowers = async () => {
      const res = await axios.get(`/api/users/${userId}/followers`);
      setFollowers(res.data);
    };
    fetchFollowers();
  }, [userId]);

  const handleFollow = async (followeeId) => {
    await axios.post(`/api/users/${userId}/follow`, { followeeId });
    const res = await axios.get(`/api/users/${userId}/followers`);
    setFollowers(res.data);
  };

  const handleUnfollow = async (followeeId) => {
    await axios.delete(`/api/users/${userId}/follow/${followeeId}`);
    const res = await axios.get(`/api/users/${userId}/followers`);
    setFollowers(res.data);
  };

  return (
    <ul>
      {followers.map((follower) => (
        <li key={follower.id}>
          {follower.username}
          <button onClick={() => handleFollow(follower.id)}>Follow</button>
          <button onClick={() => handleUnfollow(follower.id)}>Unfollow</button>
        </li>
      ))}
    </ul>
  );
};

export default Followers;
