import React from 'react';

import ListCard from './ListCard';

const ListGrid = () => (
    <div className="o-grid u-space">
        <div className="o-grid__col">
            <ListCard />
        </div>

        <div className="o-grid__col">
            <ListCard />
        </div>

        <div className="o-grid__col">
            <ListCard />
        </div>

        <div className="o-grid__col">
            <ListCard />
        </div>

        <div className="o-grid__col">
            <ListCard />
        </div>

        <div className="o-grid__col">
            <ListCard />
        </div>
    </div>
);

export default ListGrid;
