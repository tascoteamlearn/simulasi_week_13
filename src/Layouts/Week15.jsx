import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { Card } from 'react-bootstrap'

const fetchData = async(endPoint) =>{
  // axios({
  //   baseURL:"https://api.spoonacular.com/recipes/complexSearch",
  //   method:"GET",
  //   params:{
  //     apiKey:"62736bdfed3149e7b67b5056f5fcfafc"
  //   }
  // }).then(response => console.log(response)).catch(error=> console.log(error))
  try {
      const response = await axios({
        baseURL: endPoint,
        method:"GET",
        params:{
          apiKey:"5e0d533fcfec414a8fb61a51b1c3bf19"
        }
      })
      return response.data
    }catch(error) {
      console.log(error)
    }
}

export default function Week15() {
  const [data, setData] = useState(null)
  const [detailIngredients, setDetailIngredients] = useState({id:null, data:null})

  const handleFetchData = async() =>{
    const responseData = await fetchData("https://api.spoonacular.com/recipes/complexSearch")
    setData(responseData)
  }

  useEffect(()=>{
    fetchData("https://api.spoonacular.com/recipes/complexSearch")
    .then(response=> setData(response))
    .catch(error => console.log(error))
  },[])

  const fetchReceiptData = async(id) =>{
    const responseData = await fetchData(`https://api.spoonacular.com/recipes/${id}/ingredientWidget.json`)
    setDetailIngredients({id:id, data:responseData.ingredients})
  }

  return (
    <div>
        <h1 style={{textAlign:"center"}}>Week 15</h1>
        <button onClick={()=> handleFetchData()}>Fetch Data</button>
        <div style={{display:"flex", flexWrap:"wrap", gap:"20px", margin:"30px 0px"}}>
          {
            data && data.results && data.results.length > 0 && data.results.map((item, index)=>{
              return (
                <Card style={{ width: '18rem' }} onClick={()=> fetchReceiptData(item.id)}>
                  <Card.Img variant="top" src={item.image} />
                  <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    {
                      detailIngredients.id && detailIngredients.id === item.id &&
                      <Card.Text>
                        <ul>
                          {
                            detailIngredients.data && detailIngredients.data.length > 0 && detailIngredients.data.map((el,i)=>{
                              return (
                                <li style={{textAlign:"left"}}>{el.name} ~ {el.amount.metric.value} {el.amount.metric.unit}</li>
                              )
                            })
                          }
                        </ul>
                      </Card.Text>
                    }
                  </Card.Body>
                </Card>
              )
            })
          }
        </div>
    </div>
  )
}
