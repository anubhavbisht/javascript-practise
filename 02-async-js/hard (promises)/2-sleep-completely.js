/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */
const main = async() => {
    function sleep (seconds) {
        return new Promise((resolve)=>{
            setTimeout(resolve, seconds*1000)
        })
    }
    console.log('Starting')
    await sleep(5)
    console.log('After delay')
}
main()