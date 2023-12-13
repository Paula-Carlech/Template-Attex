import React, { useCallback, useEffect, useRef, useState } from 'react'
import { Button, Card, Col, Dropdown, OverlayTrigger, Row, Tooltip } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import * as yup from "yup";

// images
import avatar1 from '../../../assets/images/users/avatar-1.jpg'
import { ChatMessage, ChatUser, messages } from './data'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import SimpleBar from 'simplebar-react';
import { FormInput } from '../../../components';

const UserMessage = ({
  message,
  toUser,
}: {
  message: ChatMessage;
  toUser: ChatUser;
}) => {
  return (
    <li className={`clearfix ${(message.from.id === toUser.id) ? 'odd' : ''}`}>
      <div className="chat-avatar">
        <img src={message.from.avatar} className="rounded" alt={message.from.name} />
        <i>{message.sendOn}</i>
      </div>
      <div className="conversation-text">
        {message.message.type === 'text' && (
          <div className="ctext-wrap">
            <i>{message.from.name}</i>
            <p>
              {message.message.value}
            </p>
          </div>
        )}
        {message.message.type === 'file' && (
          <Card className="mt-2 mb-1 shadow-none border text-start">
            <div className="p-2">
              <Row className="align-items-center">
                <Col className='col-auto'>
                  <div className="avatar-sm">
                    <span className="avatar-title bg-primary rounded">
                      .ZIP
                    </span>
                  </div>
                </Col>
                <Col className="ps-0">
                  <Link to="#" className="text-muted fw-bold">
                    {message.message.value.file}
                  </Link>
                  <p className="mb-0 text-muted">
                    {message.message.value.size}
                  </p>
                </Col>
                <Col className='col-auto'>
                  <Link to="#" className="btn btn-link btn-lg text-muted">
                    <i className="ri-download-2-line"/>
                  </Link>
                </Col>
              </Row>
            </div>
          </Card>
        )}
      </div>
      <Dropdown
        className="conversation-actions"
        align={message.from.id === toUser.id ? 'start' : 'end'}
      >
        <Dropdown.Toggle as='button' className="btn btn-sm btn-link fs-18 arrow-none" aria-expanded="false">
          <i className="ri-more-2-fill" />
        </Dropdown.Toggle>
        <Dropdown.Menu align='end'>
          <Dropdown.Item>Copy Message</Dropdown.Item>
          <Dropdown.Item>Edit</Dropdown.Item>
          <Dropdown.Item>Delete</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </li>
  )
}

interface ChatHeaderOptions {
  title: string;
  icon: string;
};

const chatHeaderOptions: ChatHeaderOptions[] = [
  {
    title: 'Voice Call',
    icon: 'ri-phone-line',
  },
  {
    title: 'Video Call',
    icon: 'ri-vidicon-line',
  },
  {
    title: 'Add Users',
    icon: 'ri-group-line',
  },
  {
    title: 'Delete Chat',
    icon: 'ri-delete-bin-line',
  },
]

interface ChatAreaProps {
  selectedUser: ChatUser;
}

const ChatArea = ({ selectedUser }: ChatAreaProps) => {
  const [userMessages, setUserMessages] = useState<ChatMessage[]>([]);

  const [toUser] = useState<ChatUser>({
    id: 9,
    name: "Tosha Minner",
    avatar: avatar1,
    email: "support@coderthemes.com",
    phone: "+1 456 9595 9594",
    location: "California, USA",
    languages: "English, German, Spanish",
    groups: "Work, Friends",
  });

  /*
   *  Fetches the messages for selected user
   */
  const getMessagesForUser = useCallback(() => {
    if (selectedUser) {
      setTimeout(() => {
        setUserMessages(
          [...messages].filter(
            (m) =>
              (m.to.id === toUser.id && m.from.id === selectedUser.id) ||
              (toUser.id === m.from.id && m.to.id === selectedUser.id)
          )
        );
      }, 750);
    }
  }, [selectedUser, toUser]);

  useEffect(() => {
    getMessagesForUser();
  }, [getMessagesForUser]);

  /*
   * form validation schema
   */
  const schemaResolver = yupResolver(
    yup.object().shape({
      newMessage: yup.string().required("Please enter your messsage"),
    })
  );

  /*
   * form methods
   */
  const methods = useForm({ resolver: schemaResolver });
  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
    reset,
  } = methods;

  /**
   * sends the chat message
   */
  const sendChatMessage = (values: { newMessage?: string }) => {
    let newUserMessages = [...userMessages];
    newUserMessages.push({
      id: userMessages.length + 1,
      from: toUser,
      to: selectedUser,
      message: { type: "text", value: values.newMessage },
      sendOn: new Date().getHours() + ":" + new Date().getMinutes(),
    });
    setTimeout(() => {
      let otherNewMessages = [...newUserMessages]
      otherNewMessages.push({
        id: userMessages.length + 1,
        from: selectedUser,
        to: toUser,
        message: { type: "text", value: values.newMessage },
        sendOn: new Date().getHours() + ":" + new Date().getMinutes(),
      })
      setUserMessages(otherNewMessages);
    }, 1000);
    setUserMessages(newUserMessages);
    reset();
  };

  const AlwaysScrollToBottom = () => {
    const elementRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
      if (elementRef && elementRef.current && elementRef.current.scrollIntoView) {
        elementRef.current.scrollIntoView({ behavior: 'smooth' })
      }
    })
    return <div ref={elementRef} />
  }

  return (
    <>
      <Card>
        <Card.Body className="py-2 px-3 border-bottom border-light">
          <Row className="justify-content-between py-1">
            <Col sm={7}>
              <div className="d-flex align-items-start">
                <img src={selectedUser.avatar} className="me-2 rounded-circle" height="36" alt={selectedUser.name} />
                <div>
                  <h5 className="my-0 font-15">
                    <Link to="#" className="text-reset">{selectedUser.name}</Link>
                  </h5>
                  <p className="mt-1 mb-0 text-muted fs-12">
                    <small className="ri-checkbox-blank-circle-fill text-danger"></small> Offline
                  </p>
                </div>
              </div>
            </Col>
            <Col className='col-auto'>
              <div id="tooltips-container">
                {(chatHeaderOptions || []).map((item, idx) => {
                  return (
                    <OverlayTrigger
                      key={idx}
                      placement='top'
                      overlay={<Tooltip id=''>{item.title}</Tooltip>}
                    >
                      <Link to="#" className="text-reset fs-20 p-1 d-inline-block">
                        <i className={item.icon} data-bs-container="#tooltips-container" data-bs-toggle="tooltip"/>
                      </Link>
                    </OverlayTrigger>
                  )
                })}
              </div>
            </Col>
          </Row>
        </Card.Body>

        <Card.Body className="p-0">
          <SimpleBar style={{ maxHeight: 533 }}>
            <ul className="conversation-list p-3">
              {(userMessages || []).map((message, idx) => {
                return (
                  <UserMessage
                    key={idx}
                    message={message}
                    toUser={toUser}
                  />
                )
              })}
              <AlwaysScrollToBottom />
            </ul>
          </SimpleBar>

          <Row>
            <Col>
              <div className="bg-light p-3 rounded">
                <form
                  className="needs-validation"
                  name="chat-form"
                  id="chat-form"
                  noValidate
                  onSubmit={handleSubmit(sendChatMessage)}
                >
                  <Row>
                    <Col className="mb-2 mb-sm-0">
                      <FormInput
                        type="text"
                        name="newMessage"
                        className="form-control border-0"
                        placeholder="Enter your text"
                        register={register}
                        key='newMessage'
                        errors={errors}
                        control={control}
                      />
                      <div className="invalid-feedback">
                        Please enter your messsage
                      </div>
                    </Col>
                    <Col sm='auto' >
                      <div className="btn-group">
                        <Button variant='light' as='a'><i className="ri-attachment-2"/></Button>
                        <Button variant='success' type="submit" className="chat-send w-100">
                          <i className="ri-send-plane-2-line" />
                        </Button>
                      </div>
                    </Col>
                  </Row>
                </form>
              </div>
            </Col>
          </Row>
        </Card.Body>
      </Card >
    </>
  )
}

export default ChatArea