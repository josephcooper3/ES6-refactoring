import React from 'react'
import './FeaturesList.css';

const FeaturesList = (props) => {

  const features = props.features.map((feature, index) => {
    const {name, description, MDNLink, isImplemented, implementations} = feature;
    return (
    <ul key={index}>
      <li>
        <h3>{name}</h3>
        <p>{description}</p>
        <a href={MDNLink}>📖Documentation</a>
        <h5>Implemented? {isImplemented ? "✅": "❌"}</h5>
        <p>Possible Implementations:</p> 
        <p><code>{implementations}</code></p>
      </li>
    </ul>
    )
  })

  return (
  <div>
    {features}
  </div>
  )


}

export { FeaturesList as default }