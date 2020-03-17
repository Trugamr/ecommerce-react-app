import React from 'react'
import { withRouter } from 'react-router-dom'
import './collection-preview.styles.scss'

import CollectionItem from '../../components/collection-item/collection-item.component'

const CollectionPreview = ({ title, items, history, match, routeName }) => {
  return (
    <div className="collection-preview">
      <h1
        className="title"
        onClick={() => history.push(`${match.path}/${routeName}`)}
      >
        {title.toUpperCase()}
      </h1>
      <div className="preview">
        {items.slice(0, 4).map(item => (
          <CollectionItem className="item" key={item.id} item={item} />
        ))}
      </div>
    </div>
  )
}

export default withRouter(CollectionPreview)
