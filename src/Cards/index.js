
import React from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import { getAllComments, getAllPosts } from '../actions'
import { cardService } from '../APIs/Services/Card'
import './index.scss'

function Cards() {
  const [users, setUsers] = React.useState([])
  const [posts,setPosts]= React.useState([])
  React.useEffect(()=>{
    cardService.getAllPosts().then((res)=>console.log(res))
  },[])
  // React.useEffect(()=>{
  // //     const userFormAPI = axios.get("https://jsonplaceholder.typicode.com/posts")
  // //   userFormAPI.then(({data})=>{
  // //     setUsers(data)
  // //   })
  // getAllPosts(setUsers);
  // })
  React.useEffect(() => {
    // console.log("cards: ", cardService);
    cardService.getAllPosts().then(({ data: userData }) => {
      setUsers(userData)
    })
  }, [])
function postComments(id){
cardService.getPost(id)
}
  return (
    <Container>
      <Row>
        {users.map(({ id, title, body }) => (
          <Col md={4} key={id}>
            <Card style={{ width: '18rem' }} className={'mt-4'} key={id}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                  {body}
                </Card.Text>
                <Button onClick={postComments} variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default Cards