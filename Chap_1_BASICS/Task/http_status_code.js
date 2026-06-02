let status_code = 404;
if (status_code >=200 && status_code <=299) {
    console.log("success");
} else if (status_code >=300 && status_code <=399) {
    console.log("redirect");
} else if (status_code >=400 && status_code <=499) {
    console.log("client error");
} else if (status_code >=500 && status_code <=599) {
    console.log("server error");
}   else {  
    console.log("invalid status code");
}