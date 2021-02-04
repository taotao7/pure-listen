import axios from "axios";
import {parse} from 'node-html-parser'

const url: string = "https://music.163.com/#/my/m/music/playlist?id=161843709"

const getUserSongList = (url: string) => {
    axios.get(url).then((res) => {
        // let result:any = parse(res.toString()).querySelector('tbody')
        console.log(res)
    })
}

getUserSongList(url)
