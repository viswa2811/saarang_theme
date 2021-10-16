import React from 'react';
import logo from './styles/images/Saarang2021Logo.png'
import poster from './styles/images/Workshop_Poster.jpeg'
import './styles/Workshops.css'

import {
    Card,
    CardContent,
} from '@material-ui/core';

class Workshops extends React.Component{
  render(){
    return(
            <div>
                <div style={{paddingTop: '2.5%', marginLeft: '2.5%', marginRight: '2.5%', marginBottom: '1.5%'}}>
                    <div style={{display:'flex', flexDirection:'row'}}>
                        <img src={logo} height='100 px' style={{marginTop:'-1%', marginLeft:'-1.5%'}} alt="Logo"></img>
                        <div style={{display:'flex', flexDirection: 'column', marginTop:'-2.5%', marginLeft: '2%', width:'100%'}}>
                            <center>
                                <h2 className='heading' style={{fontFamily: 'Croissant One, cursive', fontSize: '30px'}}>Online Workshop Series Conducted by Saarang'21 & Shaastra'21</h2>
                                <h2 style={{fontFamily: 'Croissant One, cursive', lineHeight: '70%', marginBottom: '1%', fontSize: '30px'}}>IIT MADRAS</h2>
                            </center>
                        </div>
                    </div>
                    <center>
                        <img className='image1' height='500px' src={poster} style={{marginTop:'20px'}} alt="Poster"></img>
                    </center>
                    <div style={{display:'flex', flexDirection: 'row', justifyContent: 'space-evenly', flexWrap: 'wrap', marginBottom:'3%'}}>
                        <Card className="card-1" style={{width:'320px', marginTop:'5%', marginRight:'1%', marginLeft:'1%', height:'350px'}}>
                            <div className="card-1">
                            <CardContent style={{display:'flex', flexDirection:'column', justifyContent:'space-between', height:'350px'}}>
                                <div>
                                    <center><b><h2 style={{fontWeight: 'bold'}}>Artificial Intelligence & Machine Learning</h2></b></center>
                                </div>
                                <div>
                                    <hr></hr>
                                    <center><h3>Date: 30th January 2021 </h3></center>
                                </div>
                            </CardContent>
                            </div>
                        </Card>
                        <Card style={{width:'320px', marginTop:'5%', marginRight:'1%', marginLeft:'1%', height:'350px'}}>
                            <div className="card-2">
                            <CardContent style={{display:'flex', flexDirection:'column', justifyContent:'space-between', height:'350px'}}>
                                <div>
                                    <center><b><h2 style={{fontWeight: 'bold'}}>Android App Development</h2></b></center>
                                </div>
                                <div>
                                    <hr></hr>
                                    <center><h3>Date: 31st January 2021 </h3></center>
                                </div>
                            </CardContent>
                            </div>
                        </Card>
                        <Card style={{width:'320px', marginTop:'5%', marginRight:'1%', marginLeft:'1%', height:'350px'}}>
                            <div className="card-3">
                            <CardContent style={{display:'flex', flexDirection:'column', justifyContent:'space-between', height:'350px'}}>
                                <div>
                                    <center><b><h2 style={{fontWeight: 'bold'}}>Ethical Hacking</h2></b></center>
                                </div>
                                <div>
                                    <hr></hr>
                                    <center><h3>Date: 6th February 2021 </h3></center>
                                </div>
                            </CardContent>
                            </div>
                        </Card>
                        <Card style={{width:'320px', marginTop:'5%', marginRight:'1%', marginLeft:'1%', height:'350px'}}>
                            <div className="card-4">
                            <CardContent style={{display:'flex', flexDirection:'column', justifyContent:'space-between', height:'350px'}}>
                                <div>
                                    <center><b><h2 style={{fontWeight: 'bold'}}>Automobile & IC Engine Design</h2></b></center>
                                </div>
                                <div>
                                    <hr></hr>
                                    <center><h3>Date: 7th February 2021 </h3></center>
                                </div>
                            </CardContent>
                            </div>
                        </Card>
                    </div>
                    <center><h3 style={{color:'#ff2501', background: '#EFFD5F', borderRadius: '20px', width: '30%', marginBottom: '2%', fontWeight: 'bold'}}>Limited Seats!!</h3></center>
                    <div style={{backgroundColor: '#01273c', marginRight: '-2.5%', marginLeft: '-2.5%', marginBottom: '-2.5%', paddingBottom: '1%'}} >
                        <center>
                            <hr></hr>
                            <p style={{fontSize:'23px', color:'white', lineHeight: '90%'}}>Registration Link: <a href='http://bit.ly/reg--form'>http://bit.ly/reg--form</a></p>
                            <p style={{fontSize:'23px', color:'white', lineHeight: '90%'}}>Details: <a href='http://bit.ly/iitmadras_workshop'>http://bit.ly/iitmadras_workshop</a></p>
                        </center>
                    </div>
                </div>		
            </div>	
    )
  }
}

export default Workshops