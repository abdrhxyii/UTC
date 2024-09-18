"use client";
import React from 'react';
import { Row, Col, Card, Statistic } from 'antd';

const DashboardStats = () => (
  <Row gutter={16}>
    <Col span={12}>
      <Card>
        <Statistic title="Total Earnings" value={112893} precision={2} prefix="$" />
      </Card>
    </Col>
    <Col span={12}>
      <Card>
        <Statistic title="Visitors" value={8841} precision={0} />
      </Card>
    </Col>
  </Row>
);

export default DashboardStats;
