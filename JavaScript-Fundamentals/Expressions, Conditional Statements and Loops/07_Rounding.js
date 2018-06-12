function rounding(nums) {

    let num = nums[0];

    // roundNum must be <=15;
    let roundNum = nums[1] <= 15 ? nums[1] : 15;

    let rounded = num.toFixed(roundNum) * 1;  // remove trailing zeros

    console.log(rounded);

}

rounding([3.1415926535897932384626433832795, 222]);
rounding([3.1415926535897932384626433832795, 2]);
rounding([10.5, 3]);
