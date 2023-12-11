import Row from '../ui/Row'
import Heading from '../Heading'
import CottageTable from '../features/cottages/CottageTable'
import Button from '../ui/Button'
import { useState } from 'react'
import CreateCottageForm from '../ui/CreateCottageForm'

const Cottages = () => {

  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All cottage</Heading>
        <p>filter/sort</p>
      </Row>


      <Row>
        <CottageTable />
        <Button onClick={() => setShowForm((show) => !show)} >Add new Cottage</Button>
        {showForm && <CreateCottageForm />}
      </Row>
    </>
  )
}

export default Cottages