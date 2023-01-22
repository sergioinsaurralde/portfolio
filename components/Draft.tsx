import React from 'react';
import PageTitle from './PageTitle';

export default function Draft(): React.ReactElement {
  return (
    <div className='mt-24 text-center'>
      <PageTitle>
        En construcción{' '}
        <span role='img' aria-label='roadwork sign'>
          🚧
        </span>
      </PageTitle>
    </div>
  );
}
