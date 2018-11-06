import React from "react";
import {render} from "react-dom";
import Media from './src/playlist/component/media';
import PLayList from './src/playlist/component/playlist';
import data from './src/api.json';

const app=document.getElementById("app");
render(<PLayList data={data}/>,app);