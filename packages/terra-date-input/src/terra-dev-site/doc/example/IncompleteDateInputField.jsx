import React, { useState } from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import DateInputField from 'terra-date-input/lib/DateInputField';

const Example = () => {
  const [value, setValue] = useState('');
  const [isIncomplete, setIsIncomplete] = useState(false);

  return (
    <React.Fragment>
      <DateInputField
        legend="Legend text"
        name="date-input-value"
        value={value}
        onChange={(event, dateString) => setValue(dateString)}
        required
        error="Error message"
        help="Help message"
        isIncomplete={isIncomplete}
      />
      <p>{`DateInputField Value: ${value}`}</p>
      <button type="button" onClick={() => setIsIncomplete(incomplete => !incomplete)}>Toggle isIncomplete</button>
    </React.Fragment>
  );
};

export default Example;