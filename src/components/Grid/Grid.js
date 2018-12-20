import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export class Grid extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    background: PropTypes.string,
  };

  render() {
    const { children, background } = this.props;

    const classNames = classnames({
      background: true,
      'background--black': background === 'black',
      'background--white': background === 'white',
      'background--gray-10': background === 'gray-10',
      'background--gray-20': background === 'gray-20',
    });

    return (
      <div className={classNames}>
        <div className="ibm--grid">
          <div className="ibm--row">{children}</div>
        </div>
      </div>
    );
  }
}

export class Column extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    /**
   * Specify the col width at small breakpoint
   */
    sm: PropTypes.string,
    /**
   * Specify the col width at medium breakpoint
   */
    md: PropTypes.string,
    /**
   * Specify the col width at large breakpoint
   */
    lg: PropTypes.string,
    /**
   * Specify the col offset at large breakpoint
   */
    offset_lg: PropTypes.string,
    /**
   * Specify the type token size to use
   */
    type: PropTypes.string,
  };

  render() {
    const { children, sm, md, lg, offset_lg, type } = this.props;
    
    let classNames = "";
    if(lg) classNames += `ibm--col-lg-${lg} `;
    if(md) classNames += `ibm--col-md-${md} `;
    if(sm) classNames += `ibm--col-sm-${sm} `;
    if(offset_lg) classNames += `ibm--offset-lg-${offset_lg} `;
    if(type) classNames += `bx--type-${type} `;

    return <div className={classNames}>{children}</div>;
  }
}
