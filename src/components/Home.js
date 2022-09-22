import {
  Stack,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  LinearProgress,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { TwitterTimelineEmbed } from "react-twitter-embed";

const Home = () => {
  const [profile, setProfile] = useState("kilicdarogluk");
  const [type, setType] = useState("profile");

  useEffect(() => {
    console.log(profile, type);
  }, [profile, type]);

  const handleProfile = (event) => {
    setProfile(event.target.value);
  };

  const handleType = (event) => {
    setType(event.target.value);
  };

  return (
    <>
      <Stack
        sx={{
          width: "50%",
        }}
        spacing={2}
      >
        <Stack direction="row" spacing={2}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Profile</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={profile}
              label="Profile"
              onChange={handleProfile}
            >
              <MenuItem value={"kilicdarogluk"}>KK</MenuItem>
              <MenuItem value={"alibabacan"}>babacan</MenuItem>
              <MenuItem value={"RTErdogan"}>RTE</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Type</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={type}
              label="Type"
              onChange={handleType}
            >
              <MenuItem value={"profile"}>Profile</MenuItem>
              <MenuItem value={"likes"}>Likes</MenuItem>
            </Select>
          </FormControl>
        </Stack>
        <TwitterTimelineEmbed
          placeholder={<LinearProgress />}
          key={[profile, type]}
          sourceType={type}
          screenName={profile}
          // options={{ width: "400", height: "600" }}
          tweetLimit={500}
        ></TwitterTimelineEmbed>
      </Stack>
    </>
  );
};

export default Home;
