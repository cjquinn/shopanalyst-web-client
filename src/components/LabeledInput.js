import React from 'react';

const LabeledInput = () => (
    <div className="u-mb-2">
        <label htmlFor="name" className="u-block u-mb">Name</label>
        
        <input
            className="o-input o-type-large u-block u-bgcolor-pale-grey u-color-grey u-p"
            type="text"
            placeholder="Enter a name..."
        />
    </div>
);

export default LabeledInput;
