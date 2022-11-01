import './App.css';

function App() {
  return (
    <div className="App">

        <div className='home-container'>
          <h1>Hello, my name is Natalie Esseen</h1>
          <div className='text-block'>
            <p>👋 I'm a web developer based in Umeå, Sweden. I love creating pretty and user-friendly interfaces, web apps, and everything in between!</p>
          </div>
        </div>

        <img src='/img-1.png' alt='natalie' className='about-img-1' />
        <img src='/img-2.png' alt='cat with book' className='about-img-2' />

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
           <a href='Natalie-CV2022.pdf' target={'_blank'} className='resume-link'>Take a look at my resume</a>
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
