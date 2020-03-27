import React from 'react';
import { css } from '@emotion/core';
import PacmanLoader from 'react-spinners/PacmanLoader'

const override = css`
  display: block;
`;

function PacmanSpinner(props) {
  const loading = true;
  return (
    <div className='spinner'>
      <PacmanLoader
        css={override}
        size={20}
        color={'#494949'}
        loading={loading}
      />
    </div>
  );
}

export default PacmanSpinner;