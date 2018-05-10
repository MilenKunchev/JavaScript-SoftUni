let f = (function (n) {

    return function () {

        console.log((++n));
    }

})(5);

f();
f();
f();
f();
f();
