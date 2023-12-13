import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'

// components
import PageBreadcrumb from '../../../components/PageBreadcrumb'
import ChatUsers from './ChatUsers'
import ChatArea from './ChatArea'

// dummy data
import { ChatUser, users } from './data'
import PageTitle from '../../../components/PageTitle'

const ChatApp = () => {
  const [selectedUser, setSelectedUser] = useState<ChatUser>(users[1]);

  /**
   * On user change
   */
  const onUserChange = (user: ChatUser) => {
    setSelectedUser(user);
  };

  return (
    <>
      <PageTitle pageTitle='Chat' />
      <PageBreadcrumb
        breadCrumbItems={[
          { label: 'Apps', path: '/apps/chat' },
          { label: "Chat", path: "/apps/chat", active: true },
        ]}
        title={"Chat"}
      />

      <Row>
        <Col xl={3} lg={4}>
          <ChatUsers onUserSelect={onUserChange} />
        </Col>
        <Col xl={9} lg={8}>
          <ChatArea selectedUser={selectedUser} />
        </Col>
      </Row>
    </>
  )
}

export default ChatApp