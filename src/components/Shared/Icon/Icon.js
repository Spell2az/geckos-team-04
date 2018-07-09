import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Icon extends Component {
  render() {
    const { size, path, color } = this.props;
    const viewBox = `0 0 ${size} ${size}`;

    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox={viewBox}
        fill={color}
      >
        <path d={path} />
      </svg>
    );
  }
}

Icon.defaultProps = {
  size: '18',
  color: '#009fd9',
  path: '',
};

Icon.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
  path: PropTypes.string,
};

export default Icon;

export const LocationIcon = props => {
  const path =
    'M3.002 7.25c0 3.248 4.342 7.756 5.23 8.825l.769.925.769-.926c.888-1.068 5.234-5.553 5.234-8.824C15.004 4.145 13 1 9.001 1c-3.999 0-6 3.145-6 6.25zm1.993 0C4.995 5.135 6.176 3 9.001 3s4.002 2.135 4.002 4.25c0 1.777-2.177 4.248-4.002 6.59C7.1 11.4 4.995 9.021 4.995 7.25zM8.91 5.5c-.827 0-1.5.673-1.5 1.5s.673 1.5 1.5 1.5 1.5-.673 1.5-1.5-.673-1.5-1.5-1.5';
  return <Icon path={path} {...props} />;
};
export const PricingIcon = props => {
  const path =
    'M9 15c-3.309 0-6-2.691-6-6s2.691-6 6-6c3.31 0 6 2.691 6 6s-2.69 6-6 6M9 1C4.589 1 1 4.589 1 9s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8m.75 7.25h-1.5a.752.752 0 0 1-.75-.75c0-.413.337-.75.75-.75h2.25a.75.75 0 0 0 0-1.5h-.75V5a.75.75 0 0 0-1.5 0v.25C7.01 5.25 6 6.26 6 7.5s1.01 2.25 2.25 2.25h1.5c.413 0 .75.337.75.75s-.337.75-.75.75H7.5a.75.75 0 0 0 0 1.5h.764c-.002.022-.014.044-.014.068V13a.75.75 0 0 0 1.5 0v-.182c0-.024-.012-.046-.014-.068h.014c1.24 0 2.25-1.01 2.25-2.25s-1.01-2.25-2.25-2.25';
  return <Icon path={path} {...props} />;
};
export const HomeIcon = props => {
  const path =
    'M24.0002513,9.89 L25.6332513,11.227 C26.0612513,11.576 26.1242513,12.206 25.7742513,12.634 C25.5762513,12.875 25.2892513,13 25.0002513,13 C24.7772513,13 24.5532513,12.926 24.3672513,12.774 L24.0002513,12.474 L24.0002513,23 C24.0002513,24.654 22.6542513,26 21.0002513,26 L7.00025134,26 C5.34625134,26 4.00025134,24.654 4.00025134,23 L4.00025134,12.474 L3.63325134,12.774 C3.20525134,13.123 2.57625134,13.062 2.22625134,12.634 C1.87625134,12.206 1.93925134,11.576 2.36725134,11.227 L13.3672513,2.227 C13.7352513,1.925 14.2652513,1.925 14.6332513,2.227 L18.0002513,4.981 L18.0002513,3 C18.0002513,2.448 18.4482513,2 19.0002513,2 L23.0002513,2 C23.5522513,2 24.0002513,2.448 24.0002513,3 L24.0002513,9.89 Z M22.0002513,23 L22.0002513,10.838 L14.0002513,4.292 L6.00025134,10.838 L6.00025134,23 C6.00025134,23.551 6.44925134,24 7.00025134,24 L21.0002513,24 C21.5512513,24 22.0002513,23.551 22.0002513,23 Z M17.0002513,12 C17.5522513,12 18.0002513,12.448 18.0002513,13 L18.0002513,19 C18.0002513,19.552 17.5522513,20 17.0002513,20 L11.0002513,20 C10.4482513,20 10.0002513,19.552 10.0002513,19 L10.0002513,13 C10.0002513,12.448 10.4482513,12 11.0002513,12 L17.0002513,12 Z M12.0002513,18 L16.0002513,18 L16.0002513,14 L12.0002513,14 L12.0002513,18 Z M20.0002513,4 L20.0002513,6.617 L22.0002513,8.253 L22.0002513,4 L20.0002513,4 Z';
  return <Icon path={path} {...props} />;
};
export const EventIcon = props => {
  const path =
    'M15.9984607,14.0098 C15.4464607,14.0098 14.9984607,13.5618 14.9984607,13.0098 C14.9984607,12.4578 15.4464607,12.0048 15.9984607,12.0048 C16.5504607,12.0048 16.9984607,12.4478 16.9984607,12.9998 L16.9984607,13.0098 C16.9984607,13.5618 16.5504607,14.0098 15.9984607,14.0098 Z M5.99846073,5.0098 C5.44646073,5.0098 4.99846073,4.5618 4.99846073,4.0098 C4.99846073,3.4578 5.44646073,3.0048 5.99846073,3.0048 C6.55046073,3.0048 6.99846073,3.4478 6.99846073,3.9998 L6.99846073,4.0098 C6.99846073,4.5618 6.55046073,5.0098 5.99846073,5.0098 Z M24.9984607,9.9951 C25.5504607,9.9951 25.9984607,10.4381 25.9984607,10.9901 L25.9984607,11.0001 C25.9984607,11.5521 25.5504607,12.0001 24.9984607,12.0001 C24.4464607,12.0001 23.9984607,11.5521 23.9984607,11.0001 C23.9984607,10.4481 24.4464607,9.9951 24.9984607,9.9951 Z M23.9984607,21.9951 C24.5504607,21.9951 24.9984607,22.4381 24.9984607,22.9901 L24.9984607,23.0001 C24.9984607,23.5521 24.5504607,24.0001 23.9984607,24.0001 C23.4464607,24.0001 22.9984607,23.5521 22.9984607,23.0001 C22.9984607,22.4481 23.4464607,21.9951 23.9984607,21.9951 Z M10.4984607,9.5 C10.2424607,9.5 9.98646073,9.402 9.79146073,9.207 C9.40046073,8.816 9.40046073,8.184 9.79146073,7.793 C10.5694607,7.015 10.9984607,5.979 10.9984607,4.879 L10.9984607,3 C10.9984607,2.448 11.4464607,2 11.9984607,2 C12.5504607,2 12.9984607,2.448 12.9984607,3 L12.9984607,4.879 C12.9984607,6.514 12.3614607,8.051 11.2054607,9.207 C11.0104607,9.402 10.7544607,9.5 10.4984607,9.5 Z M24.9984607,15 C25.5504607,15 25.9984607,15.448 25.9984607,16 C25.9984607,16.552 25.5504607,17 24.9984607,17 L23.1194607,17 C22.0194607,17 20.9834607,17.429 20.2054607,18.207 C20.0104607,18.402 19.7544607,18.5 19.4984607,18.5 C19.2424607,18.5 18.9864607,18.402 18.7914607,18.207 C18.4004607,17.816 18.4004607,17.184 18.7914607,16.793 C19.9474607,15.637 21.4844607,15 23.1194607,15 L24.9984607,15 Z M15.9989607,9.4946 C15.7259607,9.4946 15.4549607,9.3836 15.2569607,9.1656 C14.8869607,8.7566 14.9179607,8.1236 15.3269607,7.7536 C16.3149607,6.8586 17.3619607,6.9966 18.0539607,7.0886 C18.6659607,7.1686 18.8909607,7.1846 19.1769607,6.9246 C19.4689607,6.6596 19.4969607,6.4036 19.5009607,5.7396 C19.5049607,4.9896 19.5119607,3.9636 20.4819607,3.0846 C21.4689607,2.1906 22.5169607,2.3316 23.2069607,2.4216 C23.8619607,2.5086 24.0569607,2.5036 24.3269607,2.2586 C24.7369607,1.8886 25.3699607,1.9206 25.7399607,2.3286 C26.1099607,2.7376 26.0789607,3.3696 25.6699607,3.7416 C24.6829607,4.6356 23.6369607,4.4956 22.9439607,4.4046 C22.2899607,4.3176 22.0949607,4.3216 21.8249607,4.5666 C21.5319607,4.8316 21.5049607,5.0876 21.4999607,5.7516 C21.4959607,6.5016 21.4899607,7.5276 20.5199607,8.4066 C19.5309607,9.3006 18.4849607,9.1636 17.7919607,9.0716 C17.1819607,8.9916 16.9559607,8.9766 16.6699607,9.2356 C16.4779607,9.4096 16.2379607,9.4946 15.9989607,9.4946 Z M7.59106073,10.2928 L17.7050607,20.4078 C17.9510607,20.6528 18.0510607,21.0068 17.9720607,21.3448 C17.8920607,21.6818 17.6430607,21.9538 17.3150607,22.0638 L5.98106073,25.8408 C5.66306073,25.9468 5.33906073,25.9988 5.01706073,25.9988 C4.23106073,25.9988 3.46606073,25.6898 2.88706073,25.1108 C2.07206073,24.2968 1.79306073,23.1108 2.15706073,22.0178 L5.93506073,10.6838 C6.04506073,10.3548 6.31706073,10.1068 6.65406073,10.0268 C6.99006073,9.9478 7.34606073,10.0478 7.59106073,10.2928 Z M5.34806073,23.9438 L15.1470607,20.6778 L7.32106073,12.8508 L4.05506073,22.6508 C3.92906073,23.0258 4.02106073,23.4168 4.30206073,23.6968 C4.58106073,23.9768 4.97206073,24.0698 5.34806073,23.9438 Z';
  return <Icon path={path} {...props} />;
};
export const AppleIcon = props => {
  const path =
    'M19.367,22.2202 C16.884,24.2482 15.613,24.2562 14.471,23.6452 C14.177,23.4882 13.823,23.4882 13.528,23.6452 C12.387,24.2562 11.115,24.2472 8.633,22.2202 C7.132,20.9932 6,18.5502 6,16.5362 C6,12.2192 10.165,12.0002 11,12.0002 C12.138,12.0002 12.853,12.3492 13.18,12.5592 C13.676,12.8752 14.319,12.8772 14.821,12.5582 C15.146,12.3492 15.862,12.0002 17,12.0002 C17.835,12.0002 22,12.2192 22,16.5362 C22,18.5502 20.868,20.9932 19.367,22.2202 M17,10.0002 C19.599,10.0002 24,11.3762 24,16.5362 C24,19.1752 22.615,22.1492 20.633,23.7692 C18.759,25.2992 16.519,26.6892 14,25.6342 C13.386,25.8902 12.787,26.0032 12.208,26.0032 C10.409,26.0032 8.784,24.9262 7.367,23.7692 C5.385,22.1492 4,19.1752 4,16.5362 C4,11.3762 8.4,10.0002 11,10.0002 C11.836,10.0002 12.513,10.1462 13.062,10.3272 C13.417,6.7412 15.31,5.2662 15.4,5.2002 C15.842,4.8662 16.469,4.9582 16.8,5.4002 C17.129,5.8382 17.043,6.4592 16.61,6.7922 C16.537,6.8512 15.381,7.8262 15.075,10.2802 C15.599,10.1212 16.235,10.0002 17,10.0002 Z M10.9998,9 C6.2538,9 4.9998,5.075 4.9998,3 C4.9998,2.448 5.4468,2 5.9998,2 C10.7458,2 11.9998,5.925 11.9998,8 C11.9998,8.552 11.5528,9 10.9998,9 Z M10.2488,7.292 C10.1078,5.832 9.2788,4.046 6.7508,3.709 C6.9978,5.255 7.8568,7.047 10.2488,7.292 Z';
  return <Icon path={path} {...props} />;
};
export const FlowerIcon = props => {
  const path =
    'M25.9929886,11.94705 C26.0059886,12.15605 26.2629886,17.08605 22.2769886,20.65605 C19.9329886,22.94005 17.0089886,23.72405 14.9739886,23.97405 C14.9739886,23.97405 14.2769886,23.99905 13.9919886,24.00005 C13.6239886,24.00005 13.0259886,23.96605 13.0259886,23.96605 C10.9949886,23.71505 8.07498857,22.92905 5.69998857,20.61605 C1.74498857,17.07505 1.99498857,12.15205 2.00698857,11.94405 C2.03798857,11.43605 2.44498857,11.03205 2.95298857,11.00605 C3.17398857,10.99405 8.36498857,10.76605 12.1549886,14.45705 C12.5879886,14.84405 12.9899886,15.27205 13.3559886,15.73405 C13.5839886,16.02105 13.9999886,16.52405 13.9999886,16.52405 C13.9999886,16.52405 14.3929886,16.04805 14.6109886,15.77105 C14.9909886,15.28705 15.4119886,14.83805 15.8709886,14.42805 C19.6299886,10.76205 24.8339886,11.00105 25.0489886,11.01105 C25.5559886,11.03805 25.9619886,11.44105 25.9929886,11.94705 Z M20.9119886,19.19505 C23.2399886,17.11005 23.9289886,14.33705 24.0679886,12.93105 C22.5569886,13.05305 19.5799886,13.50405 17.3249886,15.70205 C16.2979886,16.62105 15.4619886,17.87705 14.9229886,19.18305 C14.7679886,19.55705 14.4039886,19.80105 13.9989886,19.80105 L13.9979886,19.80105 C13.5939886,19.80105 13.2289886,19.55705 13.0749886,19.18405 C12.5339886,17.87905 11.6029886,16.63705 10.6069886,15.74405 C8.33198857,13.53005 5.44698857,13.10305 3.93198857,12.97605 C4.07798857,14.38405 4.77798857,17.10705 7.06398857,19.15405 C9.07198857,21.10905 11.5449886,21.76805 13.2719886,21.98205 C13.2879886,21.98405 13.3049886,21.98605 13.3209886,21.98805 C13.5789886,22.00205 14.4699886,22.00305 14.7079886,21.99205 C14.7149886,21.99105 14.7219886,21.99005 14.7289886,21.98905 C16.4589886,21.77605 18.9359886,21.11805 20.9119886,19.19505 Z M9.53508857,10.95875 C9.00508857,10.80375 8.70108857,10.24875 8.85508857,9.71875 C10.0460886,5.63875 13.2810886,3.28475 13.4180886,3.18675 C13.7660886,2.93775 14.2350886,2.93775 14.5820886,3.18675 C14.7200886,3.28475 17.9640886,5.64475 19.1500886,9.73575 C19.3040886,10.26675 18.9990886,10.82075 18.4680886,10.97475 C18.3750886,11.00175 18.2820886,11.01475 18.1890886,11.01475 C17.7560886,11.01475 17.3560886,10.72975 17.2290886,10.29275 C16.5200886,7.84875 14.8810886,6.10075 14.0000886,5.29975 C13.1220886,6.09875 11.4860886,7.84175 10.7750886,10.27875 C10.6200886,10.80975 10.0670886,11.11475 9.53508857,10.95875 Z';
  return <Icon path={path} {...props} />;
};
export const BriefCaseIcon = props => {
  const path =
    'M23,24 L5,24 C4.449,24 4,23.551 4,23 L4,14.891 L11.905,18.54 C12.57,18.847 13.285,19 14,19 C14.715,19 15.43,18.847 16.095,18.539 L24,14.89 L24,23 C24,23.551 23.551,24 23,24 Z M5,10 L23,10 C23.551,10 24,10.449 24,11 L24,12.688 L15.257,16.723 C14.458,17.092 13.542,17.092 12.743,16.724 L4,12.688 L4,11 C4,10.449 4.449,10 5,10 Z M10,4.784 C10,4.351 10.351,4 10.784,4 L17.209,4 C17.646,4 18,4.354 18,4.791 L18,8 L10,8 L10,4.784 Z M23,8 L20,8 L20,5.001 C20,3.344 18.656,2 16.999,2 L11.001,2 C9.344,2 8,3.344 8,5.001 L8,8 L5,8 C3.346,8 2,9.346 2,11 L2,23 C2,24.654 3.346,26 5,26 L23,26 C24.654,26 26,24.654 26,23 L26,11 C26,9.346 24.654,8 23,8 Z';
  return <Icon path={path} {...props} />;
};
export const CraftsIcon = props => {
  const path =
    'M22.48975,5.51 C27.16975,10.192 27.16975,17.808 22.48975,22.489 C20.14875,24.83 17.07475,26 13.99975,26 C10.92575,26 7.85175,24.83 5.51075,22.489 C0.82975,17.808 0.82975,10.192 5.51075,5.51 C10.19275,0.83 17.80775,0.83 22.48975,5.51 Z M6.92875,21.071 C7.41575,21.558 7.94175,21.984 8.49475,22.349 C11.82175,24.543 16.17875,24.542 19.50475,22.349 C20.05875,21.984 20.58375,21.558 21.07175,21.071 C24.97075,17.172 24.97075,10.827 21.07175,6.928 C19.12175,4.979 16.56075,4.005 13.99975,4.005 C11.43875,4.005 8.87875,4.979 6.92875,6.928 C3.02975,10.827 3.02975,17.172 6.92875,21.071 Z M14.00005,11.0021 C13.63305,11.0021 13.26605,10.8681 12.97705,10.5991 C12.37105,10.0331 12.33805,9.0841 12.90305,8.4791 C13.46805,7.8731 14.42005,7.8351 15.02705,8.4021 C15.63305,8.9671 15.66905,9.9131 15.10405,10.5181 L15.09705,10.5251 C14.80105,10.8421 14.40105,11.0021 14.00005,11.0021 Z M18.49515,15.5065 C18.11115,15.5065 17.72715,15.3605 17.43415,15.0675 C16.84915,14.4815 16.84915,13.5315 17.43415,12.9455 C18.02115,12.3595 18.97415,12.3575 19.55915,12.9425 C20.14415,13.5275 20.14815,14.4745 19.56215,15.0605 L19.55615,15.0675 C19.26315,15.3605 18.87915,15.5065 18.49515,15.5065 Z M8.44735,12.9392 C9.03435,12.3532 9.98735,12.3502 10.57235,12.9362 C11.15735,13.5212 11.16135,14.4682 10.57535,15.0532 L10.56835,15.0602 C10.27535,15.3532 9.89135,15.5002 9.50835,15.5002 C9.12435,15.5002 8.74035,15.3532 8.44735,15.0602 C7.86135,14.4752 7.86135,13.5242 8.44735,12.9392 Z M15.09675,19.5231 C14.80075,19.8391 14.40175,20.0001 13.99975,20.0001 C13.63275,20.0001 13.26575,19.8661 12.97675,19.5961 C12.37075,19.0311 12.33775,18.0821 12.90375,17.4761 C13.46775,16.8711 14.41875,16.8331 15.02775,17.3991 C15.63275,17.9641 15.66875,18.9101 15.10375,19.5161 L15.09675,19.5231 Z';
  return <Icon path={path} {...props} />;
};
export const WebIcon = props => {
  const path =
    'M23,18 L5,18 C4.448,18 4,17.551 4,17 L4,16 L24,16 L24,17 C24,17.551 23.552,18 23,18 M16.557,24 L11.443,24 C11.788,23.409 12,22.732 12,22 L12,20 L16,20 L16,22 C16,22.732 16.212,23.409 16.557,24 M5,4 L23,4 C23.552,4 24,4.449 24,5 L24,14 L4,14 L4,5 C4,4.449 4.448,4 5,4 M23,2 L5,2 C3.346,2 2,3.346 2,5 L2,17 C2,18.654 3.346,20 5,20 L10,20 L10,22 C10,23.103 9.103,24 8,24 C7.447,24 7,24.448 7,25 C7,25.552 7.447,26 8,26 L20,26 C20.553,26 21,25.552 21,25 C21,24.448 20.553,24 20,24 C18.897,24 18,23.103 18,22 L18,20 L23,20 C24.654,20 26,18.654 26,17 L26,5 C26,3.346 24.654,2 23,2';
  return <Icon path={path} {...props} />;
};
export const LegalIcon = props => {
  const path =
    'M24.0002513,9.89 L25.6332513,11.227 C26.0612513,11.576 26.1242513,12.206 25.7742513,12.634 C25.5762513,12.875 25.2892513,13 25.0002513,13 C24.7772513,13 24.5532513,12.926 24.3672513,12.774 L24.0002513,12.474 L24.0002513,23 C24.0002513,24.654 22.6542513,26 21.0002513,26 L7.00025134,26 C5.34625134,26 4.00025134,24.654 4.00025134,23 L4.00025134,12.474 L3.63325134,12.774 C3.20525134,13.123 2.57625134,13.062 2.22625134,12.634 C1.87625134,12.206 1.93925134,11.576 2.36725134,11.227 L13.3672513,2.227 C13.7352513,1.925 14.2652513,1.925 14.6332513,2.227 L18.0002513,4.981 L18.0002513,3 C18.0002513,2.448 18.4482513,2 19.0002513,2 L23.0002513,2 C23.5522513,2 24.0002513,2.448 24.0002513,3 L24.0002513,9.89 Z M22.0002513,23 L22.0002513,10.838 L14.0002513,4.292 L6.00025134,10.838 L6.00025134,23 C6.00025134,23.551 6.44925134,24 7.00025134,24 L21.0002513,24 C21.5512513,24 22.0002513,23.551 22.0002513,23 Z M17.0002513,12 C17.5522513,12 18.0002513,12.448 18.0002513,13 L18.0002513,19 C18.0002513,19.552 17.5522513,20 17.0002513,20 L11.0002513,20 C10.4482513,20 10.0002513,19.552 10.0002513,19 L10.0002513,13 C10.0002513,12.448 10.4482513,12 11.0002513,12 L17.0002513,12 Z M12.0002513,18 L16.0002513,18 L16.0002513,14 L12.0002513,14 L12.0002513,18 Z M20.0002513,4 L20.0002513,6.617 L22.0002513,8.253 L22.0002513,4 L20.0002513,4 Z';
  return <Icon path={path} {...props} />;
};
export const HandIcon = props => {
  const path =
    'M4.001,14.0116425 C4.041,12.2006425 4.766,10.4996425 6.043,9.22264254 L9.665,5.60164254 C9.942,5.79664254 10.281,6.11364254 10.365,6.53564254 C10.492,7.17764254 10.133,7.96064254 9.353,8.74164254 L9.242,8.85264254 C9.242,8.85264254 9.242,8.85364254 9.241,8.85364254 L7.164,10.9306425 C6.798,11.2966425 6.772,11.8816425 7.104,12.2786425 C7.123,12.3026425 9.061,14.6956425 7.869,15.8876425 C7.479,16.2786425 7.479,16.9116425 7.869,17.3016425 C8.064,17.4966425 8.32,17.5946425 8.576,17.5946425 C8.832,17.5946425 9.088,17.4966425 9.283,17.3016425 C10.967,15.6176425 10.179,13.2716425 9.185,11.7386425 L10.764,10.1596425 C10.766,10.1576425 10.767,10.1556425 10.769,10.1536425 L16.68,4.24364254 C16.848,4.07564254 17.073,3.98664254 17.337,3.99964254 C17.598,4.00864254 17.859,4.11964254 18.076,4.33664254 C18.254,4.51364254 18.354,4.75064254 18.355,5.00264254 L18.355,5.04664254 C18.349,5.28264254 18.259,5.49264254 18.095,5.65764254 L12.363,11.3876425 C11.973,11.7786425 11.973,12.4116425 12.363,12.8026425 C12.559,12.9976425 12.814,13.0946425 13.07,13.0946425 C13.326,13.0946425 13.582,12.9976425 13.777,12.8026425 L13.877,12.7026425 C13.883,12.6976425 13.89,12.6966425 13.895,12.6906425 L21.33,5.25564254 C21.497,5.08864254 21.731,5.00364254 21.985,5.01264254 C22.246,5.02164254 22.509,5.13364254 22.726,5.34964254 C22.902,5.52764254 23.002,5.76464254 23.005,6.02864254 C23.005,6.27764254 22.914,6.49964254 22.743,6.67064254 L19.506,9.90764254 L15.194,14.2196425 C14.804,14.6096425 14.804,15.2426425 15.194,15.6336425 C15.585,16.0236425 16.218,16.0236425 16.608,15.6336425 L17.779,14.4626425 C17.78,14.4616425 17.78,14.4616425 17.781,14.4616425 L20.422,11.8206425 L22.329,9.91364254 C22.496,9.74664254 22.73,9.66564254 22.984,9.67164254 C23.245,9.67964254 23.508,9.79164254 23.724,10.0076425 C23.901,10.1846425 24.001,10.4226425 24.004,10.6856425 C24.004,10.9356425 23.913,11.1576425 23.742,11.3286425 L18.023,17.0476425 C17.633,17.4386425 17.633,18.0716425 18.023,18.4616425 L18.025,18.4626425 C18.025,18.4636425 18.025,18.4646425 18.026,18.4646425 C18.417,18.8556425 19.05,18.8556425 19.44,18.4646425 L22.489,15.4156425 C22.568,15.3376425 22.587,15.3186425 22.987,15.3316425 C23.247,15.3406425 23.51,15.4516425 23.726,15.6686425 C23.903,15.8456425 24.003,16.0836425 24.006,16.3466425 C24.006,16.5956425 23.915,16.8176425 23.744,16.9896425 L23.576,17.1576425 C23.575,17.1576425 23.574,17.1576425 23.573,17.1586425 L18.776,21.9556425 C17.499,23.2326425 15.798,23.9566425 13.986,23.9986425 C8.483,23.9906425 4.008,19.5156425 4.001,14.0116425 M25.103,14.2166425 C24.86,13.9746425 24.572,13.7836425 24.263,13.6366425 L25.156,12.7426425 C25.703,12.1966425 26.004,11.4666425 26.004,10.6536425 C25.995,9.87464254 25.688,9.14364254 25.101,8.55564254 C24.856,8.31164254 24.564,8.11864254 24.251,7.97064254 C24.732,7.43864254 25.005,6.75664254 25.005,5.99564254 C24.996,5.21664254 24.688,4.48464254 24.101,3.89664254 C23.563,3.36164254 22.816,3.03964254 22.051,3.01364254 C21.305,2.98964254 20.599,3.25064254 20.053,3.73164254 C19.904,3.42864254 19.71,3.14064254 19.453,2.88564254 C18.916,2.34764254 18.169,2.02564254 17.401,2.00064254 C16.619,1.98464254 15.828,2.26764254 15.266,2.82864254 L12.237,5.85764254 C11.764,4.30364254 10.232,3.60664254 10.045,3.52864254 L9.858,3.45164254 C9.488,3.29864254 9.056,3.38264254 8.77,3.66864254 L4.629,7.80864254 C2.983,9.45464254 2.05,11.6466425 2,13.9796425 C2,13.9836425 2.002,13.9866425 2.002,13.9896425 C2.002,13.9926425 2,13.9956425 2,13.9986425 C2,20.6146425 7.381,25.9976425 13.997,25.9986425 L13.998,25.9986425 L14.02,25.9986425 C16.353,25.9496425 18.544,25.0156425 20.19,23.3696425 L20.202,23.3586425 C20.203,23.3576425 20.204,23.3576425 20.205,23.3566425 L25.158,18.4036425 C25.705,17.8576425 26.006,17.1266425 26.006,16.3146425 C25.997,15.5346425 25.689,14.8036425 25.103,14.2166425';
  return <Icon path={path} {...props} />;
};
export const PawIcon = props => {
  const path =
    'M21.3804,19.1569 L21.3804,19.1559 C22.4844,20.8519 22.0614,23.1769 20.4364,24.3389 C19.3824,25.0919 18.0084,25.2059 16.8404,24.6389 C16.7284,24.5939 16.6144,24.5359 16.4944,24.4609 C14.8724,23.4439 13.1914,23.4439 11.5084,24.4589 C11.3864,24.5319 11.2734,24.5939 11.1594,24.6399 C10.6664,24.8789 10.1374,24.9959 9.6104,24.9959 C8.8894,24.9959 8.1734,24.7749 7.5644,24.3389 C5.9394,23.1769 5.5154,20.8519 6.6194,19.1559 L9.5934,14.5889 C10.6644,12.9429 12.2714,11.9999 14.0004,11.9999 C15.7294,11.9999 17.3354,12.9429 18.4064,14.5889 L21.3804,19.1569 Z M19.2734,22.7119 C20.0394,22.1639 20.2324,21.0589 19.7044,20.2479 L16.7304,15.6799 C16.0354,14.6119 15.0404,13.9999 14.0004,13.9999 C12.9604,13.9999 11.9644,14.6119 11.2694,15.6799 L8.2954,20.2479 C7.7674,21.0589 7.9604,22.1639 8.7274,22.7119 C9.1964,23.0479 9.7884,23.0899 10.3094,22.8289 C10.3474,22.8099 10.3874,22.7929 10.4274,22.7779 C12.6084,21.4009 15.4074,21.4139 17.5564,22.7659 C17.5964,22.7799 17.6524,22.8089 17.6904,22.8289 C18.2104,23.0889 18.8044,23.0469 19.2734,22.7119 Z M8,14 C8,15.654 6.654,17 5,17 C3.346,17 2,15.654 2,14 L2,13 C2,11.346 3.346,10 5,10 C6.654,10 8,11.346 8,13 L8,14 Z M23,10 C24.654,10 26,11.346 26,13 L26,14 C26,15.654 24.654,17 23,17 C21.346,17 20,15.654 20,14 L20,13 C20,11.346 21.346,10 23,10 Z M18,10 C16.346,10 15,8.654 15,7 L15,6 C15,4.346 16.346,3 18,3 C19.654,3 21,4.346 21,6 L21,7 C21,8.654 19.654,10 18,10 Z M10,10 C8.346,10 7,8.654 7,7 L7,6 C7,4.346 8.346,3 10,3 C11.654,3 13,4.346 13,6 L13,7 C13,8.654 11.654,10 10,10 Z M6,14 L6,13 C6,12.449 5.551,12 5,12 C4.449,12 4,12.449 4,13 L4,14 C4,14.551 4.449,15 5,15 C5.551,15 6,14.551 6,14 Z M24,14 L24,13 C24,12.449 23.551,12 23,12 C22.449,12 22,12.449 22,13 L22,14 C22,14.551 22.449,15 23,15 C23.551,15 24,14.551 24,14 Z M17,6 L17,7 C17,7.551 17.449,8 18,8 C18.551,8 19,7.551 19,7 L19,6 C19,5.449 18.551,5 18,5 C17.449,5 17,5.449 17,6 Z M9,6 L9,7 C9,7.551 9.449,8 10,8 C10.551,8 11,7.551 11,7 L11,6 C11,5.449 10.551,5 10,5 C9.449,5 9,5.449 9,6 Z';
  return <Icon path={path} {...props} />;
};
export const CameraIcon = props => {
  const path =
    'M23,6 C24.654,6 26,7.346 26,9 L26,22 C26,23.654 24.654,25 23,25 L5,25 C3.346,25 2,23.654 2,22 L2,9 C2,7.346 3.346,6 5,6 L7.465,6 L9.168,3.445 C9.354,3.167 9.666,3 10,3 L18,3 C18.334,3 18.646,3.167 18.832,3.445 L20.535,6 L23,6 Z M24,22 L24,9 C24,8.448 23.551,8 23,8 L20,8 C19.666,8 19.354,7.833 19.168,7.555 L17.465,5 L10.536,5 L8.832,7.555 C8.646,7.833 8.334,8 8,8 L5,8 C4.449,8 4,8.448 4,9 L4,22 C4,22.552 4.449,23 5,23 L23,23 C23.551,23 24,22.552 24,22 Z M14,10 C17.033,10 19.5,12.468 19.5,15.5 C19.5,18.532 17.033,21 14,21 C10.967,21 8.5,18.532 8.5,15.5 C8.5,12.468 10.967,10 14,10 Z M21,9.9951 C21.552,9.9951 22,10.4371 22,10.9901 L22,11.0001 C22,11.5531 21.552,12.0001 21,12.0001 C20.448,12.0001 20,11.5531 20,11.0001 C20,10.4471 20.448,9.9951 21,9.9951 Z M14,19 C15.93,19 17.5,17.43 17.5,15.5 C17.5,13.57 15.93,12 14,12 C12.07,12 10.5,13.57 10.5,15.5 C10.5,17.43 12.07,19 14,19 Z';
  return <Icon path={path} {...props} />;
};
export const ServiceIcon = props => {
  const path =
    'M21.7099174,16.2943005 L24.8819174,19.4673005 C25.6039174,20.1893005 26.0009174,21.1493005 26.0009174,22.1743005 C26.0009174,23.1993005 25.6039174,24.1603005 24.8819174,24.8813005 C24.1619174,25.6023005 23.2009174,25.9993005 22.1749174,25.9993005 C21.1499174,25.9993005 20.1889174,25.6023005 19.4679174,24.8813005 L15.2929174,20.7063005 C14.9029174,20.3153005 14.9029174,19.6833005 15.2929174,19.2923005 C15.6839174,18.9013005 16.3169174,18.9013005 16.7079174,19.2923005 L20.8819174,23.4673005 C21.5679174,24.1533005 22.7819174,24.1533005 23.4679174,23.4673005 C23.8119174,23.1243005 24.0009174,22.6653005 24.0009174,22.1743005 C24.0009174,21.6843005 23.8119174,21.2253005 23.4679174,20.8813005 L20.2959174,17.7083005 C19.9049174,17.3173005 19.9049174,16.6853005 20.2959174,16.2943005 C20.6869174,15.9033005 21.3189174,15.9033005 21.7099174,16.2943005 Z M5.14321741,10.5142005 L2.14321741,5.51420046 C1.90621741,5.12020046 1.96821741,4.61620046 2.29321741,4.29220046 L4.29321741,2.29220046 C4.61821741,1.96920046 5.12221741,1.90620046 5.51521741,2.14220046 L10.5152174,5.14220046 C10.8162174,5.32220046 11.0002174,5.64820046 11.0002174,5.99920046 L11.0002174,9.99920046 C11.0002174,10.5522005 10.5522174,10.9992005 10.0002174,10.9992005 L6.00021741,10.9992005 C5.64921741,10.9992005 5.32321741,10.8152005 5.14321741,10.5142005 Z M5.15521741,4.25820046 L4.25921741,5.15420046 L6.56721741,8.99920046 L9.00021741,8.99920046 L9.00021741,6.56620046 L5.15521741,4.25820046 Z M24.0966174,13.0946005 C22.1926174,15.0016005 19.6276174,15.2886005 17.6896174,14.7236005 L7.70761741,24.7066005 C7.70661741,24.7076005 7.70561741,24.7086005 7.70561741,24.7086005 L7.32361741,25.0876005 C6.73661741,25.6756005 5.95361741,25.9996005 5.11961741,25.9996005 C4.28661741,25.9996005 3.50361741,25.6756005 2.91361741,25.0856005 C2.32461741,24.4966005 2.00061741,23.7136005 2.00061741,22.8806005 C2.00061741,22.0466005 2.32461741,21.2626005 2.91361741,20.6746005 L3.29061741,20.2946005 L13.2656174,10.3186005 C12.8776174,8.94760046 12.5546174,6.25360046 14.9046174,3.90360046 C17.1226174,1.68460046 20.4256174,1.62160046 22.4076174,2.68460046 C22.6856174,2.83560046 22.8776174,3.10760046 22.9236174,3.42060046 C22.9696174,3.73260046 22.8646174,4.04960046 22.6406174,4.27260046 L20.1076174,6.80560046 L20.3246174,7.67560046 L21.1906174,7.89060046 L23.7136174,5.34260046 C23.9426174,5.11160046 24.2696174,5.00960046 24.5886174,5.05860046 C24.9086174,5.11160046 25.1826174,5.31760046 25.3246174,5.60960046 C26.5636174,8.17260046 26.0816174,11.1106005 24.0966174,13.0946005 Z M16.7206174,12.8656005 C17.0096174,12.5776005 17.4426174,12.4916005 17.8176174,12.6516005 C18.8336174,13.0806005 21.0026174,13.3606005 22.6816174,11.6806005 C23.6936174,10.6706005 24.1386174,9.29960046 23.9616174,7.93460046 L22.2116174,9.70260046 C21.9626174,9.95460046 21.6006174,10.0566005 21.2576174,9.96960046 L19.2576174,9.46960046 C18.8996174,9.38060046 18.6196174,9.09960046 18.5306174,8.74160046 L18.0306174,6.74160046 C17.9456174,6.40060046 18.0446174,6.04060046 18.2936174,5.79260046 L20.0586174,4.02660046 C19.8916174,4.00760046 19.7196174,3.99760046 19.5456174,3.99760046 C18.4476174,3.99760046 17.2496174,4.38660046 16.3186174,5.31760046 C14.4276174,7.20960046 15.0046174,9.37460046 15.3406174,10.2186005 C15.4876174,10.5896005 15.4006174,11.0126005 15.1176174,11.2956005 L4.33061741,22.0866005 C4.11661741,22.3006005 4.00061741,22.5806005 4.00061741,22.8806005 C4.00061741,23.1786005 4.11661741,23.4596005 4.32761741,23.6716005 C4.76561741,24.1076005 5.47661741,24.1066005 5.91161741,23.6716005 L16.7206174,12.8656005 Z';
  return <Icon path={path} {...props} />;
};

export const PlayIcon = props => {
  const path =
    'M12.179 17.975c-.069.048-.146.019-.171.019-.005 0-.008.002-.008.004v-7.97c.032-.02.109-.049.179-.001l5.818 3.949-5.818 3.999zm6.951-5.599l-5.817-3.997a2.157 2.157 0 0 0-2.232-.129A1.986 1.986 0 0 0 10 10.002v7.996c0 .731.414 1.402 1.081 1.752.32.168.667.251 1.013.251a2.14 2.14 0 0 0 1.218-.379l5.817-3.998c.545-.374.871-.981.871-1.624a1.98 1.98 0 0 0-.87-1.624zM14 24C8.486 24 4 19.514 4 14 4 8.487 8.486 4 14 4s10 4.487 10 10c0 5.514-4.486 10-10 10zm0-22C7.383 2 2 7.383 2 14c0 6.618 5.383 12 12 12s12-5.382 12-12c0-6.617-5.383-12-12-12z';

  return <Icon path={path} {...props} />;
};

export const ChevronIcon = props => {
  const path =
    'M14.646 6.764L9 13 3.311 6.725a1 1 0 0 1 1.342-1.482L9 10l4.285-4.699c.2-.187.435-.301.715-.301a1 1 0 0 1 1 1c0 .306-.151.537-.354.764z';

  return <Icon path={path} {...props} />;
};

export const CarretIcon = props => {
  const path =
    'M17.2364208,21.645747 L9,14 L17.2750577,6.31118741 C17.4572476,6.11950231 17.7146682,6 18,6 C18.5522847,6 19,6.44771525 19,7 C19,7.24949347 18.908632,7.4776468 18.7575309,7.65282505 L12,14 L18.6990484,20.2849251 C18.8855743,20.4850464 19,20.7197816 19,21 C19,21.5522847 18.5522847,22 18,22 C17.693862,22 17.4633942,21.8486633 17.2364208,21.645747 Z';

  return <Icon path={path} {...props} transform="matrix(-1 0 0 1 28 0)" />;
};
