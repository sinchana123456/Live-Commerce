import Button from '../UI/Button';
import classes from './Home.module.css';

const Home = () => {

    const tracks = [
        {
          id: "1",
          date: "09-08-2023",
          place: "France",
          description: "The Dream Place",
        },
        {
          id: "",
          date: "",
          place: "",
          description: "",
        },
        {
          id: "",
          date: "",
          place: "",
          description: "",
        },
        {
          id: "",
          date: "",
          place: "",
          description: "",
        },
        {
          id: "",
          date: "",
          place: "",
        description: "",
        },
        {
          id: "",
          date: "",
          place: "",
          description: "",
        }
      ];

      const trackList = tracks.map((item) => {
        return (
            <li className={classes['tour-item']} key={item.id}>
                <span className={classes['tour-date']}>{item.date}</span>
                <span className={classes['tour-place']}>{item.place}</span>
                <span className={classes['tour-description']}>{item.description}</span>
                <Button className={classes.button}> BUY TICKET</Button>
            </li>
        );
      });

    return(
        <section className={classes.home}>
            <h1>Lucky Dips</h1>
            <div className={classes.wrapper}>
              {trackList}
            </div>
        </section>
    );
};

export default Home;