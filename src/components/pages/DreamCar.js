import image from '../images/download.jpg';
import image1 from '../images/audi.jpg';
import classes from './DreamCar.module.css';





const DreamCar = () => {
    return(
        <section className={classes.about}>
        <h1>Dream Car</h1>
        {/* <p>
        Buy your Dream Car ticket for only AED 150 and be 
        in with a chance to drive away in your dream car every month with Big Ticket.<br />
        Please note: Car model and color are subject to change.
        </p>
        <p>
        If you buy 2 car tickets, we’ll give you 1 extra for free!<br />
        Your free ticket is only applicable on purchase of 2 tickets
         on same car promotion in 1 transaction.<br />
        Offer is applicable on one car promotion only, 
        2 separate transactions will not be eligible for the offer.<br />  
        </p> */}
        <div className={classes.wrapper}>
          <img src={image} alt="download"/>
          <p>
            BMW 
            <br />
            SERIES 22
            <br />
            DrawDate: 02-06-2022
            <br />
          </p>
        </div>
        {/* <div className={classes.wrapper1}> */}
        <img src={image1} alt="audi"/>
          <p>
            AUDI TT
            <br />
            SERIES 22
            <br />
            DrawDate: 19-07-2023
            <br />
          </p>
        {/* </div> */}
        {/* const slides = [
  
]; */}
       
      </section>
    )
};

export default DreamCar;