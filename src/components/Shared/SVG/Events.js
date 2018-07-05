import React from 'react';
import PropTypes from 'prop-types';

export default class Events extends React.Component {
  render() {
    const { color } = this.props;
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill={color}
      >
        <path
          fillRule="evenodd"
          d="M15.998 14.01a1 1 0 0 1-1-1c0-.552.448-1.005 1-1.005s1 .443 1 .995v.01a1 1 0 0 1-1 1zm-10-9a1 1 0 0 1-1-1c0-.552.448-1.005 1-1.005s1 .443 1 .995v.01a1 1 0 0 1-1 1zm19 4.985c.552 0 1 .443 1 .995V11a1 1 0 0 1-2 0c0-.552.448-1.005 1-1.005zm-1 12c.552 0 1 .443 1 .995V23a1 1 0 0 1-2 0c0-.552.448-1.005 1-1.005zM10.498 9.5a.999.999 0 0 1-.707-1.707 4.096 4.096 0 0 0 1.207-2.914V3a1 1 0 0 1 2 0v1.879a6.08 6.08 0 0 1-1.793 4.328.997.997 0 0 1-.707.293zm14.5 5.5a1 1 0 0 1 0 2H23.12c-1.1 0-2.136.429-2.914 1.207a.997.997 0 0 1-1.414 0 .999.999 0 0 1 0-1.414A6.08 6.08 0 0 1 23.12 15H25zM16 9.495a.999.999 0 0 1-.672-1.741c.988-.895 2.035-.757 2.727-.665.612.08.837.096 1.123-.164.292-.265.32-.521.324-1.185.004-.75.011-1.776.981-2.655.987-.894 2.035-.753 2.725-.663.655.087.85.082 1.12-.163a1.002 1.002 0 0 1 1.413.07c.37.409.339 1.04-.07 1.413-.987.894-2.033.754-2.726.663-.654-.087-.849-.083-1.119.162-.293.265-.32.52-.325 1.185-.004.75-.01 1.776-.98 2.655-.989.894-2.035.757-2.728.665-.61-.08-.836-.095-1.122.164a.995.995 0 0 1-.671.259zm-8.408.798l10.114 10.115a1 1 0 0 1-.39 1.656L5.981 25.84a3.006 3.006 0 0 1-3.094-.73 3.006 3.006 0 0 1-.73-3.093l3.778-11.334a1.002 1.002 0 0 1 1.656-.391zm-2.243 13.65l9.8-3.265L7.32 12.85l-3.266 9.8a1 1 0 0 0 .247 1.046 1 1 0 0 0 1.046.247z"
        />
      </svg>
    );
  }
}

Events.defaultProps = {
  color: '#a97ff0',
};

Events.propTypes = {
  color: PropTypes.string,
};
