import { useEffect, useState } from "react";
import styles from './dayNight.module.css'
import { CSSTransition, TransitionGroup } from "react-transition-group";

function Dn() {
    const [showSun, setShowSun] = useState(true);
    const [showMoon, setShowMoon] = useState(false);
    const [show, setShow] = useState(true)

    var scroll =  window.addEventListener('scroll', function () {
        const scrollPosition = document.documentElement.scrollTop;
        // console.log(scrollPosition);

        if (scrollPosition > 500) {
            setShow(false);
        } else {
            setShow(true)
        }
    
    

    });

    

    return (

        <div>
            
{/* <TransitionGroup>
            <CSSTransition in={show} timeout={300} className={styles.Show} unmountOnExit>
                <div>
                {show ?
                    <img className={styles.Sun} src="https://img.freepik.com/premium-photo/sun-cartoon-watercolor-childrens-illustration-of-the-sun-drawn-by-hand-isolated-on-a-white_276714-533.jpg?w=740" alt="" />
                    : <img className={styles.Moon} src="https://hi-news.ru/wp-content/uploads/2013/08/wallpaper-111288-750x469.jpg" alt="" />}
                    </div>
            </CSSTransition>
            </TransitionGroup>  */}


             {/* <CSSTransition in={true} timeout={300} classNames={styles.Show} unmountOnExit></CSSTransition>
            {showMoon? 
            <img className={styles.Moon} src="https://hi-news.ru/wp-content/uploads/2013/08/wallpaper-111288-750x469.jpg" alt=""/>
            : null}
            </CSSTransition> */}

<TransitionGroup>
        {show? 
        <CSSTransition in={show} timeout={200} className={styles.Show} unmountOnExit>
            <div>
            <img className={styles.Sun} src="https://img.freepik.com/premium-photo/sun-cartoon-watercolor-childrens-illustration-of-the-sun-drawn-by-hand-isolated-on-a-white_276714-533.jpg?w=740" alt="" />
            </div>
        </CSSTransition>
        : null
        }
    </TransitionGroup>



    <TransitionGroup>
        {show? null :
        <CSSTransition in={show} timeout={200} className={styles.Show} unmountOnExit>
            <div>
            <img className={styles.Moon} src="https://hi-news.ru/wp-content/uploads/2013/08/wallpaper-111288-750x469.jpg" alt=""/>
            </div>
        </CSSTransition>
        }
    </TransitionGroup>



            <img className={styles.Cloud} src="https://img.freepik.com/premium-photo/a-white-cloud-with-a-white-background-and-the-word-cloud-on-it_771335-59254.jpg?w=996" alt="" />
            <img className={styles.Cloud} src="https://img.freepik.com/premium-photo/a-white-cloud-with-a-white-background-and-the-word-cloud-on-it_771335-59254.jpg?w=996" alt="" />
            <img className={styles.Cloud} src="https://img.freepik.com/premium-photo/a-white-cloud-with-a-white-background-and-the-word-cloud-on-it_771335-59254.jpg?w=996" alt="" />
            <img className={styles.Cloud} src="https://img.freepik.com/premium-photo/a-white-cloud-with-a-white-background-and-the-word-cloud-on-it_771335-59254.jpg?w=996" alt="" />
            <img className={styles.Cloud} src="https://img.freepik.com/premium-photo/a-white-cloud-with-a-white-background-and-the-word-cloud-on-it_771335-59254.jpg?w=996" alt="" />
            <img className={styles.Cloud} src="https://img.freepik.com/premium-photo/a-white-cloud-with-a-white-background-and-the-word-cloud-on-it_771335-59254.jpg?w=996" alt="" />
            <img className={styles.Cloud} src="https://img.freepik.com/premium-photo/a-white-cloud-with-a-white-background-and-the-word-cloud-on-it_771335-59254.jpg?w=996" alt="" />
            <img className={styles.Cloud} src="https://img.freepik.com/premium-photo/a-white-cloud-with-a-white-background-and-the-word-cloud-on-it_771335-59254.jpg?w=996" alt="" />
        </div>
    )

};
export default Dn;