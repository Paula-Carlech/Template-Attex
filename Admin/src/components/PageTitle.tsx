import { Helmet } from 'react-helmet'

interface PageTitleProps {
  pageTitle: string
}

const PageTitle = ({ pageTitle }: PageTitleProps) => {
  return (
    <Helmet>
      <title>{pageTitle} | Attex - Bootstrap 5 Admin & Dashboard</title>
    </Helmet>
  )
}

export default PageTitle