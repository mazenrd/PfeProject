import React from "react";

import { Col, Row } from "antd";
import DashboardToolBar from "shared/components/ToolBar/DashboardToolBar";
import {
  briefData,
  clearedFunctionalityData,
  codeSanityData,
  dataTrackingData,
  deliveriesData,
  myTeamData,
  rendersData,
  repositoryData,
  testsData,
  userStoryData,
  uxDesignData,
} from "utils/mocks";

import "./styles.scss";
import Brief from "./Brief";
import Clearedfunctionality from "./ClearedFunctionality";
import CodeSanity from "./CodeSanity";
import DataTracking from "./DataTracking";
import Deliveries from "./Deliveries";
import MyTeam from "./MyTeam";
import Renders from "./Renders";
import Repository from "./Repository";
import Tests from "./Tests";
import UserStory from "./UserStory";
import UxDesign from "./UxDesign";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <DashboardToolBar />
      <div className="cards-container">
        <Row gutter={[16, 16]}>
          <Col lg={8} md={12} xs={24}>
            <Brief {...briefData} />
          </Col>
          <Col lg={8} md={12} xs={24}>
            <UxDesign {...uxDesignData} />
          </Col>
          <Col lg={8} md={12} xs={24}>
            <UserStory {...userStoryData} />
          </Col>
          <Col lg={8} md={12} xs={24}>
            <Renders {...rendersData} />
          </Col>
          <Col lg={8} md={12} xs={24}>
            <Tests {...testsData} />
          </Col>
          <Col lg={8} md={12} xs={24}>
            <Deliveries {...deliveriesData} />
          </Col>
          <Col lg={8} md={12} xs={24}>
            <Clearedfunctionality {...clearedFunctionalityData} />
          </Col>
          <Col lg={8} md={12} xs={24}>
            <CodeSanity {...codeSanityData} />
          </Col>
          <Col lg={8} md={12} xs={24}>
            <Repository {...repositoryData.gitlab} />
          </Col>
          <Col flex="auto">
            <DataTracking {...dataTrackingData} />
          </Col>
          <Col flex="auto">
            <MyTeam {...myTeamData} />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Dashboard;
