// Write your code here

import './index.css'

const AppItem = props => {
  const {appDetails} = props

  const {appId, appName, imageUrl, category} = appDetails

  console.log(appId, category)

  return (
    <>
      <li className="app-item-container">
        <img src={imageUrl} className="app-item-image" alt={appName} />
        <p className="app-item-name">{appName}</p>
      </li>
    </>
  )
}

export default AppItem
