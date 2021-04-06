import classes from './hero.module.css'
import Image from 'next/image'

function Hero() {
    return (
        <section className={classes.hero}>
            <div className={classes.image}>
                <Image
                    src='/images/site/max.png'
                    alt='An image showing Max'
                    width={300}
                    height={300} />
            </div>
            <h1>Hi, I'm Daniel</h1>
            <p>
                I blog about webDevelopment - especially frontend frameworks like React
          </p>
        </section>
    )
}

export default Hero
