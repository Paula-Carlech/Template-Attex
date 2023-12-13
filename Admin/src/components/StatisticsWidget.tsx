import { Card } from 'react-bootstrap'
import ReactApexCharts from 'react-apexcharts'
import { ApexOptions } from 'apexcharts';

interface StatisticsWidgetProps {
  variant: string;
  cardTitle: string;
  title: string;
  change: string;
  stats: string;
  dataSince: string;
  classname: string;
  chartSeries: number[];
  colors: string[];
}

const StatisticsWidget = ({
  variant,
  cardTitle,
  title,
  stats,
  change,
  dataSince,
  classname,
  chartSeries,
  colors
}: StatisticsWidgetProps) => {

  const apexOpts: ApexOptions = {
    chart: {
      height: 72,
      width: 72,
      type: 'donut',
    },
    legend: {
      show: false
    },
    plotOptions: {
      pie: {
        donut: {
          size: '80%'
        }
      }
    },
    stroke: {
      colors: ['transparent']
    },
    dataLabels: {
      enabled: false,
    },
    colors: colors
  }

  return (
    <Card>
      <Card.Body>
        <div className='d-flex justify-content-between'>
          <div className='flex-grow-1 overflow-hidden'>
            <h5
              className='text-muted fw-normal mt-0'
              title={title}
            >
              {cardTitle}
            </h5>
            <h3 className='my-3'>{stats}</h3>
            <p className='mb-0 text-muted text-truncate'>
              <span className={`badge bg-${variant} me-1`}>
                <i className='ri-arrow-up-line'/> {change}%
              </span>
              <span>{dataSince}</span>
            </p>
          </div>
          <div className='flex-shrink-0'>
            <ReactApexCharts
              className={classname}
              options={apexOpts}
              series={chartSeries}
              type="donut"
              width={95}
              height={95}
            />
          </div>
        </div>
      </Card.Body>
    </Card>
  )
}

export default StatisticsWidget