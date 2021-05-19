const EVENTS_DATA = [
    {
        event:0,
        date:'<i></i>',
        teamSize : 'upto 2 Members',
        contentHTML : ``
    },
    {
        event:1,
        date:'<i></i>25-26th May, 2020',
        teamSize : '<i></i>upto 4 Members',
        contentHTML : `
            <span>Themes</span>  
            <ul>
                <li>Defence Forces</li> 
                <li>Medical and HealthCare Sector</li> 
                <li>Marine Life ecosystem</li> 
            </ul>
            <span>25th May - Prelim / Qualifier Round</span>
            <p>Teams would be required to submit an abstract of selected theme explaining the problem statement and the key concepts guiding their idea in any of the following formats: PPT/text document/audio/video within stipulated time. Abstract should be submitted at the mail id provided on the website. In case of audio/video file, it should be uploaded on google drive and drive link should be shared in the mail sent by the participants.</p>
            <span>IMPORTANT NOTE-</span>
            <ul>
            <li>PPT/text document should not exceed 10 slides/pages.</li>
            <li>Audio/video file should be within 1-2 minutes.</li>
            <li>Abstract submission deadline – 9 AM (25th May)</li>
            </ul>
            <span>Judging Parameters</span>
            <ul>
                <li>Originality of Idea</li> 
                <li>Practicality / Feasibility</li>
                <li>Effectiveness ( Scale on which people are affected )</li>
                <li>Ecological sustainability</li>
            </ul>
            <span>Prelim Result Declaration</span>
            <p>12 PM (25th May)</p>
            <p>Selected 10 Teams will advance to next round on 26th May.</p> 
            <span>26th May : 2nd Round</span>
            <p>The Show Streak Round</p>
            <span>STAGE 1</span>
            <ul>
                <li>In this round all 5 teams would be asked a common question based on accountability and acceptability of the idea presented.</li>
                <li>No team would be allowed to listen to any other team’s answers.</li>
                <li>Based on the final scores, winners shall be declared.</li>
            </ul>
            <span>Rules</span>
            <ul>
                <li>The decisions of the judges shall be final and abiding.</li>
                <li>All the 4 team members must be from the same college/school.</li>
                <li>In case of any on the spot discrepancy, the decision of the organizers would be considered final.</li>
            </ul>
            <span>Download PDF/Doc <a href="#"></a></span>
        `
    },
    
    {
        event:2,
        date:'<i></i>',
        teamSize : '<i></i>upto 4 Members',
        contentHTML : `
         
        `
    },
    {
        event:3,
        date:'<i></i>24-25th May',
        teamSize : '<i></i>upto 2 Members',
        contentHTML : `
        <span>Round 1 : Basic 3D Modelling</span> 
        <p>Participants are given 5 3D models and they are required to make them in the given time using Solidworks.
            <br/>Time Given - 45 Minutes
            <br/>Date - 24 May 2021
        </p>
        <span>Judging Criteria For 1st Round</span>
        <ul>
            <li>Accuracy - Percentage of error in the dimensions in the model.</li> 
            <li>Number of 3d Models one can make in given time.</li> 
        </ul>
        <span>Round 2 : Advanced 3D Modelling</span>
        <p>
        Participants are given advanced 3 3D models which involve many commands and they are required to make the number of models they can in given time. 
        <br/>Date - 25 May 2021
        </p>
        <span>Judging Criteria For 2nd Round</span>
        <ul>
        <li>Accuracy - Percentage of error in dimensions in the model.</li>
        <li>Number of models they can make in given time.</li>
        </ul>
        <p>Participants are given a google form where they are required to upload all the 3d models they make.</p>
        `
    }

]
class EventSelector{
    constructor(event_wrapper, date_field, team_field, content_field){
        this.event_wrapper = document.querySelector(event_wrapper);
        this.content_field = document.querySelector(content_field);
        this.date_field = document.querySelector(date_field);
        this.team_field = document.querySelector(team_field);
    }
    removeAll = ()=>{
        Array.from(this.event_wrapper.children).forEach((element)=>{
            element.classList.remove('selected');
        })
    }
    init = ()=>{
        Array.from(this.event_wrapper.children).forEach((element, index)=>{
            element.addEventListener('click',()=>{
                this.removeAll();
                element.classList.add('selected');
                this.content_field.innerHTML = EVENTS_DATA[index].contentHTML
                this.date_field.innerHTML = EVENTS_DATA[index].date;
                this.team_field.innerHTML = EVENTS_DATA[index].teamSize;
            })
        })
    }
}

let event_ = new EventSelector('div.event-nav-grp', 'span.small.date', 'span.small.team','div.event-content-inner');
event_.init();
