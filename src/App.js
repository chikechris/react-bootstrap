import React from 'react'
import './App.css'
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

function App () {
  return (
    <div className='App'>
      <header className='App-header'>React Bootstrap</header>
      <h1 className='text-capitalize text-danger my-5'>Welcome to my Page</h1>
      <div className='container'>
        <div className='row'>
          <div className='col-sm'>
            <div class='card'>
              <img
                src='https://picsum.photos/200/300'
                class='card-img-top'
                alt='...'
                height='200'
              />
              <div class='card-body'>
                <h5 class='card-title'>Pic 1</h5>
                <p class='card-text'>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href='#' class='btn btn-primary'>
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div className='col-sm'>
            <div class='card'>
              <img
                src='https://picsum.photos/201/300'
                class='card-img-top'
                alt='...'
                height='200'
              />
              <div class='card-body'>
                <h5 class='card-title'>Pic 2</h5>
                <p class='card-text'>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href='#' class='btn btn-primary'>
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div className='col-sm'>
            <div class='card'>
              <img
                src='https://picsum.photos/202/300'
                class='card-img-top'
                alt='...'
                height='200'
              />
              <div class='card-body'>
                <h5 class='card-title'>Pic 3</h5>
                <p class='card-text'>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href='#' class='btn btn-primary'>
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
