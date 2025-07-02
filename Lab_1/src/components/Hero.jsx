import PropTypes from 'prop-types'

//this is the first test component
const Hero = ({
  title = 'Become a React Dev',
  subtitle = 'Find the React job that fits your skill set',
  mode = 'dark',
}) => {
  return (
    <section
      className={
        mode == 'light'
          ? 'bg-indigo-200 py-20 mb-4'
          : mode == 'colorful'
          ? 'bg-purple-700 py-20 mb-4'
          : 'bg-indigo-700 py-20 mb-4'
      }
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <div className="text-center">
          <h1
            className={
              mode == 'light'
                ? 'text-4xl font-extrabold text-black sm:text-5xl md:text-6xl'
                : mode == 'colorful'
                ? 'text-4xl font-extrabold text-green-400 sm:text-5xl md:text-6xl'
                : 'text-4xl font-extrabold text-white sm:text-5xl md:text-6xl'
            }
          >
            {title}
          </h1>
          <p
            className={
              mode == 'light'
                ? 'my-4 text-xl text-black'
                : mode == 'colorful'
                ? 'my-4 text-xl text-green-200'
                : 'my-4 text-xl text-white'
            }
          >
            {subtitle}
          </p>
        </div>
      </div>
    </section>
  )
}
export default Hero

Hero.PropTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  mode: PropTypes.string,
}
