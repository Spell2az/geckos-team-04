import React from 'react';

import styled from 'styled-components';

const CopyWrap = styled.div`
  margin-top: 24px !important;
  padding-top: 12px;
  padding-bottom: 12px;
  background: #fafafa;
  font-size: 14px;
  color: #676d73;
  box-sizing: inherit;
`;

const CopySnap = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  padding-left: 16px;
  padding-right: 16px;

  @media (min-width: 482px) {
    max-width: 449px;
    padding-left: 0;
    padding-right: 0;
  }

  @media (min-width: 701px) {
    max-width: 668px;
  }

  @media (min-width: 1026px) {
    max-width: 946px;
  }
`;

const CopyLegal = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const CopyRightBox = styled.div`
  -webkit-box-flex: 1;
  flex-grow: 1;
  white-space: nowrap;
`;

const CopyDocs = styled.div`
  display: flex;
  list-style: none;

  > li:first-child {
    margin-right: 8px;
  }

  > li:first-child:after {
    padding-left: 8px;
    content: '|';
    box-sizing: inherit;
  }
`;

const CopyAnchor = styled.a`
  fill: #676d73;
  color: #676d73;
  text-decoration: none;
  cursor: pointer;
`;

export const CopyRight = () => (
  <CopyWrap>
    <CopySnap>
      <CopyLegal>
        <CopyRightBox>&copy; 2018 Thumbtack, Inc.</CopyRightBox>
        <CopyDocs>
          <li>
            <CopyAnchor href="/privacy">Privacy Policy</CopyAnchor>
          </li>
          <li>
            <CopyAnchor href="/terms">Terms of Use</CopyAnchor>
          </li>
        </CopyDocs>
      </CopyLegal>
    </CopySnap>
  </CopyWrap>
);

export default CopyRight;
