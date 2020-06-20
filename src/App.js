import React from 'react'
import './App.css'
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

function App () {
  return (
    <div className='App'>
      <header className='App-header'>React Bootstrap</header>
      <h1>Welcome to my Page</h1>
      <div className='container'>
        <div className='row'>
          <div className='col-sm'>
          <div class="card">
            <img src="..." class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
</div></div>
          <div className='col-sm'>
          <div class="card">
            <img src="..." class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
</div></div>
          <div className='col-sm'>
          <div class="card" >
            <img src="..." class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
</div></div>
        </div>
      </div>
    </div>
  )
}

export default App
