import { Dropdown, OverlayTrigger, Table, Tooltip } from 'react-bootstrap'
import { Link } from 'react-router-dom'

interface RecentFileTypes {
  recentFiles: {
    name: string;
    modifiedDate: string;
    modifiedBy: string;
    size: string;
    owner: string;
    members: {
      image: string;
      name: string;
    }[];
  }[]
}

const Recent = ({ recentFiles }: RecentFileTypes) => {
  return (
    <>
      <div className="mt-3">
        <h5 className="mb-3">Recent</h5>
        <div className="table-responsive">
          <Table className="table-centered table-nowrap table-borderless table-hover mb-0">
            <thead className="border-top border-bottom bg-light-subtle border-light">
              <tr>
                <th className="border-0">Name</th>
                <th className="border-0">Last Modified</th>
                <th className="border-0">Size</th>
                <th className="border-0">Owner</th>
                <th className="border-0">Members</th>
                <th className="border-0" style={{ width: 80 }}>Action</th>
              </tr>
            </thead>
            <tbody>

              {(recentFiles || []).map((file, idx) => {
                return (
                  <tr key={idx}>
                    <td>
                      <span className="fw-semibold"><Link to="#" className="text-reset">{file.name}</Link></span>
                    </td>
                    <td>
                      <p className="mb-0">{file.modifiedDate}</p>
                      <span className="fs-12">by {file.modifiedBy}</span>
                    </td>
                    <td>{file.size}</td>
                    <td>
                      {file.owner}
                    </td>
                    <td>
                      <div className="avatar-group">
                        {(file.members || []).map((member, idx) => (
                          <OverlayTrigger
                            key={idx}
                            placement='top'
                            overlay={<Tooltip>{member.name}</Tooltip>}
                          >
                            <Link to="#" className="avatar-group-item mb-0">
                              <img src={member.image} className="rounded-circle avatar-xs" alt="friend" />
                            </Link>
                          </OverlayTrigger>
                        ))}
                      </div>
                    </td>
                    <td >
                      <Dropdown className="btn-group">
                        <Dropdown.Toggle as='a' className="table-action-btn dropdown-toggle arrow-none btn btn-light px-1 btn-xs" data-bs-toggle="dropdown" aria-expanded="false"><i className="ri-more-2-fill"/></Dropdown.Toggle>
                        <Dropdown.Menu className="dropdown-menu dropdown-menu-end">
                          <Link className="dropdown-item" to="#"><i className="ri-share-line me-2 text-muted vertical-middle"/>Share</Link>
                          <Link className="dropdown-item" to="#"><i className="ri-link me-2 text-muted vertical-middle"/>Get Sharable Link</Link>
                          <Link className="dropdown-item" to="#"><i className="ri-pencil-line me-2 text-muted vertical-middle"/>Rename</Link>
                          <Link className="dropdown-item" to="#"><i className="ri-download-line me-2 text-muted vertical-middle"/>Download</Link>
                          <Link className="dropdown-item" to="#"><i className="ri-delete-bin-line me-2 text-muted vertical-middle"/>Remove</Link>
                        </Dropdown.Menu>
                      </Dropdown>
                    </td>
                  </tr>
                )
              })}

            </tbody>
          </Table>
        </div>
      </div>
    </>
  )
}

export default Recent