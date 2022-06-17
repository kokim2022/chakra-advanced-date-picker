import { Button } from '@chakra-ui/react';
import React, { Fragment } from 'react';

const DefaultBtnStyle = {
  variant: 'ghost',
  size: 'sm',
};

export const DatepickerBackBtns = props => {
  const { calendars, getBackProps } = props;
  const customBtnProps = props.propsConfigs?.dateNavBtnProps;
  return (
    <Fragment>
      <Button
        {...getBackProps({
          calendars,
          offset: 12,
        })}
        {...DefaultBtnStyle}
        {...customBtnProps}
      >
        {'<<'}
      </Button>
      <Button
        {...getBackProps({ calendars })}
        {...DefaultBtnStyle}
        {...customBtnProps}
      >
        {'<'}
      </Button>
    </Fragment>
  );
};

export const DatepickerForwardBtns = props => {
  const { calendars, getForwardProps } = props;
  const customBtnProps = props.propsConfigs?.dateNavBtnProps;
  return (
    <Fragment>
      <Button
        {...getForwardProps({ calendars })}
        {...DefaultBtnStyle}
        {...customBtnProps}
      >
        {'>'}
      </Button>
      <Button
        {...getForwardProps({
          calendars,
          offset: 12,
        })}
        {...DefaultBtnStyle}
        {...customBtnProps}
      >
        {'>>'}
      </Button>
    </Fragment>
  );
};
