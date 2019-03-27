import React from 'react';
import { withStyles } from '@material-ui/styles';

// core components
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import Grid from '@material-ui/core/Grid';

//expansion component
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Exo from '../../../assets/js/hiddenExo.jsx';
import 'typeface-roboto';

const styles = {
    appBar: {
        position: "relative",
    },
    flex: {
        flex: 1
    },
    bazar: {
        padddingTop: "10vh",
    },
    root: {
        width: '100%',
    },
    heading: {
        fontSize: '1rem'
    }
};

function Transition(props) {
    return <Slide direction="up" {...props} />;

}

class HiddenSection extends React.Component {
    state = {
        open: false
    };

    handleClose = () => {
        this.setState({
            open: false
        });
    };

    render() {
        let user_keys = [];
        let konamiCode = "38,38,40,40,37,39,37,39,66,65";
        const { classes } = this.props;
        
            document.onkeydown = (event) => {
                user_keys.push(event.keyCode);
                if (user_keys.toString().indexOf(konamiCode) >= 0) {
                    return this.setState({
                        open: true
                    });
                }
            }
        
        return (
            <div>
                
                <Dialog
                    fullScreen
                    open={this.state.open}
                    onClose={this.handleClose}
                    TransitionComponent={Transition}
                >
                    <AppBar className={classes.appBar}>
                        <ToolBar>
                            <Typography variant="title" color="inherit" className={classes.flex}>
                                Skillz Project
                            </Typography>
                            <IconButton color="inherit" onClick={this.handleClose} aria-label="close">
                                <CloseIcon />
                            </IconButton>
                        </ToolBar>
                    </AppBar>
                    <Grid 
                        container
                        direction="column"
                        justify="center"
                        alignItems="center"
                        className={classes.bazar}
                    >
                        <Grid item xs={12} className={classes.root}>
                            {
                                Exo.map((el, key)=>{
                                    console.log(el)
                                    return (
                                        <ExpansionPanel  key={key}>
                                            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                                <Typography className={classes.heading}>{el.title}</Typography>
                                            </ExpansionPanelSummary>
                                            <ExpansionPanelDetails>
                                                <Typography variant="h5" component="h3">{el.subTitle}</Typography>
                                                <Typography >{el.descrip}</Typography>
                                            </ExpansionPanelDetails>                    
                                        </ExpansionPanel>
                                    )
                                })
                            }
                        </Grid>
                    </Grid>
                </Dialog>
            </div>
        )

    }
}

export default withStyles(styles)(HiddenSection);