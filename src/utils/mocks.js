import { Android, Apple, Gitlab, Microsoft, Programming } from "assets";

import "./styles.scss";
import { PATHS, RENDER_TYPE, STORY_STATUS, TASK_PRIORITY } from "./constants";

export const briefData = {
  count: 15,
  maxCount: 30,
};
export const uxDesignData = {
  count: 25,
  maxCount: 30,
};
export const userStoryData = {
  link: PATHS.PRIVATE.USERSTORY,
  count: 15,
  maxCount: 30,
};
export const rendersData = {
  link: PATHS.PRIVATE.RENDERS,
};
export const testsData = {
  done: "2 Done",
  warning: "2 Warning",
  error: "7 Error",
};
export const deliveriesData = {
  date: "Mar 25, 2022",
  percentage: 50,
};
export const clearedFunctionalityData = {
  count: 20,
};
export const codeSanityData = {
  percent: 80,
};
export const repositoryData = {
  gitlab: {
    name: "Gitlab",
    icon: Gitlab,
    branch: "10 branch",
    mergeRequest: "6 Merge Request",
    pipeline: "2 Pipeline",
  },
  bitbucket: {
    name: "Bitbucket",
    branch: "10 branch",
    mergeRequest: "6 Merge Request",
    pipeline: "2 Pipeline",
  },
};

export const myTeamData = [
  {
    image: "https://joeschmoe.io/api/v1/random",
  },
  {
    image: "https://joeschmoe.io/api/v1/random",
  },
  {
    image: "https://joeschmoe.io/api/v1/random",
  },
  {
    image: "https://joeschmoe.io/api/v1/random",
  },
];
export const dataTrackingData = {
  kpi: 17.8,
};

export const task_sections = [
  {
    status: STORY_STATUS.COMPLETED,
    tasks: [
      {
        title: "task1111",
        assignee: {
          name: "name1",
          url: "https://illumesense.com/resources/illumesense/style/img/website/profile-picture-blanks/male-profile.jpg",
        },
        dueDate: "date",
        priority: TASK_PRIORITY.HIGH,
      },
      {
        title: "task111",
        assignee: {
          name: "name1",
          url: "https://illumesense.com/resources/illumesense/style/img/website/profile-picture-blanks/male-profile.jpg",
        },
        dueDate: "date",
        priority: TASK_PRIORITY.HIGH,
      },
    ],
  },
  {
    status: STORY_STATUS.REVIEW,
    tasks: [
      {
        title: "task1",
        assignee: {
          name: "name2",
          url: "https://illumesense.com/resources/illumesense/style/img/website/profile-picture-blanks/male-profile.jpg",
        },
        dueDate: "date",
        priority: TASK_PRIORITY.HIGH,
      },
      {
        title: "task",
        assignee: {
          name: "name3",
          url: "https://illumesense.com/resources/illumesense/style/img/website/profile-picture-blanks/male-profile.jpg",
        },
        dueDate: "date",
        priority: TASK_PRIORITY.MEDIUM,
      },
    ],
  },
  {
    status: STORY_STATUS.READY,
    tasks: [
      {
        title: "task3",
        assignee: {
          name: "name",
          url: "https://illumesense.com/resources/illumesense/style/img/website/profile-picture-blanks/male-profile.jpg",
        },
        dueDate: "date",
        priority: TASK_PRIORITY.LOW,
      },
    ],
  },
];

export const items = [
  {
    text: RENDER_TYPE.ANDROID,
    icon: Android,
    link: "/renders/android",
  },
  {
    text: RENDER_TYPE.IOS,
    icon: Apple,
    link: "/renders/ios",
  },
  {
    text: RENDER_TYPE.MICROSOFT,
    icon: Microsoft,
    link: "/renders/microsoft",
  },
  {
    text: RENDER_TYPE.WEB_RESPONSIVE,
    icon: Programming,
    link: "/renders/web_responsive",
  },
];

export const renders = {
  [RENDER_TYPE.ANDROID]: [
    {
      title: "GALAXY10",
      screen:
        "https://wmstatic.global.ssl.fastly.net/ml/7190521-f-8b0b0fae-a75a-4b26-a75e-b5f86369e400.png?width=422&height=916",
    },
    {
      title: "GALAXY10",
      screen:
        "https://wmstatic.global.ssl.fastly.net/ml/7190521-f-8b0b0fae-a75a-4b26-a75e-b5f86369e400.png?width=422&height=916",
    },
    {
      title: "GALAXY10",
      screen:
        "https://wmstatic.global.ssl.fastly.net/ml/7190521-f-8b0b0fae-a75a-4b26-a75e-b5f86369e400.png?width=422&height=916",
    },
  ],
  [RENDER_TYPE.IOS]: [
    {
      title: "XSMAX",
      screen:
        "https://wmstatic.global.ssl.fastly.net/ml/7190521-f-8b0b0fae-a75a-4b26-a75e-b5f86369e400.png?width=422&height=916",
    },
    {
      title: "XS",
      screen:
        "https://wmstatic.global.ssl.fastly.net/ml/7190521-f-8b0b0fae-a75a-4b26-a75e-b5f86369e400.png?width=422&height=916",
    },
    {
      title: "X",
      screen:
        "https://wmstatic.global.ssl.fastly.net/ml/7190521-f-8b0b0fae-a75a-4b26-a75e-b5f86369e400.png?width=422&height=916",
    },
  ],
  [RENDER_TYPE.MICROSOFT]: [
    {
      title: "GALAXY10",
      screen:
        "https://wmstatic.global.ssl.fastly.net/ml/7190521-f-8b0b0fae-a75a-4b26-a75e-b5f86369e400.png?width=422&height=916",
    },
    {
      title: "GALAXY10",
      screen:
        "https://wmstatic.global.ssl.fastly.net/ml/7190521-f-8b0b0fae-a75a-4b26-a75e-b5f86369e400.png?width=422&height=916",
    },
    {
      title: "GALAXY10",
      screen:
        "https://wmstatic.global.ssl.fastly.net/ml/7190521-f-8b0b0fae-a75a-4b26-a75e-b5f86369e400.png?width=422&height=916",
    },
  ],
  [RENDER_TYPE.WEB_RESPONSIVE]: [
    {
      title: "GALAXY10",
      screen:
        "https://wmstatic.global.ssl.fastly.net/ml/7190521-f-8b0b0fae-a75a-4b26-a75e-b5f86369e400.png?width=422&height=916",
    },
    {
      title: "GALAXY10",
      screen:
        "https://wmstatic.global.ssl.fastly.net/ml/7190521-f-8b0b0fae-a75a-4b26-a75e-b5f86369e400.png?width=422&height=916",
    },
    {
      title: "GALAXY10",
      screen:
        "https://wmstatic.global.ssl.fastly.net/ml/7190521-f-8b0b0fae-a75a-4b26-a75e-b5f86369e400.png?width=422&height=916",
    },
  ],
};
export const Lists_Titles = [
  {
    title: "Brief",
  },
  {
    title: "UX Design",
  },
  {
    title: "UX Validation",
  },
  {
    title: "Collaborating",
  },
  {
    title: "Close the project",
  },
];
