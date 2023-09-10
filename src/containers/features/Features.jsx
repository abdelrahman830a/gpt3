import React from 'react'
import './features.css'
import { Feature } from '../../components'


const featuresData = [
  {
    title: 'Improving end distrusts instantly',
    Text: "From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded."
  },
  {
    title: 'Become the tended active',
    Text: "From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded."
  },
  {
    title: 'Message or am nothing',
    Text: "From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded."
  },
  {
    title: 'Really boy law county',
    Text: "From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded."
  },
]

const Features = () => {
  return (
    <div className='gpt3__features section__padding' id='features'>
      <div className='gpt3__features-heading'>
        <h1 className='gradient__text'>
        The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen.
        </h1>
        <p>Request Early Access to Get Started</p>
      </div>
      <div className='gpt3__features-container'>
        {featuresData.map((item) => (
          <Feature title={item.title} text={item.Text}/>
        ))}
      </div>
    </div>
  )
}

export default Features