const incrementDigits = async num => {
    try{
        num++;
        console.log(num);
        if (num < 10) {
            await incrementDigits(num);
        } else {
            return 'done!';
        }
    } catch (err) {
        console.log(err);
    }
};

(async () => {
    const res = await incrementDigits(0);
    console.log(res);
})();
