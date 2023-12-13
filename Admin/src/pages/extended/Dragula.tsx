import { useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { ReactSortable } from "react-sortablejs";

// images
import avatar1 from '../../assets/images/users/avatar-1.jpg';
import avatar2 from '../../assets/images/users/avatar-2.jpg';
import avatar3 from '../../assets/images/users/avatar-3.jpg';
import avatar4 from '../../assets/images/users/avatar-4.jpg';
import avatar5 from '../../assets/images/users/avatar-5.jpg';
import avatar7 from '../../assets/images/users/avatar-7.jpg';

// component
import PageTitle from '../../components/PageTitle';
import PageBreadcrumb from '../../components/PageBreadcrumb';

interface ItemType {
  id: number;
  variant: string;
  class?: string;
}

interface TeamMemberType {
  id: number;
  name: string;
  avatar: string;
  position: string;
  desc?: string;
}

const MovableCard = ({ item }: { item: ItemType }) => {
  return (
    <Card className={`mb-0 mt-3 text-white bg-${item.variant}`}>
      <Card.Body>
        <blockquote className="card-bodyquote mb-0">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
            erat a ante.</p>
          <footer>Someone famous in <cite title="Source Title">Source Title</cite>
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
  )
}

const MovableCard2 = ({ item }: { item: TeamMemberType }) => {
  return (
    <Card className="mb-0 mt-2">
      <Card.Body className="p-3">
        <div className="d-flex align-items-start">
          <img src={item.avatar} alt="avatar" className="me-3 d-none d-sm-block avatar-sm rounded-circle" />
          <div className="w-100 overflow-hidden">
            <h5 className="mb-1 mt-0">{item.name}</h5>
            <p>{item.position}</p>
            <p className="mb-0 text-muted">
              <span className="fst-italic"><b>"</b>{item.desc} </span>
            </p>
          </div>
        </div>
      </Card.Body>
    </Card>
  )
}

const MovableCard3 = ({ item }: { item: TeamMemberType }) => {
  return (
    <Card className="mb-0 mt-2">
      <Card.Body className="p-3">
        <div className="d-flex align-items-start">
          <img src={item.avatar} alt="avatar" className="me-3 d-none d-sm-block avatar-sm rounded-circle" />
          <div className="w-100 overflow-hidden">
            <h5 className="mb-1 mt-1">{item.name}</h5>
            <p className="mb-0"> {item.position} </p>
          </div>
          <span className="dragula-handle" />
        </div>
      </Card.Body>
    </Card>
  )
}

const Dragula = () => {

  const [items, setItems] = useState<ItemType[]>([
    {
      id: 1,
      variant: 'primary',
    },
    {
      id: 2,
      variant: 'secondary',
    },
    {
      id: 3,
      variant: 'success',
    },
    {
      id: 4,
      variant: 'info',
      class: 'text-xs-center'
    },
    {
      id: 5,
      variant: 'warning',
      class: 'text-xs-center'
    },
    {
      id: 6,
      variant: 'danger',
      class: 'text-xs-center'
    },
  ]);

  const [team1, setTeam1] = useState<TeamMemberType[]>([
    {
      id: 1,
      name: "Louis K. Bond",
      avatar: avatar7,
      position: "Founder & CEO",
      desc: "Disrupt pork belly poutine, asymmetrical tousled succulents selfies. You probably haven't heard of them tattooed master cleanse live-edge keffiyeh.",
    },
    {
      id: 2,
      name: "Dennis N. Cloutier",
      avatar: avatar1,
      position: "Software Engineer",
      desc: "Disrupt pork belly poutine, asymmetrical tousled succulents selfies. You probably haven't heard of them tattooed master cleanse live-edge keffiyeh.",
    },
    {
      id: 3,
      name: "Susan J. Sander",
      avatar: avatar2,
      position: "Web Designer",
      desc: "Disrupt pork belly poutine, asymmetrical tousled succulents selfies. You probably haven't heard of them tattooed master cleanse live-edge keffiyeh.",
    },
  ]);

  const [team2, setTeam2] = useState<TeamMemberType[]>([
    {
      id: 1,
      name: "James M. Short",
      avatar: avatar3,
      position: "Web Developer",
      desc: "Disrupt pork belly poutine, asymmetrical tousled succulents selfies. You probably haven't heard of them tattooed master cleanse live-edge keffiyeh.",
    },
    {
      id: 2,
      name: "Gabriel J. Snyder",
      avatar: avatar4,
      position: "Business Analyst",
      desc: "Disrupt pork belly poutine, asymmetrical tousled succulents selfies. You probably haven't heard of them tattooed master cleanse live-edge keffiyeh.",
    },
    {
      id: 3,
      name: "Louie C. Mason",
      avatar: avatar5,
      position: "Human Resources",
      desc: "Disrupt pork belly poutine, asymmetrical tousled succulents selfies. You probably haven't heard of them tattooed master cleanse live-edge keffiyeh.",
    },
  ]);

  const [part1, setPart1] = useState<TeamMemberType[]>([
    {
      id: 1,
      name: "Louis K. Bond",
      avatar: avatar7,
      position: "Founder & CEO",
    },
    {
      id: 2,
      name: "Dennis N. Cloutier",
      avatar: avatar1,
      position: "Software Engineer",
    },
    {
      id: 3,
      name: "Susan J. Sander",
      avatar: avatar2,
      position: "Web Designer",
    },
  ]);

  const [part2, setPart2] = useState<TeamMemberType[]>([
    {
      id: 1,
      name: "James M. Short",
      avatar: avatar3,
      position: "Web Developer",
    },
    {
      id: 2,
      name: "Gabriel J. Snyder",
      avatar: avatar4,
      position: "Business Analyst",
    },
    {
      id: 3,
      name: "Louie C. Mason",
      avatar: avatar5,
      position: "Human Resources",
    },
  ]);


  return (
    <>
      <PageTitle pageTitle='Dragula' />
      <PageBreadcrumb
        breadCrumbItems={[
          { label: 'Extended UI', path: '/extended-ui/dragula' },
          { label: "Dragula", path: "/extended-ui/dragula", active: true },
        ]}
        title={"Dragula"}
      />

      <Row>
        <Col>
          <Card>
            <Card.Body>
              <h4 className="header-title">Simple Drag and Drop Example</h4>
              <p className="text-muted fs-14">
                Just specify the data attribute <code>data-plugin='dragula'</code> to have drag and drop support in your container.
              </p>

              <ReactSortable className='row' easing='ease' list={items} setList={setItems}>
                {(items || []).map((item, idx) => {
                  return (
                    <Col md={4} key={idx} >
                      <MovableCard item={item} />
                    </Col>
                  )
                })}
              </ReactSortable>

            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col>
          <Card>
            <Card.Body>
              <h4 className="header-title">Move stuff between containers</h4>
              <p className="text-muted fs-14 mb-3">
                Just specify the data attribute&nbsp;
                <code>data-plugin='dragula'</code> and&nbsp;
                <code>data-containers='["first-container-id", "second-container-id"]'</code>.
              </p>

              <Row data-plugin="dragula" data-containers='["company-list-left", "company-list-right"]'>
                <div className="col-md-6">
                  <div className="bg-dragula p-2 p-lg-4">
                    <h5 className="mt-0">Part 1</h5>

                    <ReactSortable
                      group='teamList'
                      list={team1}
                      setList={setTeam1}
                      className="py-2"
                    >
                      {(team1 || []).map((item, idx) => {
                        return (
                          <MovableCard2 key={idx} item={item} />
                        )
                      })}
                    </ReactSortable>
                  </div>
                </div>

                <Col md={6}>
                  <div className="bg-dragula p-2 p-lg-4">
                    <h5 className="mt-0">Part 2</h5>

                    <ReactSortable
                      group='teamList'
                      list={team2}
                      setList={setTeam2}
                      className="py-2"
                    >
                      {(team2 || []).map((item, idx) => {
                        return (
                          <MovableCard2 key={idx} item={item} />
                        )
                      })}
                    </ReactSortable>

                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col>
          <Card>
            <Card.Body>
              <h4 className="header-title">Move stuff between containers using handle</h4>
              <p className="text-muted fs-14 mb-3">
                Just specify the data attribute <code>data-plugin='dragula'</code>, <code>data-containers='["first-container-id", "second-container-id"]'</code> and <code>data-handle-class='dragula-handle'</code>.
              </p>

              <Row>
                <Col md={6} >
                  <div className="bg-dragula p-2 p-lg-4">
                    <h5 className="mt-0">Part 1</h5>

                    <ReactSortable
                      group='teamList2'
                      handle='.dragula-handle'
                      list={part1}
                      setList={setPart1}
                      className='py-2'
                    >
                      {(part1 || []).map((item, idx) => {
                        return (
                          <MovableCard3 key={idx} item={item} />
                        )
                      })}
                    </ReactSortable>

                  </div>
                </Col>

                <Col md={6}>
                  <div className="bg-dragula p-2 p-lg-4">
                    <h5 className="mt-0">Part 2</h5>

                    <ReactSortable
                      group='teamList2'
                      handle='.dragula-handle'
                      list={part2}
                      setList={setPart2}
                      className="py-2"
                    >
                      {(part2 || []).map((item, idx) => {
                        return (
                          <MovableCard3 key={idx} item={item} />
                        )
                      })}
                    </ReactSortable>

                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default Dragula