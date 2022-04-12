import { Link } from 'react-router-dom';
import '../css/aboutpage.css';
//FIXME: about page on mobile
const AboutPage = (props:{isMobile:boolean}) => {
  return (
    <div id="about">
      <div id="abouttext">
        Infinite is a student-run magazine seeking to
        <span id="reframe">reframe</span> art, politics,
        <span id="culture">culture</span>, and aesthetics through the
        <span id="lens">lens</span> of fashion. It was
        <span id="launched">launched</span> in print and online in early 2018,
        with <span id="new">new</span> issues released approximately once per
        <span id="semester">semester</span>. Each issue
        <span id="features">features</span> full-page photo spreads and articles
        that are <span id="unified">unified</span> under the current issue’s
        theme. Infinite aims to provide the <span id="space">space</span>,
        resources, and <span id="platform">platform</span> for student designers
        and writers to showcase their projects and experiments to the MIT
        community and <span id="beyond">beyond</span>. 
        <br /> <Link to='/'>BACK</Link>
      </div>
	  </div>
  );
}

export default AboutPage