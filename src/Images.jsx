import d1 from './assets/retriever.jpeg'
import d2 from './assets/shepherd.jpg'
import d3 from './assets/shihtzu.jpg'

function Images() {  
return(
<div className="dogs">
<img className="img1"src={d1} alt="retriever"></img>
<img className="img2"src={d2} alt="shepherd"></img>
<img className="img3"src={d3} alt="shihzu"></img>
</div>
);
}

export default Images