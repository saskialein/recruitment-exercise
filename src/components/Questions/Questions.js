import React from 'react'
import Collapsible from 'react-collapsible';

import classes from './Questions.module.css'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

const triggerSiblingOne = () => (
    <div className={classes.HeaderContainer}>
      <h2>What has been your <b>favourite place to work</b> so far? <br /> What was it about working there that made it your favourite?</h2>
      <div className={classes.ExpandMore}>
            <ExpandMoreIcon style={{fontSize: '2rem'}} />
        </div>
    </div>
)
const triggerOpenOne = () => (
    <div className={classes.HeaderContainer}>
      <h2>What has been your <b>favourite place to work</b> so far? <br /> What was it about working there that made it your favourite?</h2>
        <div className={classes.ExpandLess}>
            <ExpandLessIcon style={{fontSize: '2rem'}}/>
        </div>
    </div>
)

const triggerSiblingTwo = () => (
    <div className={classes.HeaderContainer}>
      <h2>What’s something that you <b>wish you could have</b> <br /> as a part of your job?</h2>
      <div className={classes.ExpandMore}>
            <ExpandMoreIcon style={{fontSize: '2rem'}} />
        </div>
    </div>
)
const triggerOpenTwo = () => (
    <div className={classes.HeaderContainer}>
      <h2>What’s something that you <b>wish you could have</b> <br /> as a part of your job?</h2>
      <div className={classes.ExpandLess}>
            <ExpandLessIcon style={{fontSize: '2rem'}}/>
        </div>
    </div>
)

const triggerSiblingThree = () => (
    <div className={classes.HeaderContainer}>
      <h2>Reading the ​introduction to <b>Mevo</b>​ on our developer site, <br/> what makes you the <b>most excited about</b> the potential of working as a Software Engineer here?</h2>
      <div className={classes.ExpandMore}>
            <ExpandMoreIcon style={{fontSize: '2rem'}} />
        </div>
    </div>
)
const triggerOpenThree = () => (
    <div className={classes.HeaderContainer}>
      <h2>Reading the ​introduction to <b>Mevo</b>​ on our developer site, <br/> what makes you the <b>most excited about</b> the potential of working as a Software Engineer here?</h2>
      <div className={classes.ExpandLess}>
            <ExpandLessIcon style={{fontSize: '2rem'}}/>
        </div>
    </div>
)
  


export default function Questions() {
    return (
        <section className={classes.Container}>
            <Collapsible
                triggerClassName={classes.CustomTriggerCSS}
                triggerOpenedClassName={classes.CustomTriggerCSSOpen}
                contentInnerClassName={classes.CustomInnerContentCSS}
                contentOuterClassName={classes.CustomOuterContentCSS}
                easing={'cubic-bezier(0.175, 0.885, 0.32, 2.275)'}
                trigger={triggerSiblingOne()}
                triggerWhenOpen={triggerOpenOne()}
            >
                <p>Lorem ipsum</p>
                <p>dolor sit</p>
            </Collapsible>
            <Collapsible
                triggerClassName={classes.CustomTriggerCSS}
                triggerOpenedClassName={classes.CustomTriggerCSSOpen}
                contentInnerClassName={classes.CustomInnerContentCSS}
                contentOuterClassName={classes.CustomOuterContentCSS}
                easing={'cubic-bezier(0.175, 0.885, 0.32, 2.275)'}
                trigger={triggerSiblingTwo()}
                triggerWhenOpen={triggerOpenTwo()}>
            
                <p>Lorem ipsum</p>
            </Collapsible>
            <Collapsible
                triggerClassName={classes.CustomTriggerCSS}
                triggerOpenedClassName={classes.CustomTriggerCSSOpen}
                contentInnerClassName={classes.CustomInnerContentCSS}
                contentOuterClassName={classes.CustomOuterContentCSS}
                easing={'cubic-bezier(0.175, 0.885, 0.32, 2.275)'}
                trigger={triggerSiblingThree()}
                triggerWhenOpen={triggerOpenThree()}>
                <p>Lorem ipsum</p>
            </Collapsible>
        </section>
    )
}