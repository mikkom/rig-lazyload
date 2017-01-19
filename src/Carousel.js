import React from 'react'
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import './Carousel.css'

const hashes = [
    'b845c9308aaae5898c82c303a64bc089',
    'd08d7caf6647240cc62668dec08c888f',
    'de0b6a9ce222b789b8dd254d0b1613c9',
    'eba50f2dec0a8453409a72205f68a0a4',
    '78223aa64e1cc17cf38ec775976f7bbb',
    '54394874765a9fad05d25af0e00c8a2c',
    'f36b3a6a37231fc6392aff2799bc21cb',
    '4e93b9b1d4e2a53fa883fe6c9986a89f',
    'e45c00fcf4993bf7beb7e2009dd6e03d',
    '561ccb20a46628e126895235b7831509',
    'a644ef3ff5fcb900369b897199e6e0e6'
]

const urlPrefix = (size = '651x434') => `http://d3ls91xgksobn.cloudfront.net/${size},fit\
/etuovimedia/images/property/import/585/588585/0e76b9541118d347871c0e0e51d244c4`
const imageUrl = hash => size => `${urlPrefix(size)}/${hash}/ORIGINAL.jpeg`
const imageUrlFns = hashes.map(imageUrl)

const images = imageUrlFns.map(f => ({
    original: f(),
    thumbnail: f('150x100')
}))

const Carousel = () =>
    <ImageGallery
        items={images}
        slideInterval={2000}
        lazyLoad
        infinite
        showBullets
    />

export default Carousel
