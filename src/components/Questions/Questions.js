import React from 'react'
import Collapsible from 'react-collapsible';

import classes from './Questions.module.css'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';


//Creating separate trigger functions to making it possible to include text and and icon and to style elements separately.
const triggerOne = () => (
    <div className={classes.QuestionContainer}>
        <h2 className={classes.Question}>What has been your <b>favourite place to work</b> so far? <br /> What was it about working there that made it your favourite?</h2>
        <div className={classes.ExpandMore}>
            <ExpandMoreIcon style={{ fontSize: '2rem' }} />
        </div>
    </div>
)
const triggerTwo = () => (
    <div className={classes.QuestionContainer}>
        <h2 className={classes.Question}>What’s something that you <b>wish you could have</b> as a part of your job?</h2>
        <div className={classes.ExpandMore}>
            <ExpandMoreIcon style={{ fontSize: '2rem' }} />
        </div>
    </div>
)

const triggerThree = () => (
    <div className={classes.QuestionContainer}>
        <h2 className={classes.Question}>Reading the ​introduction to <b>Mevo</b>​ on our developer site, <br />
        what makes you the <b>most excited about</b> the potential of working as a Software Engineer here?</h2>
        <div className={classes.ExpandMore}>
            <ExpandMoreIcon style={{ fontSize: '2rem' }} />
        </div>
    </div>
)

//
const triggerOpenOne = () => (
    <div className={classes.QuestionContainer}>
        <h2 className={classes.Question}>What has been your <b>favourite place to work</b> so far? <br /> What was it about working there that made it your favourite?</h2>
        <div className={classes.ExpandLess}>
            <ExpandLessIcon style={{ fontSize: '2rem' }} />
        </div>
    </div>
)

const triggerOpenTwo = () => (
    <div className={classes.QuestionContainer}>
        <h2 className={classes.Question}>What’s something that you <b>wish you could have</b> as a part of your job?</h2>
        <div className={classes.ExpandLess}>
            <ExpandLessIcon style={{ fontSize: '2rem' }} />
        </div>
    </div>
)

const triggerOpenThree = () => (
    <div className={classes.QuestionContainer}>
        <h2 className={classes.Question}>Reading the ​introduction to <b>Mevo</b>​ on our developer site, <br />
        what makes you the <b>most excited about</b> the potential of working as a Software Engineer here?</h2>
        <div className={classes.ExpandLess}>
            <ExpandLessIcon style={{ fontSize: '2rem' }} />
        </div>
    </div>
)


export default function Questions() {
    return (
        <section className={classes.SectionContainer}>
            <Collapsible
                triggerClassName={classes.CustomTriggerCSS}
                triggerOpenedClassName={classes.CustomTriggerCSSOpen}
                contentInnerClassName={classes.CustomInnerContentCSS}
                contentOuterClassName={classes.CustomOuterContentCSS}
                easing={'cubic-bezier(0.175, 0.885, 0.32, 2.275)'}
                trigger={triggerOne()}
                triggerWhenOpen={triggerOpenOne()}>
                <p>
                    My last Job as an Account Manager and Product Coordinator at ANZ Nature Tours has been my favourite job so far.
                    I am a big fan of New Zealand myself and it was a great pleasure organising tours for overseas clients who have travelled very far to see this amazing country.
                    For a lot of these clients, it was a 'bucket-list dream' and they have saved a significant amount of money to make this dream come true.
                    So it was almost an honour, to help them planning their journey to Aotearoa.
                    <br />
                    Additionally, I was responsible for maintaining our tour operator software, participating in software update webinars and passing new techniques and knowledge on to the team.
                    <br /> I appreciated having this little extra responsibility and helping workmates whenever they were stuck.
                </p>
                <p>
                    Besides that, I also enjoyed the people I worked with. It was a friendly and fun atmosphere, and I enjoyed going to work each morning.
                    The good team environment in which everyone valued one another was powered by daily team huddles (stand-ups).
                    Sharing feelings, daily workload and road blocks opens up a whole new level of connection, support and
                    balances work more evenly amongst everyone. We also celebrated achievements with each other which was very rewarding and motivating.
                </p>
                <p>
                    In addition, we had monthly 1:1s with our Operations Manager to discuss our performance, achievements, issues, frustrations and/or goals,
                    and a chance to give and receive feedback.
                    But even outside of these scheduled meetings, management always had an open door for us.
                </p>
            </Collapsible>
            <Collapsible
                triggerClassName={classes.CustomTriggerCSS}
                triggerOpenedClassName={classes.CustomTriggerCSSOpen}
                contentInnerClassName={classes.CustomInnerContentCSS}
                contentOuterClassName={classes.CustomOuterContentCSS}
                easing={'cubic-bezier(0.175, 0.885, 0.32, 2.275)'}
                trigger={triggerTwo()}
                triggerWhenOpen={triggerOpenTwo()}>
                <p>
                    It would be great to
                </p>
            </Collapsible>
            <Collapsible
                triggerClassName={classes.CustomTriggerCSS}
                triggerOpenedClassName={classes.CustomTriggerCSSOpen}
                contentInnerClassName={classes.CustomInnerContentCSS}
                contentOuterClassName={classes.CustomOuterContentCSS}
                easing={'cubic-bezier(0.175, 0.885, 0.32, 2.275)'}
                trigger={triggerThree()}
                triggerWhenOpen={triggerOpenThree()}>
                <p>
                    I have actually been a fan of Mevo since I saw one of your super cool Audi e-trons outside of the Left Bank Arcade for the
                    first time a few years back in 2017. <br />
                    I remember, it immediately caught my attention and I went straight to your website to checkout this innovative service.
                </p>
                <p>
                    Looking at the Mevo fleet now and also browsing through your press articles, it is fascinating as well as almost relieving to see,
                    how quickly the concept of sharing a car grew in popularity and with that, the increased chance to lower emissions and make a positive
                    impact on our future.
                </p>
                <p>
                    Besides being a big fan of your service (and your European cars), I am impressed by your digital first approach and ambitious technology,
                    like keyless access to vehicles with mobile apps or the home zone indicator in your cars.
                </p>
                <p>
                    I believe that Mevo is a company that allows me to grow at immense speed and it would truly excite me to work with your team behind the scenes
                    to allow more users to have access to shared cars.
                    Self-driving cars?
                </p>
            </Collapsible>
            <div className={classes.NetworkingContainer}>
                <a className={classes.NetworkingLink} href='https://github.com/saskialein' target='_blank' rel="noreferrer">
                    <GitHubIcon style={{ fontSize: '3rem', padding: '10px' }} />
                </a>
                <a className={classes.NetworkingLink} href='https://www.linkedin.com/in/saskia-leinberger/' target='_blank' rel="noreferrer">
                    <LinkedInIcon style={{ fontSize: '3rem', padding: '10px' }} />
                </a>
            </div>
        </section>
    )
}