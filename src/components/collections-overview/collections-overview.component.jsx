import React from 'react'
import './collections-overview.styles.scss';
import CollectionPreview from '../collection-preview/collection-preview.component';
import { createStructuredSelector } from 'reselect';
import { selectCollectionsForPreview } from '../../redux/shop/shop.selector';
import { connect } from 'react-redux';

const CollectionsOverview = ({ collections }) => {
    return (
        <div className='collections-overview'>
           {collections.map(({id, ...otherProps}) => <CollectionPreview key={id} {...otherProps}/>)}
        </div>
    )
}
const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
  });
  
export default connect(mapStateToProps)(CollectionsOverview);