import Post from './file-1'
import {test} from './file-2'
import './styles/style.css'
import './styles/scss.scss'


const post = new Post("file1.js downloaded")

console.log("Status:", post.toString());
console.log("test>>>", test)