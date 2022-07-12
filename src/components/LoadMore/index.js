import React from 'react';
import './loadmore.css'

const LoadMore = ({
  onLoadMoreEvt = () => { },
}) => {
  return (
    <div className='loadMore_sec' onClick={() => onLoadMoreEvt()}>
      <div className='loadMore_sec_text'> Load More</div>
     

      <div class='scrolldown' style={{color:'blue'}}>
        <div class="chevrons">
          <div class='chevrondown'></div>
          <div class='chevrondown'></div>
        </div>
      </div>

    </div>
  );
};

export default LoadMore;
