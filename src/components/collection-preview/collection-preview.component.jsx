import React from 'react'
import { withRouter } from 'react-router-dom'

import {
  CollectionPreviewContainer,
  CollectionPreviewTitle,
  PreviewContainer
} from './collection-preview.styles'

import CollectionItem from '../../components/collection-item/collection-item.component'

const CollectionPreview = ({ title, items, history, match, routeName }) => {
  return (
    <CollectionPreviewContainer>
      <CollectionPreviewTitle
        onClick={() => history.push(`${match.path}/${routeName}`)}
      >
        {title.toUpperCase()}
      </CollectionPreviewTitle>
      <PreviewContainer>
        {items.slice(0, 4).map(item => (
          <CollectionItem className="item" key={item.id} item={item} />
        ))}
      </PreviewContainer>
    </CollectionPreviewContainer>
  )
}

export default withRouter(CollectionPreview)
