import {
  LocationCardContainer,
  Heading,
  HeadingDescriptionConatiner,
  Paragraph,
} from './styledComponents'
import './index.css'

const LocationContainer = props => {
  const {LocationData} = props
  const {imageUrl, description, name} = locationData

  return (
    <li className="list-container">
      <LocationCardContainer>
        <img src={imageUrl} alt={name} className="image" />
        <HeadingDescriptionConatiner>
          <Heading>{name}</Heading>
          <Paragraph>{description}</Paragraph>
        </HeadingDescriptionConatiner>
      </LocationCardContainer>
    </li>
  )
}

export default LocationContainer
