import Gallery from '@/components/Gallery'
import Hero from '@/components/Hero'
import Video from '@/components/Video'

const HomePage = () => {

  return (
    <div className='w-screen h-screen'>
        <Hero></Hero>
        <Video></Video>
        {/* <Gallery></Gallery> */}
        <Gallery></Gallery>
    </div>
  )
}

export default HomePage
