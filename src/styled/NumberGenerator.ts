import { createUseStyles } from "react-jss";
const useStyles=createUseStyles({
    container:{
        display:'flex',
        background:'rgb(91, 94, 166)',
        boxShadow:'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;',
        justifyContent:'space-between',
        margin:'20px'
    },
    currContainer:{
        background:'#03C03C',
        boxShadow:'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
        margin:'20px',
        padding:'20px'
    },
    prevContainer:{
        background:'#D2122E',
        boxShadow:'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
        margin:'20px',
        padding:'20px'
    },
    currNumberText:{
        fontSize:'25px',
        color:'#ffffff'
    },
    prevNumberText:{
        fontSize:'25px',
        color:'#ffffff'
    },
    currNumber:{
        fontSize:'60px',
        color:'#1a2527'
    },
    prevNumber:{
        fontSize:'60px',
        color:'#1a2527'
    }
})

export default useStyles;