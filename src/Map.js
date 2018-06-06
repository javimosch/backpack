import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import FileReaderInput from 'react-file-reader-input';
import styled from 'styled-components';
import DropzoneComponent from 'react-dropzone-component';
import { hashKeys, Style } from "react-style-tag";
import $ from 'jquery';
import {parseFile} from './plugins/csv';

const { MapCls } = hashKeys(["Home"]);
const FlexDiv = styled.div`
  min-height: calc(100vh);
`;

console.info('parseFile',typeof parseFile)

class Map extends Component {
  static async getInitialProps({ req, res, match, history, location, ...ctx }) {
    return { whatever: 'stuff' };
  }
  constructor(){
    super();
    
    this.state = {
     
    }
  }
 
  componentDidMount(){
    
  }
  render() {
    return (
<div className={MapCls}>

<Style>{`
     
        `}</Style>

  <div className="row no-gutters">
    <FlexDiv className="col-12 d-flex justify-content-center align-items-center">
      <div>
         <h2>Map</h2>
      </div>
    </FlexDiv>
  </div>
</div>
    );
  }
}

export default Map;
