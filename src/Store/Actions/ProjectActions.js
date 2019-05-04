import { createAction } from "redux-actions";
import axios from 'axios';

const PROJECTS = createAction("PROJECTS");
const backend_URL = "http://10.5.51.195:3000/";