function match(candidate, job) {
  if (candidate.minSalary == null || job.maxSalary == null) throw "value missing";
  if (candidate.minSalary - candidate.minSalary*0.1 <= job.maxSalary) {
    return true;
  }
  return false;
}

// const match = (candidate, job) => {
//   if (!job.maxSalary || !candidate.minSalary) throw TypeError('Missing salary');
//   return job.maxSalary >= (candidate.minSalary * .9);
// };
