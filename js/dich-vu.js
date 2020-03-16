const options = {
  duration: 2.5,
};
let demo = new CountUp('myTargetElement', 500, options);
if (!demo.error) {
  demo.start();
} else {
  console.error(demo.error);
}
