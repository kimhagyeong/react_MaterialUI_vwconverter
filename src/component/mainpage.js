import React, { Component } from 'react';
import './mainpage.css';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

class mainpage extends Component{
    constructor(props) {
        super(props);
        this.state = {
            width:100,
            smallwidth:100,
            gridwidth:100,
        }
    }
    componentDidMount(){
        var current_width=window.innerWidth;
        var tmp_width=100;
        var tmp_small_width=100;
        var tmp_grid_width=100;
        // container inner padding이 24px

        if(current_width>1920){
            // 1920-24-24 이 전체 화면에서 차지하는 비율을 계산하면 
            tmp_width=1872/current_width*100;
            tmp_small_width=1310.4/current_width*100;
            tmp_grid_width=(1920-48-24)*0.586/current_width*100;
        }
        else{
            //48px이 전체화면에 차지하는 비율을 계산하면
            tmp_width=100-(48/current_width*100);
            tmp_small_width=(current_width-48)*0.7/current_width*100;
            // spacing 3 은 12px이고 xs={7}은 70퍼가 아니라 58.333
            tmp_grid_width=(current_width-48-24)*0.586/current_width*100;
        }
        this.setState({
            width:tmp_width,
            smallwidth:tmp_small_width,
            gridwidth:tmp_grid_width
        });
    }
    render(){
        return(
            <Container maxWidth="xl" style={{backgroundColor:"gray", height:"90vh"}}>
                container
                <div style={{width:"100%",height:"35vh",backgroundColor:"rgba(251, 255, 0, 0.664)"}}>
                    innder Div = width:100%
                <div style={{width:"100vw", height:"15vh",backgroundColor:"rgba(187, 70, 70, 0.664)"}}>
                    가로 화면이 1920px이하인 경우는 materialUi의 container xl특성상 양쪽 패딩이 24px들어간 100%의 화면이여서<br />
                    100vw을 넣으면 48px만큼 빠지게 된다. 화면이 큰 모니터에서 보면 더욱 이상함을 느낄 수 있다. <br /><br />
                    하지만 가끔 디브에 %가 아닌 vw를 넣어야 하는 경우가 있거나, 컴포넌트화한 다른 모듈에서 vw를 사용하고 있을 때<br />
                    어떤 화면에서도 컨테이너 안에 내용이 쏙 들어가면 좋을 것 같다는 생각을 하게 될 것이다.
                </div>
                <div style={{width:this.state.width+"vw",height:"10vh", backgroundColor:"red"}}>
                    양쪽 padding 24px을 화면 비율에서 차지하는 값을 계산하면 vw로 환산하여 width를 %대신 vw를 사용해서도 꽉차게 그릴 수 있다.
                </div>
                </div>
                <div style={{width:"70%",height:"20vh",backgroundColor:"rgba(255, 196, 0, 0.664)"}}>
                    만약 container 안에서 70퍼 만 사용한다면
                    <div style={{width:this.state.smallwidth+"vw",height:"10vh", backgroundColor:"red"}}>
                    안쪽에 Div가 vw단위를 써서 꽉채우려면 100%로 했던 계산에서 수치를 바꾼다.
                    </div>
                </div>
                <Grid container spacing={3}>
                    <Grid item xs={7} style={{backgroundColor:"blue"}}>
                        <div style={{width:"100%",height:"10vh",backgroundColor:"green"}}>
                            하지만 만약 grid를 썼고 spacing이 3이라면 padding에 12px이 들어간다는 것을 알아야 한다.
                        </div>
                    </Grid>
                    <Grid item xs={5} style={{backgroundColor:"pink"}}>
                    <div style={{width:"100%",height:"10vh",backgroundColor:"green"}}>
                            이 또한 안에 있는 이 초록색 div를 vw 단위로 쓰고 싶다면 전체 화면의 크기를 알아야하고 계산해야한다.
                    </div>
                    </Grid>
                </Grid>
                <Grid container spacing={3}>
                    <Grid item xs={7} style={{backgroundColor:"blue"}}>
                        <div style={{width:this.state.gridwidth+"vw",height:"10vh",backgroundColor:"green"}}>
                            xs=7 인 것은 70퍼센트가 아니라 7/12퍼센트이다.
                        </div>
                    </Grid>
                </Grid>
            </Container>
        )
    }
}

export default mainpage;

