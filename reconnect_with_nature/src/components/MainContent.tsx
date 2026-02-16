import SimpleImageSlider from "react-simple-image-slider";
const MainContent = () => {
    const images = [
        { url: 'https://www.reconnectwithnature.org/getmedia/c73578ce-1545-4104-af55-d26db3f1d569/Blue-Jay-1-peanut-shutterstock.jpg?width=1500&height=1000&ext=.jpg' },
        { url: 'https://www.reconnectwithnature.org/getmedia/140daf37-1d1a-4545-9149-4bd368c7d1a9/Indigo-Bunting-1-Hickory-Creek-Junction-Glenn_P_Knoblock-July-2022_6389.jpg?width=1500&height=1000&ext=.jpg' },
        { url:'https://www.reconnectwithnature.org/getmedia/6faa0f2f-99c1-4d15-bdcd-9e80896c22e4/Eastern-Bluebird-1-Kathleen-Mary-December-2023.jpg?width=1500&height=1000&ext=.jpg'}

    ]
    return (
        <div className=" px-27 mt-15 main-container w-screen flex">
            <div className="w-1/3  pr-27">
                <p style={{ fontFamily: 'Cabin' }} className="text-4xl mb-10 text-[#0E6A5B]">Latest Buzz</p>
                <p style={{ fontFamily: 'Cabin' }} className="text-2xl mb-1 text-[#514E45]">Wander at Will: A winter walk with Winston</p>
                <p style={{ fontFamily: 'Cabin' }} className=" mr-10 mb-1 font-extralight tracking-widest ">2/12/26</p>
                <p className="mb-5">Our Wander at Will series takes us to Lake Renwick Preserve for a winter dog walk.</p>
                <p style={{ fontFamily: 'Cabin' }} className="text-2xl mb-1 text-[#514E45]">Love is in the air, and at this time of year it may smell like skunk</p>
                <p style={{ fontFamily: 'Cabin' }} className=" mr-10 mb-1 font-extralight tracking-widest ">2/12/26</p>
                <p className="mb-5 pr-3">It's skunk mating season, and as male skunks are out and about searching for mates, we may have more close encounters with these animals, resulting in that telltale smell in the air. </p>
            </div>
            <div className="w-2/3 mt-1 px-8">
                <p style={{ fontFamily: 'Cabin' }} className="text-4xl mb-2 text-[#0E6A5B]">Not all blue birds are bluebirds: Learn the difference between our blue-hued birds</p>
                <h1 className="mb-4">12/22/2023</h1>
                <img src="https://www.reconnectwithnature.org/getmedia/cc48b783-0dc4-4da2-ba1c-45fe6ff535d8/Eastern-bluebird-on-branch-Shutterstock.jpg?width=1500&height=1000&ext=.jpg" alt="Eastern Bluebird" />
                <p style={{ fontFamily: 'Cabin' }} className="text-gray-600 opacity-70">Not all blue birds are bluebirds. Northern Illinois is home to several blue-feathered birds, including the eastern bluebird seen here. (Photo via Shutterstock)</p>
                <p>Blue isn't as common in nature as some other colors, but a handful of blue birds do call our area home, which can cause some confusion. Our blue feathered friends include birds both big and small. The biggest is the great blue heron, which, at as much as 4 1/2 feet tall and the only wading bird in our area that is blue, isn't often confused with other birds. Among songbirds, though, we see three blue birds locally, and this can lead to some mistaken ID. <br className="mb-5" />

                    Our three blue songbirds are the blue jay, the eastern bluebird and the indigo bunting. The indigo bunting is the brightest blue of the group — and not as often confused with bluebirds and blue jays. Male indigo buntings sport almost entirely blue feathers, and the blue is a teal-like shade, the Cornell Lab of Ornithology(Opens in a new window) reports. As with many songbirds, female indigo buntings are not as brightly colored. Instead, they are muted brown in color.<br className="mb-5" />

                    The two blue birds that are sometimes confused with one another are the blue jay and the eastern bluebird. This confusion may be in part because people tend to use the term bluebird or blue jay generically to refer to any blue bird, although they are distinct and separate species. Both birds are predominantly blue, but that's about where the similarities between these birds end.
                    <br className="mb-5" />
                    As far as physical appearances are concerned, both blue jays and bluebirds are mostly blue. Blue jays have blue head crests, backs and wings, but their chests and bellies are white and they have white and black barring on their wings, the Cornell Lab reports. Both male and female blue jays have the same coloring. Eastern bluebirds also have blue heads, backs and wings, but their chests are brick-red or brownish-red fading into a white belly. Females are not as bright in appearance, mostly gray where the males are blue, but with some tinges of blue.
                    <br className="mb-5" />
                    Blue jays are the larger of the two birds, between 10 inches and 12 inches long with a wingspan of 13 inches to 17 inches and weighing between 2 1/2 ounces and 3 1/2 ounces, according to the Cornell Lab. For the sake of comparison, eastern bluebirds stand between 6 inches and 8 1/2 inches long with a wingspan of up to 12 1/2 inches. They weigh only about 1 ounce.
                    <br className="mb-5" />
                    Where we see these birds varies pretty substantially. Blue jays are forest birds, and they prefer forests with mature oak trees, according to the Cornell Lab. Eastern bluebirds, on the other hand, are grassland birds. They are mostly seen in open areas like fields, parks, pastures and prairies.
                    <br className="mb-5" />
                    The diet of the two blue birds is similar, but blue jays have a more varied diet. They eat insects, nuts, seeds and grains. Their love of acorns — the fruit of oak trees — helped oak trees spread across North America during the last glacial age. Eastern bluebirds are insectivores, and they specialize in eating insects they can catch on the ground, including caterpillars, crickets and grasshoppers. In the fall and winter, when insects are less plentiful, they switch over to eating berries and other fruit. On occasion they may also eat small reptiles and amphibians.
                    <br className="mb-5" />
                    Both eastern bluebirds and blue jays can be seen in northern Illinois all year, but blue jays are more common in winter. They do not migrate, so they stay in their breeding range throughout the year, the Cornell Lab reports. Eastern bluebirds are migratory, but some of the birds will stay on their range all year and some birds that breed farther north will migrate south for winter. Bluebirds that live in the southern part of their range will stay put all year.
                    <br className="mb-5" />
                    The eastern bluebird is the only bluebird that lives in Illinois and the blue jay is the only jay we see in the area, but there are other similar-looking bluebirds and jays living elsewhere in the United States. Among bluebirds, the western bluebird looks quite similar to the eastern bluebird but can be found only along the Pacific Coast and the desert southwest. The mountain bluebird is also predominantly blue, but a brighter shade than the eastern and western bluebirds. It can be found across the Rocky Mountains, Pacific Coast and desert southwest.
                    <br className="mb-5" />
                    Four other jay species in the United States are all or predominantly blue, but none are as widespread as the familiar blue jay, which lives across the eastern two-thirds of the United States. The Steller's jay lives only in the western United States, while the Woodhouse's scrub-jay can be found in the southwestern United States. The California scrub-jay lives up and down the Pacific Coast, while the Florida scrub-jay is the only bird in the United States that lives exclusively in Florida, according to Cornell Lab.</p>
                <div className="px-10 relative mt-3">
                <SimpleImageSlider
                    width={700}
                    height={450}
                    images={images}
                    showBullets={false}
                    showNavs={true}
                />

                </div>
            </div>
        </div>
    )
}

export default MainContent
