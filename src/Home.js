import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FileReaderInput from 'react-file-reader-input';
import styled from 'styled-components';
import DropzoneComponent from 'react-dropzone-component';
import $ from 'jquery';
import {Helmet} from "react-helmet";
import {removeDiacritics} from './plugins/str';
import {transformHeaders} from './plugins/transforms'

var toBuffer = require('blob-to-buffer')

var componentConfig = { postUrl: 'no-url' };
var djsConfig = { autoProcessQueue: false }

async function getTextFromFile(file){
  return new Promise((resolve,reject) => {
    toBuffer(file, function (err, buffer) {
      if (err) throw err
      resolve(buffer.toString('utf-8'));
    });
  });
}

class Home extends Component {
  static async getInitialProps({ req, res, match, history, location, ...ctx }) {
    return { whatever: 'stuff' };
  }
  constructor(){
    super();
    
    this.state = {
      file:null,
      eventHandlers: { addedfile: this.handleNewFile.bind(this) }
    }
  }
  
  async handleNewFile(file){
    this.setState({file})
    
    var text= await getTextFromFile(file);
    var lines = text.split(/\s*[\r\n]+\s*/g);
    if(lines.length>1){
      var headers= lines[0];
      headers= headers.split(',')
      headers= headers.map(h=>removeDiacritics(h).toLowerCase().replace(/ /g,"_"));
      headers= transformHeaders(headers);
      console.log(headers)
    }

    //this.props.history.push('/about')
  }
  componentDidMount(){
    $('.dz-message span').html('Drop the CSV file to import')
  }
  render() {
    return (
<div className="Home">
 <Helmet>
 <style type="text/css">{`
    .Home{}
    .Home__CenteredWrapper{
      min-height: calc(100vh);  
    }
    .dz-success-mark,.dz-error-mark{
      display: none;
    }
    .dz-message{
      background: aliceblue;
      min-width: 300px;
      text-align: center;
      padding: 50px;
      margin: 20px auto;
      font-weight: 300;
      font-size: initial;
    }
    `}</style>
</Helmet>
  <div className="row no-gutters">
    <div className="Home__CenteredWrapper col-12 d-flex justify-content-center align-items-center">
      <div>
         <DropzoneComponent config={componentConfig}
                       eventHandlers={this.state.eventHandlers}
                       djsConfig={djsConfig} />
      </div>
    </div>
  </div>
</div>
    );
  }
}

export default Home;
