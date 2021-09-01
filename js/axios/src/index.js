import axios from "axios";

axios.get("http://localhost/get.php?a=1&b=2").then((result) => {
    console.log('get', result.data);
}).catch((err) => {
    console.log(err);
});

axios.post('http://localhost/post.php', "a=1&b=2").then((result) => {
    console.log('post', result.data);
}).catch((err) => {
    console.log(err);
});