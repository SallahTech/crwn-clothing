import React from 'react'
import CollectionItem from '../collection-item/Collection-item.component'
import './Collection-preview.styles.scss'

const Collectionpreview = ({ title, items }) => (
  <div className='collection-preview'>
    <h1 className='ittle'>{title.toUpperCase()}</h1>
    <div className='preview'>
      {items
        .filter((item, idx) => idx < 4)
        .map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </div>
  </div>
)

export default Collectionpreview
