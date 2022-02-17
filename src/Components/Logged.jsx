import React from 'react'
import { Button, Item } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import { requestArticles, requestLogOff } from '../features/article-slice'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import Countdown from 'react-countdown'
import Grid from '@material-ui/core/Grid'
import axios from 'axios'

function Logged() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const articles = useSelector((state) => state.article.articles)

 

  return (
    <div>
      <div>
        <Countdown date={Date.now() + 60000}>
          <Button
            onClick={() => {
              dispatch(requestArticles())
            }}
          >
            Click here
          </Button>
        </Countdown>
        <Button
          onClick={() => {
            dispatch(requestLogOff())
            navigate('/')
          }}
        >
          Logoff
        </Button>
      </div>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {articles.map((item) => (
          <Grid item xs={2} sm={4} md={4}>
            <h3>{item.description}</h3>
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default Logged
