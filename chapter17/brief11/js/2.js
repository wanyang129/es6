// 如果有一个多部操作非常耗时,采用回调函数,
step1(function (value1) {
  step2(value1, function (value2) {
    step3(value2, function (value3) {
      step4(value3, function (value4) {
        // 
      })
    })
  })
})
// 采用Promise改写上面的代码
Promise.resolve(step1)
  .then(step2)
  .then(step3)
  .then(step4)
  .then(function (value4) {

  }, function (error) {

  }).done();

function* longRunningTask(value1) {
  try {
    var value2 = yield step1(value1);
    var value3 = yield step2(value2);
    var value4 = yield step3(value3);
    var value5 = yield step4(value4);
  } catch (e) {

  }
}
scheduler(longRunningTask(initialValue));
function scheduler(task) {
  var taskObj = task.next(task.value);
  if (!taskObj.done) {
    task.value = taskObj.value;
    scheduler(task);
  }
}

let steps = [step1Func, step2Func, step3Func];
function* iterateSteps(steps) {
  for (var i = 0; i < steps.length; i++) {
    var step = steps[i];
    yield step();
  }
}

let jobs = [job1, job2, job3];
function* iterateJobs(jobs) {
  for (var i = 0; i < jobs.length; i++) {
    var job = jobs[i];
    yield* iterateSteps(job.steps);
  }
}

for (var step of iterateJobs(jobs)) {
  console.log(step.id);
}

var it = iterateJobs(jobs);
var res = it.next();
while (!res.done) {
  var result = res.value;
  res = it.next();
}