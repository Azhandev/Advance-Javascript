//higher order function
function a(b) {
    console.dir(b);
    b()
}

1


//callback function
a(function() {
    console.log('Hiiiiiiiiiiiiiiiiiii');
})
