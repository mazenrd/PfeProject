import React from "react";

import Story from "shared/components/Story";
import UserStoryToolBar from "shared/components/ToolBar/UserStoryToolBar";
import { task_sections } from "utils/mocks";
import "./styles.scss";

const UserStory = () => {
  return (
    <div className="userStory-container">
      <UserStoryToolBar />
      <Story sections={task_sections} />
    </div>
  );
};

export default UserStory;
