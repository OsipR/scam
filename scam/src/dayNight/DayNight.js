import { useEffect, useRef, useState } from "react";
import styles from './dayNight.module.css'
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function Dn() {
    const [showMoon, setShowMoon] = useState(true);
    const [show, setShow] = useState(true)
    
    
    const [active, setActive] = useState(false)
    const nodeRef = useRef(null)
    
    
    const [showSun, setShowSun] = useState(true);
    const {ref, inView } = useInView({
        triggerOnce: true,
        ootMargin: '-100px'
    });

    useEffect(() => {
        if (inView) {
          setShowSun(true);
        } else {
          setShowSun(false);
        }
      }, [inView]);
    // const handleIntersection = (entries) => {
    //     if (!entries[0].isIntersecting) {
    //       setShowSun(false);
    //     }
    //   };

// useEffect(() => {
//     if (inView) {
//         setActive(true);
//     }

// }, [inView])


// console.log(inView)

    const sunAnimation = {
        hidden: {
            x: -100,
            opacity: 0,
        },
        visible: {  
            x: 0,
            opacity: 1,
        }
    };

    const moonAnimation = {
        hiddenMoon: {
            x:-150,
            opacity: 0,
        },
        visibleMoon: {
            x: 0,
            opacity: 1,
        }
        }

    return (

        <div className={styles.Dn}>
            
{/* <div>
    {showSun? (
        <div ref={ref}>
            <img  className={styles.Sun2} src="https://img.freepik.com/premium-photo/sun-cartoon-watercolor-childrens-illustration-of-the-sun-drawn-by-hand-isolated-on-a-white_276714-533.jpg?w=740" alt="" />
        </div>
    ) : (
        <div>
            <img className={styles.Moon2} src="https://hi-news.ru/wp-content/uploads/2013/08/wallpaper-111288-750x469.jpg" alt=""/>
        </div>
    )}
    
    <div>
        {inView ? 'Reached the bottom of the page!' : 'Scroll down to see the moon!'}
      </div>
</div> */}





{/* <div>
<img  className={styles.Sun} src="https://img.freepik.com/premium-photo/sun-cartoon-watercolor-childrens-illustration-of-the-sun-drawn-by-hand-isolated-on-a-white_276714-533.jpg?w=740" alt="" />
</div>



 <div>
<img ref={ref} className={styles.Moon} src="https://hi-news.ru/wp-content/uploads/2013/08/wallpaper-111288-750x469.jpg" alt=""/>
 </div> */}



{/* <TransitionGroup>
        {show? 
        <CSSTransition nodeRef={nodeRef} in={show} timeout={200} classNames="my-node" unmountOnExit>
            <div ref={nodeRef}>
            <img className={styles.Sun} src="https://img.freepik.com/premium-photo/sun-cartoon-watercolor-childrens-illustration-of-the-sun-drawn-by-hand-isolated-on-a-white_276714-533.jpg?w=740" alt="" />
            </div>
        </CSSTransition>
        : null
        }
    </TransitionGroup>



    <TransitionGroup>
        {show? null :
        <CSSTransition nodeRef={nodeRef} in={show} timeout={200} classNames="my-node" unmountOnExit>
            <div ref={nodeRef}>
            <img className={styles.Moon} src="https://hi-news.ru/wp-content/uploads/2013/08/wallpaper-111288-750x469.jpg" alt=""/>
            </div>
        </CSSTransition>
        }
    </TransitionGroup> */}

    {showSun? 
(<motion.section
initial="hidden"
whileInView="visible"

>

    <motion.div>
        
            <motion.img ref={ref} variants={sunAnimation} className={styles.Sun} src="https://img.freepik.com/premium-photo/sun-cartoon-watercolor-childrens-illustration-of-the-sun-drawn-by-hand-isolated-on-a-white_276714-533.jpg?w=740" alt="" />
            </motion.div>


</motion.section>)
:
(<motion.section
initial="hiddenMoon"
whileInView="visibleMoon"
className={styles.moonDiv}
>

    <motion.div >
            <motion.img  variants={moonAnimation} className={styles.Moon} src="https://hi-news.ru/wp-content/uploads/2013/08/wallpaper-111288-750x469.jpg" alt=""/>
            </motion.div> 

</motion.section>) }

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