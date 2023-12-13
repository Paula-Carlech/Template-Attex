import { Card, Col, Row } from 'react-bootstrap';

// Components
import PageTitle from '../../../components/PageTitle';
import PageBreadcrumb from '../../../components/PageBreadcrumb';

//dummy data
import { employeeRecords, expandableRecords } from "./data";
import { PageSize, Table } from '../../../components/table';
import { Column } from 'react-table';
import { Employee } from './types';
// import Table from '../../../components/table';

// import { dataTableRecords } from './data';
const columns: ReadonlyArray<Column> = [
  {
    Header: 'ID',
    accessor: 'id',
    defaultCanSort: true,
  },
  {
    Header: 'Name',
    accessor: 'name',
    defaultCanSort: true,
  },
  {
    Header: 'Phone Number',
    accessor: 'phone',
    defaultCanSort: false,
  },
  {
    Header: 'Age',
    accessor: 'age',
    defaultCanSort: true,
  },
  {
    Header: 'Company',
    accessor: 'company',
    defaultCanSort: false,
  },
];

const sizePerPageList: PageSize[] = [
  {
    text: '5',
    value: 5,
  },
  {
    text: '10',
    value: 10,
  },
  {
    text: '25',
    value: 25,
  },
  {
    text: 'All',
    value: employeeRecords.length,
  },
];

const DataTables = () => {
  return (
    <>
      <PageTitle pageTitle='Datatables' />
      <PageBreadcrumb
        breadCrumbItems={[
          { label: 'Tables', path: '/ui/tables/data-tables' },
          { label: "Data Tables", path: "/ui/tables/data-tables", active: true },
        ]}
        title={"Data Tables"}
      />


      <Row>
        <Col>
          <Card>
            <Card.Body>
              <h4 className="header-title">Pagination &amp; Sort</h4>
              <p className="text-muted font-14 mb-4">
                A simple example of table with pagination and column sorting
              </p>

              <Table<Employee>
                columns={columns}
                data={employeeRecords}
                pageSize={5}
                sizePerPageList={sizePerPageList}
                isSortable={true}
                pagination={true}

              />

              {/* <Table
                columns={columns}
                data={data}
                pageSize={5}
                sizePerPageList={sizePerPageList}
                isSortable={true}
                pagination={true}
              /> */}
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col>
          <Card>
            <Card.Body>
              <h4 className="header-title">Search</h4>
              <p className="text-muted font-14 mb-4">A Table allowing search</p>

              <Table<Employee>
                columns={columns}
                data={employeeRecords}
                pageSize={5}
                sizePerPageList={sizePerPageList}
                isSortable={true}
                pagination={true}
                isSearchable={true}
              />

              {/*
              <Table
                columns={columns}
                data={data}
                pageSize={5}
                sizePerPageList={sizePerPageList}
                isSortable={true}
                pagination={true}
                isSearchable={true}
              /> */}
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col>
          <Card>
            <Card.Body>
              <h4 className="header-title">Multiple Row Selection</h4>
              <p className="text-muted font-14 mb-4">
                This table allowing selection of multiple rows
              </p>

              <Table<Employee>
                columns={columns}
                data={employeeRecords}
                pageSize={5}
                sizePerPageList={sizePerPageList}
                isSortable={true}
                pagination={true}
                isSelectable={true}
              />

              {/* <Table
                columns={columns}
                data={data}
                pageSize={5}
                sizePerPageList={sizePerPageList}
                isSortable={true}
                pagination={true}
                isSelectable={true}
              /> */}
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col>
          <Card>
            <Card.Body>
              <h4 className="header-title">Expand Row</h4>
              <p className="text-muted font-14 mb-4">
                Expand row to see more additional details
              </p>

              <Table<Employee>
                columns={columns}
                data={expandableRecords}
                pageSize={5}
                sizePerPageList={sizePerPageList}
                isSortable={true}
                pagination={true}
                isExpandable={true}
              />

              {/* <Table
                columns={columns}
                data={expandableRecords}
                pageSize={5}
                sizePerPageList={sizePerPageList}
                isSortable={true}
                pagination={true}
                isExpandable={true}
              /> */}
            </Card.Body>
          </Card>
        </Col>
      </Row>







      {/* <Row>
        <Col xs={12}>
          <Card>
            <Card.Body>
              <h4 className="header-title">Basic Data Table</h4>
              <p className="text-muted fs-14">
                DataTables has most features enabled by default, so all you need to do to use it with your own tables is to call the construction
                function:
                <code>$().DataTable();</code>. KeyTable provides Excel like cell navigation on any table. Events (focus, blur, action etc) can be assigned to individual
                cells, columns, rows or all cells.
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row> */}
    </>
  )
}

export default DataTables
