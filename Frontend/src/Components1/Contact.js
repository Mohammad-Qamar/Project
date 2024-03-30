import React from 'react';
import NavBar from "./NavBar"
import {NavLink} from 'react-router-dom';

function Contact() {
    return (
        <div>
            <NavBar/>
            <div className='cotainer-fluid'>
                    <div className="row justify-content-around align-items-center" style={{height :"98vh" , marginTop:10 , marginLeft:'20px'}}>
                    
                    <div className="col-9 p-5 shadow bg-white" >
                    <center><span className='fw-light fs-1'>Contact Us</span></center>
                    <table  style={{marginLeft:40 , marginTop:20}}>
                        <tr>
                            <td className='p-1 px-5 ' >
                            
                                <div className="card text-bg-white mb-3" style={{Width: '200px', marginLeft:'-20px'}}>

                                        <div className="card-body">
                                            <h5 class="card-title">Prafull Srivastav</h5>
                                            <p class="card-text">Gmail:  prafullcse2019@gmail.com</p>
                                            <a href="https://www.linkedin.com/in/praful-srivastava/" class="card-link"> <i class="bi bi-linkedin"></i></a>   
                                    </div>
                                </div>
                         </td>
                 <td>
                    <div className="card text-bg-white mb-3" style={{Width: '200px', marginLeft:'-20px'}}>
                            <div className="card-body">
                                <h5 class="card-title">Sakshi Asange</h5>
                                <p class="card-text">Gmail: sakshi.asange97@gmail.com</p>
                                <a href="https://www.linkedin.com/" class="card-link"><i class="bi bi-linkedin"></i></a>
                        </div>
                    </div>
                </td>

                <td className='p-1 px-5 ' >
                    <div className="card text-bg-white mb-3" style={{Width: '200px', marginLeft:'-20px'}}>
                            <div className="card-body">
                                <h5 class="card-title">Samarth Garg</h5>
                                <p class="card-text">Gmail: samarth14@gmail.com</p>
                                <a href="https://www.linkedin.com/in/" class="card-link"><i class="bi bi-linkedin"></i></a>
                        </div>
                    </div>
                </td>
          </tr>
     </table>
     <table  style={{marginLeft:40 , marginTop:20}}>
                    <tr>
                        <td className='p-3 px-5'>
                            <div className="card text-bg-white mb-3" style={{Width: '200px', marginLeft:'-20px'}}>
                                    <div className="card-body">
                                        <h5 class="card-title">Qamar Ansari</h5>
                                        
                                        <p class="card-text">Gmail:<b/><br></br> qamar@gmail.com          </p>
                                        <a href="https://www.linkedin.com/in/" class="card-link"><i class="bi bi-linkedin"></i></a>
                                    
                                </div>
                            </div>
                    </td>

                <td>
                    <div className="card text-bg-white mb-3" style={{Width: '200px', marginLeft:'-20px'}}>
                            <div className="card-body">
                                <h5 class="card-title">Shloka Audichya</h5>
                                
                                <p class="card-text">Gmail:<b/> <br></br>shloka@gmail.com</p>
                                <a href="https://www.linkedin.com/" class="card-link"><i class="bi bi-linkedin"></i></a>
                            
                        </div>
                    </div>
                </td>
            </tr>
        </table>
     </div>
    </div>
 </div>
</div>
        );
}
export default Contact