// component
import PageBreadcrumb from '../../components/PageBreadcrumb'
import PageTitle from '../../components/PageTitle'

const StarterPages = () => {
  return (
    <>
      <PageTitle pageTitle='Starter' />
      <PageBreadcrumb
        breadCrumbItems={[
          { label: 'Pages', path: '/pages/starter' },
          { label: "Starter", path: "/pages/starter", active: true },
        ]}
        title={"Starter"}
      />
    </>
  )
}

export default StarterPages