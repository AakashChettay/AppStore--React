import './index.css'

const AppItem = props => {
  const {projectDetails} = props
  const {imageUrl, appName} = projectDetails
  return (
    <li className="project-item-container">
      <img className="project-item-image" src={imageUrl} alt={appName} />
      <p className="appNameStyle">{appName}</p>
    </li>
  )
}

export default AppItem
