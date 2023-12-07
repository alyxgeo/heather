
import Row from '../ui/Row'
import Heading from '../Heading'
import { useEffect } from 'react'
import { getCottage } from '../services/apiCottage'

const Cottages = () => {



  useEffect(()=>{
    getCottage().then((data)=>console.log(data))
  },[])


  return (
    <Row type="horizontal">
      <Heading as="h1">All cottage</Heading>
      <p>TEST</p>
    </Row>
  )
}

export default Cottages