import PageHeader from '../components/header'
import PageFooter from '../components/footer'

export default function Layout({ children }) {
  return (
    <>
      <PageHeader />
        <main>{children}</main>
      <PageFooter />
    </>
  )
}
