
import './style.css';
import img2 from './img2.jpg'

function App() {
  return (
    <div className="App">
      <div style={{border:'solid 1px black', maxWidth:'100vw'}}>
<h1 className='title red'>SANA</h1>
<br/>
<img src= {img2} alt="image"/>
<br/>
<img src= "img1.gif" alt="th"/>
</div>
<br />
<video width="320" height="240" controls>
<source src="myVideo.mp4" type="video/mp4" />
</video>
    </div>
  );
}

export default App
