import './App.css';

function App() {
  return (
    <div className="App">

        <div className='home-container'>
          <h1>Hello, my name is<br />Natalie Esseen</h1>
          <div className='text-block'>
            <p>👋 I'm a web developer based in Umeå, Sweden. I love creating pretty and user-friendly interfaces, web apps, and everything in between!</p>
          </div>
        </div>

        <img src='/img-wide.png' alt='natalie & cat' className='about-img' />

        <img src='/scallop-edge-mint.svg' alt='scallop svg' className='deco'/>
        <div className='about-container'>
          <div className='text-block'>
          <p>Currently studying my last year at Changemaker Educations's program <i>Web Developer, E-commerce.</i></p>
        
          <p>Here are a few of the technologies and tools I work with:</p>
          </div>
          <div className='text-block-small'>
            <ul>
              <li>JavaScript (ES6+)</li>
              <li>React</li>
              <li>PHP</li>
              <li>HTML/CSS</li>
              <li>Adobe Creative Suite</li>
              <li>Figma</li>
            </ul>
          </div>
          <div className='text-block'>
           <p><a href='https://shadow-stitch-17b.notion.site/Natalie-Esseen-fdd2c6b9ea424b1bbb2e3dadd9f68f0f' target={'_blank'} className='resume-link'>Link to my resume ✨</a></p>
          </div>
        </div>

        <div className='project-container'>
          <h1>Projects</h1>
          <p>Oops! I'm working on it! If you want to take a look at a few of my previous projects, you can do so over at my <a href='https://github.com/natalieesseen'>github</a> ☕</p>
        </div>

        <img src='/scallop-edge-purple.svg' alt='scallop svg' className='deco'/>
        <div className='contact-container'>
          <h1>Natalie Esseen</h1>
          <p>natalieesseen@gmail.com</p>
        </div>
        <div className='footer'>
          <p><a href='https://github.com/natalieesseen/personal-page' className='footer-a'>Designed & Built by Natalie Esseen</a></p>
        </div>
    </div>
  );
}

export default App;
