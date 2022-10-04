import Image from 'next/image';
import classes from './Welcome.module.css';

const Welcome = () => {
    return (
        <section className={classes.welcome}>
            <div className={classes.image}>
                <Image
                    src='/images/Aras.jpg'
                    alt='Image of Aras'
                    width={300}
                    height={300}
                    objectFit='cover' />
            </div>
            <h1>Hi I am Aras!</h1>
            <p>This is my blog and personal website!</p>
        </section>
    );
};

export default Welcome;