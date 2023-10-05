import React from 'react'
import './home.css'
import image2 from '../images/image2.jpg'

const Home = () => {
  return (
    <div>
      {/* welcome section */}
      <div className='welcome'>
        {/* welcome section Title and paragraph and social */}
        <div className='welcome-title'>
          <h3>Resume <span> Builder</span></h3>
          <p>Ipsum dolore aute enim adipisicing mollit culpa id pariatur et ea excepteur culpa fugiat et. Cupidatat veniam sit cillum proident incididunt tempor. Nulla sit elit ex officia est. Veniam incididunt quis fugiat dolore mollit exercitation occaecat. Duis velit voluptate laboris non dolore adipisicing.
          Ipsum dolore aute enim adipisicing mollit culpa id pariatur et ea excepteur culpa fugiat et. Cupidatat veniam sit cillum proident incididunt tempor.
          Veniam incididunt quis fugiat dolore mollit exercitation occaecat. Duis velit voluptate laboris non dolore adipisicing.
          Ipsum dolore aute enim adipisicing mollit culpa id pariatur et ea excepteur culpa fugiat et. Cupidatat veniam sit cillum proident incididunt tempor.
          </p>
        </div>
        <div className='welcome-image'>
          <img src={image2} alt='oth'/>
        </div>
      </div>

    </div>
  )
}

export default Home