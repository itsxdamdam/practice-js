function recall(x) {
  console.log("start")
  x++

  if(x < 5) {
    recall(x)
  }
  console.log("end");
}

recall(1)
