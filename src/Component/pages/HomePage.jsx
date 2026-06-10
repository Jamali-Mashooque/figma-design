import React from 'react'
import { CiStar } from "react-icons/ci";
import { TiTick } from "react-icons/ti";
import { TfiEmail } from "react-icons/tfi";
const HomePage = () => {
  return (
    <>
    <div className="body">
        <div className="context">
            <h1>FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
            <p>Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
            <button>Shop Now</button>
            <div className="rating">
                <div className="one">
                <h2>200+</h2>
                <p>International Brads</p>
                </div>
                {/* <div style={{ borderLeft: "1px solid black", height: "70px", marginLeft: "-300px",marginTop: "40px"}}></div> */}
                <div className="one">
                <h2>2000+</h2>
                <p>High-Quality Products</p>
                </div>
                {/* <div style={{ borderLeft: "1px solid black", height: "70px",marginLeft: "-300px",marginTop: "40px"}}></div> */}
                <div className="one">
                <h2>30,000+</h2>
                <p>Happy Customers</p>
                </div>
            </div>
        </div>
        <div className="image">
            <img src="pic.jpg" alt="" />
        </div>
    </div>
     <div className="product">
        <h2>VARSACE</h2>
        <h2>ZARA</h2>
        <h2>GUCCI</h2>
        <h2>PRADA</h2>
        <h2>Calvin Klien</h2>
     </div>
     <div className="NewArival">
        <h2>NEW ARIVALS</h2>
        <div className="cards">
        <div className="card">
            <img src="image 7.svg" alt="" />
            <p>T-SHIRT WITH TAPE DETAILS</p>
            <CiStar style={{backgroundColor:"yellow"}} /><CiStar style={{backgroundColor:"yellow"}}/><CiStar style={{backgroundColor:"yellow"}}/><CiStar style={{backgroundColor:"yellow"}}/> <h5>4.5/5</h5>
        </div>
        <div className="card">
            <img src="image 8.svg" alt="" />
            <p>SKINNY FIT JEANS</p>
            <CiStar style={{backgroundColor:"yellow"}} /><CiStar style={{backgroundColor:"yellow"}}/><CiStar style={{backgroundColor:"yellow"}}/>
            <h5>4.5/5</h5>
        </div>
        <div className="card">
            <img src="Frame 34.svg" alt="" />
            <p>CHECKERED SHIRT</p>
            <CiStar style={{backgroundColor:"yellow"}} /><CiStar style={{backgroundColor:"yellow"}}/><CiStar style={{backgroundColor:"yellow"}}/>
            <h5>4.5/5</h5>
        </div>
        <div className="card">
            <img src="image 10.svg" alt="" />
           <p> SLEEVE STRIPED T-SHIRT</p>
           <CiStar style={{backgroundColor:"yellow"}} /><CiStar style={{backgroundColor:"yellow"}}/><CiStar style={{backgroundColor:"yellow"}}/>
           <h5>4.5/5</h5>
        </div>
        </div>
     </div>
     <div className="btn"><button>View All</button></div>
     <hr />
     <div className="selling">
        <h2 style={{textAlign:"center", marginTop:"20px"}}  >TOP SELLING</h2>
        <div className="cards">
            <div className="card">
                <img src="sell2.svg" alt="" />
                <p style={{textAlign:"center"}}>VERTICAL STRIPED SHIRT</p>
                <CiStar style={{backgroundColor:"yellow",marginLeft:"100px"}} /><CiStar style={{backgroundColor:"yellow"}}/><CiStar style={{backgroundColor:"yellow"}}/>
            </div>
            <div className="card">
                <img src="sell1.svg" alt="" />
                <p style={{textAlign:"center"}}>COURAGE GRAPHIC T-SHIRT</p>
                <CiStar style={{backgroundColor:"yellow",marginLeft:"100px"}} /><CiStar style={{backgroundColor:"yellow"}}/><CiStar style={{backgroundColor:"yellow"}}/>
            </div>
            <div className="card">
                <img src="image 9.svg" alt="" />
                <p style={{textAlign:"center"}}>LOOSE FIT BERMUDA SHORTS</p>
                <CiStar style={{backgroundColor:"yellow",marginLeft:"100px"}} /><CiStar style={{backgroundColor:"yellow"}}/><CiStar style={{backgroundColor:"yellow"}}/>
            </div>
            <div className="card">
                <img src="image 10.png" alt="" />
                <p style={{textAlign:"center"}}>FADED SKINNY JEANS</p>
                <CiStar style={{backgroundColor:"yellow",marginLeft:"100px"}} /><CiStar style={{backgroundColor:"yellow"}}/><CiStar style={{backgroundColor:"yellow"}}/>
            </div>
        </div>
     </div>
     <div className="btn"><button>View All</button></div>
     <div className="dressstyle">
        <h1>BROWSE BY dress STYLE</h1>
        <div className="style1">
            <div className="image1">
                <h2>Casual</h2>
                <img src="image 11.png" alt="" />
            </div>
            <div className="image2">
                <h2>Formal</h2>
                <img src="image 13.png" alt="" />
            </div>
        </div>
        <div className="style1">
            <div className="image2">
                <h2>Party</h2>
                <img src="image 12.png" alt="" />
            </div>
            <div className="image1">
                <h2>Gym</h2>
                <img src="image 14.png" alt="" style={{width:"450px"}} />
            </div>
        </div>
     </div>
     <h2 style={{marginTop:"40px", marginBottom:"80px",marginLeft:"100px", fontSize:"2em"}} >Our Happy Customers</h2>
     <div className="container">
        <div className="box">
            <CiStar style={{backgroundColor:"yellow", borderRadius:"50%",marginTop:"30px"}} /><CiStar style={{backgroundColor:"yellow", marginLeft:"10px", marginLeft:"10px"}}/><CiStar style={{backgroundColor:"yellow", marginLeft:"10px"}}/><CiStar style={{backgroundColor:"yellow", marginLeft:"10px"}}/><CiStar style={{backgroundColor:"yellow", marginLeft:"10px"}}/>
            <h1>sarah M. <TiTick  style={{color:"white", fontSize:"25px" , background:"green", borderRadius:"50%"}}/></h1>
            <p>"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”</p>
        </div>
        <div className="box">
            <CiStar style={{backgroundColor:"yellow", borderRadius:"50%",marginTop:"30px"}} /><CiStar style={{backgroundColor:"yellow", marginLeft:"10px", marginLeft:"10px"}}/><CiStar style={{backgroundColor:"yellow", marginLeft:"10px"}}/><CiStar style={{backgroundColor:"yellow", marginLeft:"10px"}}/><CiStar style={{backgroundColor:"yellow", marginLeft:"10px"}}/>
            <h1>Alex K. <TiTick  style={{color:"white", fontSize:"25px" , background:"green", borderRadius:"50%"}}/></h1>
            <p>"Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.”</p>
        </div>
        <div className="box">
            <CiStar style={{backgroundColor:"yellow", borderRadius:"50%",marginTop:"30px"}} /><CiStar style={{backgroundColor:"yellow", marginLeft:"10px", marginLeft:"10px"}}/><CiStar style={{backgroundColor:"yellow", marginLeft:"10px"}}/><CiStar style={{backgroundColor:"yellow", marginLeft:"10px"}}/><CiStar style={{backgroundColor:"yellow", marginLeft:"10px"}}/>
            <h1>James L. <TiTick  style={{color:"white", fontSize:"25px" , background:"green", borderRadius:"50%"}}/></h1>
            <p>"As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.”</p>
        </div>
        
     </div>
     <div className="uptodate">
        <div className="detail">
            <h1>STAY UPTO DATE ABOUT <br></br>OUR LATEST OFFERS</h1>
        </div>
        <div className="detail">
            <input type="email" placeholder= ' Enter Your Email Address'/>

            <br></br><br></br>
            <button>Subscribe to Newsletter</button>
        </div>
     </div>
    </>
  )
}

export default HomePage 